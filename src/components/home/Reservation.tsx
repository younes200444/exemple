"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SITE } from "@/lib/constants";

const inputClass =
  "w-full border border-gold/25 bg-white px-4 py-3.5 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-ember focus:bg-cream/40";

export function Reservation() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const guests = String(data.get("guests") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !date || !time || !guests) return;

    const body = [
      `Nouvelle demande de réservation — ${SITE.shortName}`,
      ``,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Date : ${date}`,
      `Heure : ${time}`,
      `Couverts : ${guests}`,
      message ? `Message : ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Réservation — ${name} — ${date} ${time}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  };

  return (
    <Section id="reservation" soft divider className="texture-ember !py-10 sm:!py-12 md:!py-14">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Réserver"
              title="Votre table"
              className="mb-6"
            />
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              Remplissez le formulaire : votre messagerie s&apos;ouvre avec la
              demande prête à envoyer. Pour une confirmation immédiate,
              appelez-nous.
            </p>
            <p className="mt-6">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex items-center gap-2 font-display text-2xl text-ember transition-colors hover:text-gold"
              >
                <Phone size={22} aria-hidden />
                {SITE.phone}
              </a>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <div className="border border-gold/35 bg-gradient-to-br from-cream to-[#f5e0cc] p-5 shadow-[var(--shadow-soft)] sm:p-6 md:p-10">
            {status === "sent" ? (
              <div className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto text-ember" size={44} />
                <p className="mt-4 font-display text-3xl text-fg">
                  Messagerie ouverte
                </p>
                <p className="mt-3 text-sm text-fg-muted">
                  Envoyez l&apos;e-mail prérempli, ou appelez le{" "}
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-medium text-ember underline-offset-2 hover:underline"
                  >
                    {SITE.phone}
                  </a>{" "}
                  pour confirmer.
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
              <form onSubmit={onSubmit} className="space-y-5">
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

                <div className="grid gap-5 sm:grid-cols-3">
                  <Field id="date" label="Date" required>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className={inputClass}
                    />
                  </Field>
                  <Field id="time" label="Heure" required>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      required
                      className={inputClass}
                      defaultValue="19:30"
                    />
                  </Field>
                  <Field id="guests" label="Couverts" required>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className={inputClass}
                      defaultValue="2"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                      <option value="9+">9+</option>
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={inputClass}
                    placeholder="Allergies, occasion spéciale…"
                  />
                </Field>

                <Magnetic strength={18} className="w-full">
                  <Button type="submit" size="lg" className="w-full">
                    Préparer ma demande
                  </Button>
                </Magnetic>
                <p className="text-center text-xs text-fg-subtle">
                  Ou réservez par téléphone au{" "}
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="text-ember underline-offset-2 hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </p>
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
        {required && <span className="text-ember"> *</span>}
      </label>
      {children}
    </div>
  );
}
