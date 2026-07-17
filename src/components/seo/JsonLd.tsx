import { SITE } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneHref,
    servesCuisine: ["French", "Brasserie", "Moules Frites"],
    priceRange: "€€",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postal,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.3494,
      longitude: 2.5756,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "19:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "19:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "14:30",
      },
    ],
    sameAs: [SITE.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
