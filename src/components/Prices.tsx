import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const ROWS = [
  {
    name: "Экскаватор-погрузчик",
    hour: "2 900 ₽",
    shift: "23 200 ₽",
    min: "4 часа",
  },
  {
    name: "Колёсный экскаватор",
    hour: "3 800 ₽",
    shift: "30 400 ₽",
    min: "8 часа",
  },
  {
    name: "Фронтальный погрузчик",
    hour: "2 700 ₽",
    shift: "21 600 ₽",
    min: "4 часа",
  },
  { name: "Мини-погрузчик", hour: "2 700 ₽", shift: "21 600 ₽", min: "4 часа" },
  { name: "Автогрейдер", hour: "3 600 ₽", shift: "28 800 ₽", min: "10 часов" },
  {
    name: "Бульдозер 17–51 т",
    hour: "4 000 ₽",
    shift: "32 000 ₽",
    min: "10 часа",
  },
  {
    name: "Автокран 12–75 т",
    hour: "2 500 ₽",
    shift: "20 000 ₽",
    min: "4 часа",
  },
  {
    name: "Самосвал 5–35 т",
    hour: "1 800 ₽",
    shift: "14 400 ₽",
    min: "4 часа",
  },
  {
    name: "Манипулятор 5–25 т",
    hour: "1 800 ₽",
    shift: "14 400 ₽",
    min: "4 часа",
  },
  {
    name: "Автовышка 10–55 м",
    hour: "1 700 ₽",
    shift: "13 600 ₽",
    min: "4 часа",
  },
  {
    name: "Автобетононасос 18–57 м",
    hour: "от 3 500 ₽",
    shift: "от 28 000 ₽",
    min: "4 часа",
  },
  {
    name: "Длинномеры 12–13,6 м",
    hour: "от 3 000 ₽",
    shift: "от 24 000 ₽",
    min: "4 часа",
  },
];

const TERMS = [
  {
    q: "Как считается время работы",
    a: "Отсчёт идёт 20 км туда и обратно час подачи. Подача по городу плюс час, за область — по километражу.",
  },
  {
    q: "Минимальный заказ и переработка",
    a: "Оплата почасовая, минимальный заказ — 4 часа на любую технику. Дальше считаем по факту: каждый час сверх минимума по часовой ставке без повышающего коэффициента, от 8 часов выгоднее взять смену.",
  },
  {
    q: "Оплата",
    a: "Частникам — наличными или переводом по факту выполнения. Организациям — безнал с НДС и без, договор и закрывающие документы. Для длительных подрядов возможна постоплата по графику.",
  },
  {
    q: "Что нужно от заказчика",
    a: "Подъезд для техники, точка выгрузки и обозначенные подземные коммуникации. Если схема сетей неизвестна — работаем аккуратно, но ответственность за скрытые трубы и кабели остаётся на заказчике.",
  },
  {
    q: "Скидки",
    a: "От 3 смен подряд — минус 7%, от 10 смен — минус 12%. Постоянным подрядчикам и управляющим компаниям фиксируем ставку на сезон.",
  },
];

const Prices = () => {
  return (
    <section id="prices" className="py-20 md:py-28">
      <div className="container">
        <div className="mb-12">
          <div className="section-label">03 — сколько стоит</div>
          <h2 className="mt-3 text-4xl uppercase leading-[1.05] md:text-6xl">
            Цены и условия
          </h2>
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
              Оплата почасовая, минимальный заказ — 4 часа. Цены
              ориентировочные: точную ставку называем после уточнения объёма,
              грунта и удалённости объекта.
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl uppercase">Условия работы</h3>
            <Accordion type="single" collapsible className="w-full">
              {TERMS.map((t, i) => (
                <AccordionItem
                  key={t.q}
                  value={`item-${i}`}
                  className="border-b border-foreground/20"
                >
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
