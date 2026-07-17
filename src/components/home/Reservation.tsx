"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, ShieldCheck, Clock3, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const inputClass =
  "w-full border border-gold/20 bg-white px-4 py-3.5 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-gold focus:bg-cream/40";

const trusts = [
  { icon: Clock3, label: "Réponse rapide" },
  { icon: ShieldCheck, label: "Table garantie" },
  { icon: Sparkles, label: "Expérience authentique" },
];

export function Reservation() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    e.currentTarget.reset();
  };

  return (
    <Section id="reservation" soft divider>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Réservation"
              title="Réservez votre table"
              description="Quelques clics suffisent — nous vous reconfirmons rapidement par téléphone."
              className="mb-7 sm:mb-8"
            />
            <ul className="space-y-3.5 sm:space-y-4">
              {trusts.map((t) => (
                <li key={t.label} className="flex items-center gap-3 text-sm text-fg-muted">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-gold-soft text-gold">
                    <t.icon size={18} aria-hidden />
                  </span>
                  {t.label}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-fg-muted">
              Ou appelez-nous directement :{" "}
              <a
                href={`tel:${SITE.phoneHref}`}
                className="font-medium text-fg transition-colors hover:text-gold"
              >
                {SITE.phone}
              </a>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <div className="glow-gold border border-gold/30 bg-cream p-5 shadow-[var(--shadow-lift)] sm:p-6 md:p-10">
            {status === "success" ? (
              <div className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto text-gold" size={40} />
                <p className="mt-4 font-display text-3xl text-fg">
                  Demande envoyée
                </p>
                <p className="mt-3 text-sm text-fg-muted">
                  Merci ! Nous vous contactons sous peu pour confirmer votre
                  réservation.
                </p>
                <Button
                  className="mt-8"
                  variant="outline"
                  onClick={() => setStatus("idle")}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Nom" required>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Votre nom"
                    />
                  </Field>
                  <Field id="phone" label="Téléphone" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="06 XX XX XX XX"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="date" label="Date" required>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className={inputClass}
                    />
                  </Field>
                  <Field id="guests" label="Nombre de personnes" required>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className={inputClass}
                      defaultValue="2"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                      <option value="9+">9 personnes ou plus</option>
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Allergies, horaire souhaité, occasion spéciale…"
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer ma demande
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-fg-muted"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
    </div>
  );
}
