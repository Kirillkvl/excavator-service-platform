import { useCallback, useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const REVIEWS = [
  {
    text: 'Заказывал экскаватор на дачу под септик и дренаж. Приехали в назначенное время, машинист сам предложил, как аккуратнее зайти, чтобы не раздавить дорожку. За полдня всё выкопали и засыпали.',
    name: 'Сергей Ковалёв',
    role: 'Частник, участок в СНТ',
    rate: 5,
  },
  {
    text: 'Работаем бригадой, техника нужна регулярно и без сюрпризов. Тут ставка фиксированная, машины исправные, замену при поломке подгоняли в тот же день. Для нас это главное.',
    name: 'Андрей Мелихов',
    role: 'Прораб строительной бригады',
    rate: 5,
  },
  {
    text: 'Управляем тремя дворами, зимой без техники никак. Подписали договор на сезон, заявки по телефону закрывают за пару часов. Документы приходят вовремя, вопросов у бухгалтерии нет.',
    name: 'Ирина Дорошенко',
    role: 'Управляющая компания',
    rate: 5,
  },
  {
    text: 'Нужно было расчистить подъезд к ферме и перекидать силос. Прислали погрузчик с опытным оператором, отработал смену без единого простоя. Цену назвали сразу и не меняли.',
    name: 'Виктор Панин',
    role: 'Фермерское хозяйство',
    rate: 5,
  },
];

const Reviews = () => {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((v) => (v + 1) % REVIEWS.length), []);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const r = REVIEWS[i];

  return (
    <section id="reviews" className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="grain absolute inset-0" />
      <div className="container relative">
        <div className="mb-10">
          <div className="section-label text-secondary-foreground/60">05 — что говорят</div>
          <h2 className="mt-3 text-4xl uppercase leading-[1.05] md:text-6xl">Отзывы</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <blockquote key={i} className="animate-fade-in">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: r.rate }).map((_, k) => (
                <Icon key={k} name="Star" size={18} className="fill-current" />
              ))}
            </div>
            <p className="text-lg font-light leading-relaxed md:text-2xl">«{r.text}»</p>
            <footer className="mt-6 border-t-2 border-secondary-foreground/30 pt-4">
              <div className="font-display text-base uppercase">{r.name}</div>
              <div className="text-xs uppercase tracking-[0.16em] opacity-70">{r.role}</div>
            </footer>
          </blockquote>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущий отзыв"
              className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground transition-transform duration-200 hover:-translate-x-1"
            >
              <Icon name="ArrowLeft" size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующий отзыв"
              className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground transition-transform duration-200 hover:translate-x-1"
            >
              <Icon name="ArrowRight" size={20} />
            </button>
            <div className="ml-2 flex gap-2">
              {REVIEWS.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  aria-label={`Отзыв ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 transition-all duration-300 ${
                    k === i ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
