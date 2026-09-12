import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PHONE, PHONE_HREF } from "@/lib/site";

const ZONES = [
  { name: "Город", note: "Подача бесплатно" },
  { name: "До 20 км от города", note: "Подача бесплатно" },
  { name: "20–60 км", note: "45 ₽ за км" },
  { name: "60–150 км", note: "По договорённости" },
  { name: "Другие регионы", note: "Только от 5 смен" },
];

const Contacts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", task: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Укажите имя";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Телефон из 10–11 цифр";
    if (form.task.trim().length < 5) next.task = "Пара слов о задаче";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    toast({
      title: "Заявка принята",
      description: "Перезвоним в течение 15 минут и назовём точную цену.",
    });
    setForm({ name: "", phone: "", task: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contacts"
      className="bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="container">
        <div className="mb-12">
          <div className="section-label text-secondary/70">06 — связаться</div>
          <h2 className="mt-3 text-4xl uppercase leading-[1.05] text-secondary md:text-6xl">
            Контакты и<br />
            зона выезда
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-10">
            <div>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 font-display text-3xl text-secondary transition-opacity hover:opacity-80 md:text-5xl"
              >
                <Icon name="Phone" size={32} />
                {PHONE}
              </a>
              <p className="mt-3 text-sm text-background/70">
                Ежедневно 7:00–22:00. Отвечаем в WhatsApp и Telegram на том же
                номере.
              </p>
            </div>

            <div className="grid gap-px bg-background/20 sm:grid-cols-2">
              {[
                {
                  icon: "MapPin",
                  t: "База техники",
                  v: "Промзона, Заводская 14, бокс 3",
                },
                { icon: "Mail", t: "Почта", v: "zakaz@spectehnika.ru" },
                {
                  icon: "Clock",
                  t: "Подача",
                  v: "В день обращения при заказе до 16:00",
                },
                {
                  icon: "FileText",
                  t: "Документы",
                  v: "Договор, счёт, акты, УПД, ЭДО",
                },
              ].map((c) => (
                <div key={c.t} className="bg-primary p-5">
                  <Icon
                    name={c.icon}
                    size={20}
                    className="mb-3 text-secondary"
                  />
                  <div className="text-xs uppercase tracking-[0.16em] text-background/60">
                    {c.t}
                  </div>
                  <div className="mt-1 text-sm">{c.v}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-lg uppercase text-secondary">
                Зона выезда
              </h3>
              <ul className="divide-y divide-background/20 border-y border-background/20">
                {ZONES.map((z) => (
                  <li
                    key={z.name}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Icon
                        name="Navigation"
                        size={14}
                        className="text-secondary"
                      />
                      {z.name}
                    </span>
                    <span className="text-background/60">{z.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* форма */}
          <form
            onSubmit={submit}
            noValidate
            className="grain relative h-fit border-4 border-secondary bg-secondary p-6 text-secondary-foreground md:p-8"
          >
            <div className="relative z-[2]">
              <h3 className="text-2xl uppercase leading-tight">
                Заявка на технику
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-secondary-foreground/70">
                Перезвоним за 15 минут и назовём цену
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <Input
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Как к вам обращаться"
                    className="h-12 border-2 border-secondary-foreground bg-transparent placeholder:text-secondary-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="Телефон"
                    inputMode="tel"
                    className="h-12 border-2 border-secondary-foreground bg-transparent placeholder:text-secondary-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Textarea
                    value={form.task}
                    onChange={(e) => set("task", e.target.value)}
                    placeholder="Что нужно сделать: техника, объём, адрес"
                    rows={4}
                    className="border-2 border-secondary-foreground bg-transparent placeholder:text-secondary-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {errors.task && (
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-destructive">
                      {errors.task}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 font-display text-sm uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                <Icon name={sent ? "Check" : "Send"} size={18} />
                {sent ? "Заявка отправлена" : "Отправить заявку"}
              </button>

              <p className="mt-3 text-[11px] leading-relaxed text-secondary-foreground/70">
                Нажимая кнопку, вы соглашаетесь на обработку персональных
                данных.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
