import Icon from '@/components/ui/icon';
import { MAX_HREF, PHONE_HREF, TELEGRAM_HREF, WHATSAPP_HREF } from '@/lib/site';

type QuickButton = {
  href: string;
  label: string;
  icon?: string;
  text?: string;
  className: string;
};

const BUTTONS: QuickButton[] = [
  {
    href: WHATSAPP_HREF,
    label: 'Написать в WhatsApp',
    icon: 'MessageCircle',
    className: 'bg-[#25D366] text-[#05270f]',
  },
  {
    href: TELEGRAM_HREF,
    label: 'Написать в Telegram',
    icon: 'Send',
    className: 'bg-[#2AABEE] text-[#052236]',
  },
  {
    href: MAX_HREF,
    label: 'Написать в MAX',
    text: 'MAX',
    className: 'bg-[#7B4DFF] text-white',
  },
  {
    href: PHONE_HREF,
    label: 'Позвонить',
    icon: 'Phone',
    className: 'bg-secondary text-secondary-foreground',
  },
];

const QuickContact = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-6">
      {BUTTONS.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target={b.href.startsWith('tel:') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={b.label}
          title={b.label}
          className={`group flex h-14 w-14 items-center justify-center border-4 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-200 hover:-translate-y-1 ${b.className}`}
        >
          {b.icon ? (
            <Icon name={b.icon} fallback="MessageCircle" size={24} />
          ) : (
            <span className="font-display text-[13px] font-bold tracking-[0.02em]">{b.text}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default QuickContact;