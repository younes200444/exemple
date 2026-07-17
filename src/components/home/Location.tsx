"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Location() {
  return (
    <Section
      id="location"
      divider
      className="!py-10 sm:!py-12 md:!py-14 lg:!py-16 xl:!py-20"
    >
      <ScrollReveal>
        <SectionHeading
          eyebrow="Accès"
          title="Rodez"
        />
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10 xl:gap-12">
        <ScrollReveal className="lg:col-span-2">
          <div className="flex h-full flex-col border border-border bg-bg-soft p-8 md:p-10 lg:p-11">
            <ul className="space-y-7 lg:space-y-8">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-ember" size={20} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle lg:text-xs">
                    Adresse
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg lg:text-base">
                    {SITE.address.full}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-gold" size={20} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle lg:text-xs">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="mt-1 block text-sm text-fg transition-colors hover:text-gold lg:text-base"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 shrink-0 text-gold" size={20} />
                <div className="w-full">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle lg:text-xs">
                    Horaires
                  </p>
                  <ul className="mt-3 space-y-2 text-sm lg:text-[15px]">
                    {SITE.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-3">
                        <span className="text-fg-muted">{h.day}</span>
                        <span className="text-right text-fg">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-3">
          <div className="overflow-hidden border border-border">
            <iframe
              title="Brasserie Jo De Bruges sur Google Maps — Rodez"
              src={SITE.mapEmbed}
              className="h-[320px] w-full border-0 md:h-full md:min-h-[440px] lg:min-h-[480px] xl:min-h-[520px]"
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
