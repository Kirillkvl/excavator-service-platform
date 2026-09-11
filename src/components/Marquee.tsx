const ITEMS = [
  'Экскаваторы',
  'Погрузчики',
  'Самосвалы',
  'Автокраны',
  'Бульдозеры',
  'Ямобуры',
  'Манипуляторы',
  'Виброкатки',
  'Автовышки',
];

const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y-4 border-foreground bg-primary py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground"
          >
            {item}
            <i className="inline-block h-2 w-2 rotate-45 bg-primary-foreground" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
