import { FacebookIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{SITE.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Brasserie française à Rodez — moules frites, cuisine traditionnelle
            et ambiance conviviale.
          </p>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
          >
            <FacebookIcon size={18} />
          </a>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            Horaires
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-right text-white/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/70">
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <p>Proposition web professionnelle — démo</p>
        </div>
      </div>
    </footer>
  );
}
