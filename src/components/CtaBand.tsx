import Icon from '@/components/ui/icon';
import { PHONE, PHONE_HREF } from '@/lib/site';

const STATS = [
  { v: '14 лет', t: 'на объектах' },
  { v: '20+', t: 'видов техники' },
  { v: '2 часа', t: 'средняя подача' },
  { v: '4 часа', t: 'минимальный заказ' },
];

const CtaBand = () => {
  return (
    <section className="grain relative overflow-hidden border-y-4 border-foreground bg-background py-14">
      <div className="container relative z-[2] grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.t}>
              <div className="font-display text-3xl leading-none md:text-4xl">{s.v}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {s.t}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.12em] text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            <Icon name="Phone" size={18} />
            {PHONE}
          </a>
          <a
            href="#contacts"
            className="border-2 border-foreground px-7 py-[14px] font-display text-sm uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:bg-secondary"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
