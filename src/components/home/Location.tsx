"use client";

import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Location() {
  return (
    <Section id="location">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Nous trouver"
          title="Au cœur de Rodez"
          description="À deux pas de l'avenue de la Gineste — parking à proximité."
        />
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-5">
        <ScrollReveal className="lg:col-span-2">
          <div className="h-full border border-border bg-bg-soft p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
                    Adresse
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg">
                    {SITE.address.full}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="mt-1 block text-sm text-fg transition-colors hover:text-gold"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Horaires
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span className="text-fg-muted">{h.day}</span>
                    <span className="text-right text-fg">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-3">
          <div className="overflow-hidden border border-border">
            <iframe
              title="Brasserie Jo De Bruges sur Google Maps"
              src={SITE.mapEmbed}
              className="h-[320px] w-full border-0 md:h-full md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
