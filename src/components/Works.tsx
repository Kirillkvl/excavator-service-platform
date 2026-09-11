import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { IMG } from '@/lib/site';

const WORKS = [
  {
    img: IMG.trench,
    title: 'Траншея под водопровод, 140 м',
    client: 'Частный дом, СНТ «Берёзка»',
    text: 'Экскаватор-погрузчик прошёл 140 метров по глинистому грунту за смену: копка, укладка, обратная засыпка с трамбовкой.',
    machine: 'Экскаватор-погрузчик',
    term: '1 смена',
  },
  {
    img: IMG.dump,
    title: 'Вывоз грунта с площадки, 380 м³',
    client: 'Строительная бригада, ЖК на объезде',
    text: 'Фронтальный погрузчик и три самосвала: расчистили пятно застройки и вывезли грунт на согласованный полигон.',
    machine: 'Погрузчик + 3 самосвала',
    term: '4 дня',
  },
  {
    img: IMG.crane,
    title: 'Монтаж колодезных колец',
    client: 'Фермерское хозяйство',
    text: 'Манипулятор доставил и установил шесть колец с крышкой, ямобур подготовил шурфы под опоры навеса.',
    machine: 'Манипулятор + ямобур',
    term: '1 день',
  },
  {
    img: IMG.hero,
    title: 'Планировка участка 12 соток',
    client: 'Частник, дача у реки',
    text: 'Сняли плодородный слой, выровняли перепад 80 см, подсыпали ПГС и уплотнили катком под будущий газон.',
    machine: 'Бульдозер + виброкаток',
    term: '2 смены',
  },
  {
    img: IMG.dump,
    title: 'Зимняя уборка территории',
    client: 'Управляющая компания',
    text: 'Три месяца по договору: чистка проездов и парковок, вывоз снега, подсыпка на наледь по заявке за 2 часа.',
    machine: 'Погрузчик + самосвалы',
    term: 'Сезон',
  },
  {
    img: IMG.trench,
    title: 'Демонтаж старого фундамента',
    client: 'Подрядчик, реконструкция цеха',
    text: 'Гидромолотом разбили плиту 220 м², отсортировали бой и вывезли на переработку без остановки работ на объекте.',
    machine: 'Экскаватор с гидромолотом',
    term: '3 смены',
  },
];

const Works = () => {
  const [active, setActive] = useState<number | null>(null);
  const item = active === null ? null : WORKS[active];

  return (
    <section id="works" className="bg-muted py-20 md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">04 — портфолио</div>
            <h2 className="mt-3 text-4xl uppercase leading-[1.05] md:text-6xl">
              Выполненные работы
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Нажмите на карточку — расскажем, какой техникой и за какой срок сделали.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <button
              key={w.title}
              type="button"
              onClick={() => setActive(i)}
              className="hover-lift group relative block overflow-hidden border-4 border-foreground text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--hero-x-photo-canvas)]">
                <img
                  src={w.img}
                  alt={w.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(1.08) contrast(1.04) sepia(.12)' }}
                />
                <span className="absolute right-3 top-3 bg-secondary px-2 py-1 font-display text-[10px] uppercase tracking-[0.14em] text-secondary-foreground">
                  {w.term}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 bg-card p-4">
                <div>
                  <h3 className="text-sm uppercase leading-tight">{w.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {w.client}
                  </p>
                </div>
                <Icon
                  name="ArrowUpRight"
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl border-4 border-foreground bg-card p-0">
          {item && (
            <div>
              <div className="aspect-[16/9] overflow-hidden bg-[var(--hero-x-photo-canvas)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  style={{ filter: 'saturate(1.08) contrast(1.04) sepia(.12)' }}
                />
              </div>
              <div className="p-6">
                <div className="section-label">{item.client}</div>
                <h3 className="mt-2 text-2xl uppercase leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
                    {item.machine}
                  </span>
                  <span className="bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-secondary-foreground">
                    Срок: {item.term}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Works;
