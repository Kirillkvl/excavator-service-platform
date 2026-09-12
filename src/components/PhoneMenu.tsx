import { ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { PHONES } from '@/lib/site';

type Props = {
  className?: string;
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom' | 'left' | 'right';
};

const PhoneMenu = ({ className, children, align = 'end', side = 'bottom' }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        className="z-[60] w-[260px] border-4 border-foreground bg-card p-0 shadow-[6px_6px_0_hsl(var(--foreground))]"
      >
        <div className="bg-primary px-4 py-2 font-display text-[11px] uppercase tracking-[0.16em] text-primary-foreground">
          Позвонить
        </div>
        <div className="flex flex-col">
          {PHONES.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 transition-colors hover:bg-secondary"
            >
              <Icon name="Phone" size={18} className="shrink-0" />
              <span className="text-left">
                <span className="block font-display text-sm tracking-[0.04em] text-foreground">
                  {p.label}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.name}
                </span>
              </span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PhoneMenu;
