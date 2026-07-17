import { FacebookIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(201,146,58,0.14),transparent),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(122,42,44,0.18),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 md:py-14">
        <div>
          <p className="font-display text-2xl md:text-3xl">
            <span className="text-gradient-gold">{SITE.shortName}</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Brasserie française à Rodez — moules frites, cuisine traditionnelle
            et ambiance conviviale.
          </p>
          {SITE.social.facebook ? (
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-gold/30 text-champagne transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold-bright"
            >
              <FacebookIcon size={18} />
            </a>
          ) : null}
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold-bright">
            Horaires
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/65">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-right text-white/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold-bright">
            Contact
          </h3>
          <address className="mt-5 space-y-2 text-sm not-italic text-white/65">
            <p>{SITE.address.street}</p>
            <p>
              {SITE.address.postal} {SITE.address.city}
            </p>
            <p>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="transition-colors hover:text-gold"
              >
                {SITE.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="relative border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="transition-colors hover:text-gold"
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
