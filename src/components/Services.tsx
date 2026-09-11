import Icon from '@/components/ui/icon';

const SERVICES = [
  {
    icon: 'Shovel',
    title: 'Земляные работы',
    text: 'Котлованы, траншеи под коммуникации, выемка грунта, обратная засыпка с трамбовкой.',
    tags: ['Котлован', 'Траншея', 'Засыпка'],
  },
  {
    icon: 'Mountain',
    title: 'Планировка участка',
    text: 'Выравнивание рельефа, подсыпка и уплотнение, подготовка площадки под стройку.',
    tags: ['Выравнивание', 'Подсыпка', 'Уплотнение'],
  },
  {
    icon: 'Truck',
    title: 'Вывоз и доставка',
    text: 'Вывоз грунта, строймусора и снега. Доставка песка, щебня, чернозёма, ПГС.',
    tags: ['Грунт', 'Щебень', 'Снег'],
  },
  {
    icon: 'Drill',
    title: 'Бурение под сваи',
    text: 'Ямобур под столбы забора, винтовые и буронабивные сваи, опоры освещения.',
    tags: ['Забор', 'Сваи', 'Опоры'],
  },
  {
    icon: 'Hammer',
    title: 'Демонтаж',
    text: 'Снос ветхих построек, разбор фундаментов, гидромолот по бетону и асфальту.',
    tags: ['Снос', 'Гидромолот', 'Вывоз'],
  },
  {
    icon: 'Crane',
    title: 'Погрузка и подъём',
    text: 'Манипулятор и автокран: бытовки, ЖБИ, кольца колодцев, пиломатериал, техника.',
    tags: ['Манипулятор', 'Автокран', 'Монтаж'],
  },
  {
    icon: 'Wheat',
    title: 'Работы в хозяйствах',
    text: 'Расчистка полей и дорог, погрузка сыпучих, устройство подъездов к ферме.',
    tags: ['Поля', 'Дороги', 'Ферма'],
  },
  {
    icon: 'Snowflake',
    title: 'Зимнее обслуживание',
    text: 'Уборка и вывоз снега с территорий, подсыпка, расчистка проездов и стоянок.',
    tags: ['Уборка', 'Вывоз', 'Подсыпка'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">01 — что делаем</div>
            <h2 className="mt-3 text-4xl uppercase leading-[1.05] md:text-6xl">
              Услуги и<br />виды работ
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Берёмся и за один час на даче, и за месячный подряд на объекте. Подбираем машину
            под задачу, а не задачу под машину.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col gap-4 bg-card p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
                <Icon name={s.icon} fallback="Wrench" size={24} />
              </div>
              <h3 className="text-lg uppercase leading-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">
                {s.text}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-foreground/25 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
