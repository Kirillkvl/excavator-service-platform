import json
import os
import smtplib
import threading
import urllib.parse
import urllib.request
from email.message import EmailMessage

CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
}


def send_telegram(text: str) -> str:
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        return 'skipped'
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()
    try:
        with urllib.request.urlopen(url, data=data, timeout=3) as resp:
            resp.read()
        return 'ok'
    except Exception as exc:
        return f'error: {exc}'


def send_email(subject: str, text: str) -> str:
    host = os.environ.get('SMTP_HOST')
    user = os.environ.get('SMTP_USER')
    password = os.environ.get('SMTP_PASSWORD')
    to = os.environ.get('NOTIFY_EMAIL')
    if not host or not user or not password or not to:
        return 'skipped'
    port = int(os.environ.get('SMTP_PORT', '465'))
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = user
    msg['To'] = to
    msg.set_content(text)
    try:
        if port == 587:
            server = smtplib.SMTP(host, port, timeout=3)
            server.starttls()
        else:
            server = smtplib.SMTP_SSL(host, port, timeout=3)
        server.login(user, password)
        server.send_message(msg)
        server.quit()
        return 'ok'
    except Exception as exc:
        return f'error: {exc}'


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта и отправляет её в Telegram и на почту владельца'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**CORS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()
    phone = str(body.get('phone', '')).strip()
    task = str(body.get('task', '')).strip()

    digits = ''.join(ch for ch in phone if ch.isdigit())
    if len(name) < 2 or len(digits) < 10 or len(task) < 5:
        return {
            'statusCode': 400,
            'headers': {**CORS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Заполните имя, телефон и задачу'}, ensure_ascii=False),
        }

    text = (
        'Новая заявка с сайта\n\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Задача: {task}'
    )

    results = {}

    def run(key, fn, *args):
        results[key] = fn(*args)

    threads = [
        threading.Thread(target=run, args=('telegram', send_telegram, text)),
        threading.Thread(target=run, args=('email', send_email, 'Новая заявка с сайта', text)),
    ]
    for t in threads:
        t.start()
    for t in threads:
        t.join(timeout=3.5)

    print(f'lead delivery: {results}')

    return {
        'statusCode': 200,
        'headers': {**CORS, 'Content-Type': 'application/json'},
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, **results}, ensure_ascii=False),
    }