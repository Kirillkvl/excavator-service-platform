import Icon from '@/components/ui/icon';

const CLIENTS = [
  {
    icon: 'Home',
    title: 'Частникам',
    text: 'Дачи, участки, дома. Заедем в узкий проезд, отработаем хоть 1 час и уберём за собой.',
  },
  {
    icon: 'HardHat',
    title: 'Бригадам и подрядчикам',
    text: 'Фиксированная ставка, техника без простоев, замена машины в тот же день при поломке.',
  },
  {
    icon: 'Building2',
    title: 'Компаниям и УК',
    text: 'Договор, безнал, закрывающие документы. Сезонные ставки и заявки по телефону.',
  },
  {
    icon: 'Tractor',
    title: 'Фермерам',
    text: 'Расчистка полей и подъездов, погрузка сыпучих, работы в хозяйстве круглый год.',
  },
];

const Clients = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="mb-10">
          <div className="section-label">Кому возим технику</div>
          <h2 className="mt-3 max-w-2xl text-3xl uppercase leading-[1.1] md:text-5xl">
            Работаем и с одной ямой, и с целым объектом
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((c) => (
            <article
              key={c.title}
              className="hover-lift border-4 border-foreground bg-card p-6 transition-colors duration-300 hover:bg-secondary"
            >
              <Icon name={c.icon} fallback="Users" size={26} className="mb-4" />
              <h3 className="text-base uppercase">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;