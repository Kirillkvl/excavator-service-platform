import PhoneMenu from '@/components/PhoneMenu';
import { IMG, PHONE, PHONE_2, PHONE_2_HREF, PHONE_HREF } from '@/lib/site';

const Hero = () => {
  return (
    <main
      id="hero"
      className="mx-[22px] mb-[22px] mt-5 grid min-h-[520px] grid-cols-1 grid-rows-none gap-0 md:h-[calc(100vh-124px)] md:min-h-[560px] md:grid-cols-[46.5%_53.5%] md:grid-rows-[1fr_auto]"
      style={{ gridTemplateAreas: undefined }}
    >
      {/* ——— постер ——— */}
      <section className="grain relative order-1 min-h-[420px] overflow-hidden bg-[var(--hero-surface)] md:order-none md:min-h-[340px] md:[grid-area:1/1/2/2]">
        <div className="hero-eyebrow absolute left-[34px] top-[30px] z-[3] text-[0.82em] font-medium uppercase tracking-[0.3em] text-foreground">
          С 2011 года · Минимум 4 часа
        </div>

        <div className="hero-diag">
          <h1 className="hero-h1">
            любая спецтехника<span className="l2">на заказ</span>
          </h1>
        </div>

        <p className="hero-lead absolute bottom-[96px] left-[34px] z-[3] max-w-[74%] text-[0.95em] font-normal leading-[1.45] text-foreground">
          Траншеи, планировка участка, вывоз грунта. Экскаваторы-погрузчики, самосвалы,
          бульдозеры, ямобуры, манипуляторы — подберём машину под работу.
        </p>

        <div className="hero-rules absolute bottom-[46px] left-0 right-0">
          <span />
          <span />
        </div>

        <div className="hero-columns absolute bottom-[-60px] right-[30px] top-[26%] z-[2] flex w-[62px] gap-3">
          <i />
          <i />
        </div>
      </section>

      {/* ——— кнопка ——— */}
      <section className="grain hero-fade relative order-3 flex flex-wrap items-end gap-[18px] overflow-hidden bg-[var(--hero-surface)] px-[34px] pb-[30px] pt-6 md:order-none md:pt-0 md:[grid-area:2/1/3/2]">
        <PhoneMenu
          align="start"
          side="top"
          className="relative z-[2] bg-primary px-[30px] py-[15px] font-display text-[1.05em] uppercase tracking-[0.1em] text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
        >
          Позвонить
        </PhoneMenu>
        <div className="relative z-[2] pb-1 text-[0.8em] uppercase leading-[1.4] tracking-[0.16em] text-foreground">
          <a href={PHONE_HREF} className="block font-semibold hover:opacity-70">
            {PHONE}
          </a>
          <a href={PHONE_2_HREF} className="block font-semibold hover:opacity-70">
            {PHONE_2}
          </a>
          <span className="text-muted-foreground">Выезд по городу и области</span>
        </div>
      </section>

      {/* ——— фото ——— */}
      <figure className="grain hero-fade relative order-2 min-h-[280px] overflow-hidden bg-[var(--hero-x-photo-canvas)] md:order-none md:min-h-0 md:[grid-area:1/2/3/3]">
        <img
          src={IMG.hero}
          alt="Экскаватор-погрузчик и самосвал на участке"
          className="hero-photo-img"
        />
        <div className="hero-frame" />
        <figcaption className="hero-stamp text-[1.1em] sm:text-[1.6em] md:text-[2.1em]">
          Машина сегодня
        </figcaption>
      </figure>
    </main>
  );
};

export default Hero;