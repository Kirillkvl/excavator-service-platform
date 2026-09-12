import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import PhoneMenu from '@/components/PhoneMenu';
import { NAV_LINKS, PHONE, PHONE_2, PHONE_2_HREF, PHONE_HREF } from '@/lib/site';

const LOGO =
  'https://cdn.poehali.dev/projects/cf2e2ab7-6013-423b-9d13-bff88ef7cb01/bucket/6e8350ff-dc3e-4180-99bc-13834aeec731.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* верхняя чёрная полоса */}
      <div className="relative flex h-[60px] flex-none items-center justify-center bg-primary px-[22px]">
        <a href="#hero" className="flex items-center gap-3">
          <img src={LOGO} alt="Спец техника" className="h-8 w-auto" />
          <span className="font-display text-[1.15em] uppercase tracking-[0.1em] text-primary-foreground">
            Спец техника
          </span>
        </a>

        <PhoneMenu className="absolute right-[22px] top-1/2 hidden -translate-y-1/2 items-center gap-2 text-[0.82em] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-70 sm:flex">
          {PHONE}
          <Icon name="ChevronDown" size={14} />
        </PhoneMenu>

        <button
          type="button"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="absolute right-[18px] top-1/2 -translate-y-1/2 text-primary-foreground md:hidden"
        >
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>

      {/* навигация */}
      <nav className="hidden h-[42px] flex-none items-center justify-between border-b border-foreground/20 bg-background px-10 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="story-link text-[0.86em] font-medium uppercase tracking-[0.12em] text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* мобильное меню */}
      {open && (
        <div className="animate-fade-in border-b border-foreground/20 bg-background md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setOpen(false)}
              className="bg-primary px-6 py-4 font-display uppercase tracking-[0.1em] text-primary-foreground"
            >
              {PHONE}
            </a>
            <a
              href={PHONE_2_HREF}
              onClick={() => setOpen(false)}
              className="border-t border-background/20 bg-primary px-6 py-4 font-display uppercase tracking-[0.1em] text-primary-foreground"
            >
              {PHONE_2}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;