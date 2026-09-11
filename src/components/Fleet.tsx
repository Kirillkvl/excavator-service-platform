import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';

type Machine = {
  name: string;
  group: string;
  spec: string;
  price: string;
  icon: string;
};

const GROUPS = [
  { id: 'all', label: 'Вся техника' },
  { id: 'dig', label: 'Копка' },
  { id: 'haul', label: 'Перевозка' },
  { id: 'lift', label: 'Подъём' },
  { id: 'road', label: 'Дорожная' },
];

const MACHINES: Machine[] = [
  { name: 'Экскаватор-погрузчик', group: 'dig', spec: 'Глубина копки до 4,5 м, ковш 0,3 м³', price: '2 900 ₽/час', icon: 'Tractor' },
  { name: 'Колёсный экскаватор', group: 'dig', spec: 'Масса 15–22 т, глубина до 6 м', price: '3 800 ₽/час', icon: 'Shovel' },
  { name: 'Фронтальный погрузчик', group: 'dig', spec: 'Ковш 1,8–3 м³, вилы в комплекте', price: '2 700 ₽/час', icon: 'Forklift' },
  { name: 'Мини-погрузчик', group: 'dig', spec: 'Проезд в калитку, ковш и щётка', price: '2 700 ₽/час', icon: 'Forklift' },
  { name: 'Бульдозер 17–51 т', group: 'dig', spec: 'Отвал до 4 м, планировка и вскрыша', price: '4 000 ₽/час', icon: 'Mountain' },
  { name: 'Автогрейдер', group: 'road', spec: 'Профилирование дорог и площадок', price: '3 600 ₽/час', icon: 'Ruler' },
  { name: 'Самосвал 5–35 т', group: 'haul', spec: 'Кузов 5–20 м³, разгрузка назад', price: '1 800 ₽/час', icon: 'Truck' },
  { name: 'Длинномеры 12–13,6 м', group: 'haul', spec: 'Перевозка длинных грузов до 20 т', price: 'от 3 000 ₽/час', icon: 'Container' },
  { name: 'Манипулятор 5–25 т', group: 'lift', spec: 'Борт до 25 т, стрела 5–12 т', price: '1 800 ₽/час', icon: 'Crane' },
  { name: 'Автокран 12–75 т', group: 'lift', spec: 'Вылет стрелы до 50 м', price: '2 500 ₽/час', icon: 'Crane' },
  { name: 'Автовышка 10–55 м', group: 'lift', spec: 'Высота подъёма до 55 м', price: '1 700 ₽/час', icon: 'ArrowUpFromLine' },
  { name: 'Автобетононасос 18–57 м', group: 'lift', spec: 'Подача бетона на высоту до 57 м', price: 'от 3 500 ₽/час', icon: 'Container' },
];

const Fleet = () => {
  const [group, setGroup] = useState('all');

  const list = useMemo(
    () => (group === 'all' ? MACHINES : MACHINES.filter((m) => m.group === group)),
    [group],
  );

  return (
    <section id="fleet" className="relative bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label text-secondary/70">02 — парк машин</div>
            <h2 className="mt-3 text-4xl uppercase leading-[1.05] text-secondary md:text-6xl">
              Наша техника
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            12 видов машин: своя техника и проверенные партнёры. Нет нужной в парке — найдём и
            подгоним в тот же день.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGroup(g.id)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-200 ${
                group === g.id
                  ? 'border-secondary bg-secondary text-secondary-foreground'
                  : 'border-background/30 text-background/70 hover:border-secondary hover:text-secondary'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="grid gap-px bg-background/20 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m) => (
            <a
              key={m.name}
              href="#contacts"
              aria-label={`Заказать: ${m.name}`}
              className="animate-fade-in group flex cursor-pointer flex-col gap-3 bg-primary p-6 transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              <Icon
                name={m.icon}
                fallback="Truck"
                size={28}
                className="text-secondary transition-transform duration-300 group-hover:scale-110 group-hover:text-secondary-foreground"
              />
              <h3 className="text-base uppercase leading-tight">{m.name}</h3>
              <p className="text-xs leading-relaxed text-background/60 group-hover:text-secondary-foreground/80">
                {m.spec}
              </p>
              <div className="mt-auto flex items-center justify-between pt-3 font-display text-sm text-secondary group-hover:text-secondary-foreground">
                {m.price}
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Заказать
                  <Icon name="ArrowRight" size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;