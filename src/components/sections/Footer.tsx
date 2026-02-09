import Logo from "@/components/ui/Logo";
import { Strings } from "@/lib/strings";
import { styles } from "@/lib/styles";

export default function Footer() {
  const serviceItems = Object.values(Strings.Services.items);

  return (
    <footer aria-label="Site Footer" className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Logo variant="white" width={150} height={50} />
            <p className="mt-4 text-gray-400">{Strings.Footer.tagline}</p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className={styles.footerTitle}>
              {Strings.Footer.services.title}
            </h4>
            <ul className="space-y-2">
              {serviceItems.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={styles.footerLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className={styles.footerTitle}>
              {Strings.Footer.contact.title}
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${Strings.Footer.contact.email}`}
                className={`block ${styles.footerLink}`}
              >
                {Strings.Footer.contact.email}
              </a>
              <a
                href={`tel:${Strings.Footer.contact.phone.replace(/[^0-9]/g, '')}`}
                className={`block ${styles.footerLink}`}
              >
                {Strings.Footer.contact.phone}
              </a>
            </div>
          </div>

          {/* Social */}
          <nav aria-label="Social Media">
            <h4 className={styles.footerTitle}>
              {Strings.Footer.social.title}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={Strings.Links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {Strings.Footer.social.instagram}
                </a>
              </li>
              <li>
                <a
                  href={Strings.Links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  {Strings.Footer.social.facebook}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>{Strings.Footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
