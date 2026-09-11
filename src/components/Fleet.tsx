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
  { name: 'Экскаватор-погрузчик', group: 'dig', spec: 'Глубина копки до 4,5 м, ковш 0,3 м³', price: 'от 1 600 ₽/час', icon: 'Tractor' },
  { name: 'Гусеничный экскаватор', group: 'dig', spec: 'Масса 20 т, глубина до 6,5 м', price: 'от 2 400 ₽/час', icon: 'Shovel' },
  { name: 'Мини-экскаватор', group: 'dig', spec: '1,5–3,5 т, проезд в калитку 1 м', price: 'от 1 300 ₽/час', icon: 'Tractor' },
  { name: 'Фронтальный погрузчик', group: 'dig', spec: 'Ковш 1,8–3 м³, вилы в комплекте', price: 'от 1 800 ₽/час', icon: 'Forklift' },
  { name: 'Бульдозер', group: 'dig', spec: 'Т-130 / Т-170, отвал 3,2 м', price: 'от 2 600 ₽/час', icon: 'Mountain' },
  { name: 'Самосвал 10 т', group: 'haul', spec: 'Кузов 6 м³, разгрузка назад', price: 'от 1 400 ₽/час', icon: 'Truck' },
  { name: 'Самосвал 20–30 т', group: 'haul', spec: 'Кузов 12–20 м³, трёхосный', price: 'от 2 200 ₽/час', icon: 'Truck' },
  { name: 'Трал / эвакуатор', group: 'haul', spec: 'Перевозка техники до 25 т', price: 'от 3 000 ₽/час', icon: 'Container' },
  { name: 'Ассенизатор', group: 'haul', spec: 'Бочка 4–10 м³, шланг 20 м', price: 'от 1 500 ₽/рейс', icon: 'Droplets' },
  { name: 'Манипулятор', group: 'lift', spec: 'Борт 10 т, стрела 5 т / 12 м', price: 'от 1 900 ₽/час', icon: 'Crane' },
  { name: 'Автокран', group: 'lift', spec: '16–50 т, вылет стрелы до 34 м', price: 'от 2 500 ₽/час', icon: 'Crane' },
  { name: 'Автовышка', group: 'lift', spec: 'Высота подъёма 17–45 м', price: 'от 1 700 ₽/час', icon: 'ArrowUpFromLine' },
  { name: 'Телескопический погрузчик', group: 'lift', spec: 'Подъём 4 т на 17 м', price: 'от 2 100 ₽/час', icon: 'Forklift' },
  { name: 'Ямобур', group: 'dig', spec: 'Шнек 200–600 мм, глубина 8 м', price: 'от 1 800 ₽/час', icon: 'Drill' },
  { name: 'Гидромолот', group: 'road', spec: 'Навесной, бетон и асфальт', price: 'от 2 300 ₽/час', icon: 'Hammer' },
  { name: 'Виброкаток', group: 'road', spec: '1,5–12 т, уплотнение основания', price: 'от 1 600 ₽/час', icon: 'CircleDot' },
  { name: 'Автогрейдер', group: 'road', spec: 'Профилирование дорог и площадок', price: 'от 2 400 ₽/час', icon: 'Ruler' },
  { name: 'Дорожная фреза', group: 'road', spec: 'Снятие асфальта до 200 мм', price: 'от 3 200 ₽/час', icon: 'Cog' },
  { name: 'Поливомоечная машина', group: 'road', spec: 'Мойка, полив, подсыпка зимой', price: 'от 1 500 ₽/час', icon: 'Waves' },
  { name: 'Снегоуборочная техника', group: 'road', spec: 'Щётка, отвал, погрузка снега', price: 'от 1 700 ₽/час', icon: 'Snowflake' },
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
            Больше 20 видов машин: своя техника и проверенные партнёры. Нет нужной в парке —
            найдём и подгоним в тот же день.
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
            <article
              key={m.name}
              className="animate-fade-in group flex flex-col gap-3 bg-primary p-6 transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
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
              <div className="mt-auto pt-3 font-display text-sm text-secondary group-hover:text-secondary-foreground">
                {m.price}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
