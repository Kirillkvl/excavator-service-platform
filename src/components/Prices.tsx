import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ROWS = [
  { name: 'Мини-экскаватор', hour: '1 300 ₽', shift: '9 500 ₽', min: '1 час' },
  { name: 'Экскаватор-погрузчик', hour: '1 600 ₽', shift: '11 000 ₽', min: '1 час' },
  { name: 'Гусеничный экскаватор', hour: '2 400 ₽', shift: '17 500 ₽', min: '1 час' },
  { name: 'Самосвал 10 т', hour: '1 400 ₽', shift: '10 000 ₽', min: '1 час' },
  { name: 'Самосвал 20–30 т', hour: '2 200 ₽', shift: '16 000 ₽', min: '1 час' },
  { name: 'Манипулятор', hour: '1 900 ₽', shift: '13 500 ₽', min: '1 час' },
  { name: 'Автокран 25 т', hour: '2 500 ₽', shift: '18 000 ₽', min: '1 час' },
  { name: 'Ямобур', hour: '1 800 ₽', shift: '12 500 ₽', min: '1 час' },
  { name: 'Бульдозер', hour: '2 600 ₽', shift: '19 000 ₽', min: '1 час' },
];

const TERMS = [
  {
    q: 'Как считается время работы',
    a: 'Отсчёт идёт с момента прибытия машины на объект и до окончания работ. Подача по городу входит в стоимость, за область — по километражу, 45 ₽ за км в обе стороны.',
  },
  {
    q: 'Минимальный заказ и переработка',
    a: 'Минимальный заказ — 1 час на любую технику. Каждый следующий час считается по часовой ставке без повышающего коэффициента, от 8 часов выгоднее взять смену.',
  },
  {
    q: 'Оплата',
    a: 'Частникам — наличными или переводом по факту выполнения. Организациям — безнал с НДС и без, договор и закрывающие документы. Для длительных подрядов возможна постоплата по графику.',
  },
  {
    q: 'Что нужно от заказчика',
    a: 'Подъезд для техники, точка выгрузки и обозначенные подземные коммуникации. Если схема сетей неизвестна — работаем аккуратно, но ответственность за скрытые трубы и кабели остаётся на заказчике.',
  },
  {
    q: 'Скидки',
    a: 'От 3 смен подряд — минус 7%, от 10 смен — минус 12%. Постоянным подрядчикам и управляющим компаниям фиксируем ставку на сезон.',
  },
];

const Prices = () => {
  return (
    <section id="prices" className="py-20 md:py-28">
      <div className="container">
        <div className="mb-12">
          <div className="section-label">03 — сколько стоит</div>
          <h2 className="mt-3 text-4xl uppercase leading-[1.05] md:text-6xl">Цены и условия</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="border-4 border-foreground bg-card">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-primary px-4 py-3 font-display text-[10px] uppercase tracking-[0.14em] text-primary-foreground sm:px-6 sm:text-xs">
              <span>Техника</span>
              <span className="text-right">Час</span>
              <span className="text-right">Смена 8 ч</span>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-border px-4 py-3 text-xs transition-colors duration-200 last:border-b-0 hover:bg-secondary sm:px-6 sm:text-sm"
              >
                <span className="pr-2">
                  {r.name}
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    мин. {r.min}
                  </span>
                </span>
                <span className="text-right font-display">{r.hour}</span>
                <span className="text-right font-display">{r.shift}</span>
              </div>
            ))}
            <div className="flex items-start gap-2 bg-muted px-4 py-4 text-[11px] leading-relaxed text-muted-foreground sm:px-6">
              <Icon name="Info" size={14} className="mt-[2px] shrink-0" />
              Цены ориентировочные. Точную ставку называем после уточнения объёма, грунта и
              удалённости объекта.
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl uppercase">Условия работы</h3>
            <Accordion type="single" collapsible className="w-full">
              {TERMS.map((t, i) => (
                <AccordionItem key={t.q} value={`item-${i}`} className="border-b border-foreground/20">
                  <AccordionTrigger className="text-left text-sm uppercase tracking-[0.04em] hover:no-underline">
                    {t.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {t.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;