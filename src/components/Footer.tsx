import { NAV_LINKS, PHONE, PHONE_2, PHONE_2_HREF, PHONE_HREF } from '@/lib/site';

const LOGO =
  'https://cdn.poehali.dev/projects/cf2e2ab7-6013-423b-9d13-bff88ef7cb01/bucket/6e8350ff-dc3e-4180-99bc-13834aeec731.jpg';

const Footer = () => {
  return (
    <footer className="border-t-4 border-foreground bg-background py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="Спец техника" className="h-9 w-auto" />
          <div>
            <div className="font-display text-base uppercase tracking-[0.1em]">Спец техника</div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Любая спецтехника на заказ с 2011 года
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="bg-primary px-6 py-3 text-center font-display text-sm uppercase tracking-[0.12em] text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            {PHONE}
          </a>
          <a
            href={PHONE_2_HREF}
            className="border-2 border-foreground px-6 py-[10px] text-center font-display text-sm uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:bg-secondary"
          >
            {PHONE_2}
          </a>
        </div>
      </div>
      <div className="container mt-8 border-t border-border pt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        © {new Date().getFullYear()} Спец техника · Аренда спецтехники · Не является публичной
        офертой
      </div>
    </footer>
  );
};

export default Footer;