import { Facebook, Instagram, Mail, MapPin, Phone, Star } from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import { CONTACT } from '@/data/content';
import { navLinks } from '@/data/nav';

const LOGO = '/images/67795146_382345639362714_1457752960149749760_n.jpg';

export default function Footer() {
  const { navigate } = useRouter();
  const { lang, t } = useI18n();

  return (
    <footer className="bg-volcanic-900 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:gap-12 sm:py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Trip2Djib" className="h-11 w-11 rounded-full object-cover ring-2 ring-sea-500/40" />
            <span className="font-display text-xl font-semibold text-white">Trip2Djib</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-200/80">
            {t('footer.tagline')}
          </p>
          <p className="mt-3 font-display text-lg text-sand-100">{t('footer.discover')}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sand-300">{t('footer.explore')}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks
              .filter((l) => l.to !== '/')
              .map((link) => (
                <li key={link.to}>
                  <button onClick={() => navigate(link.to)} className="text-sand-200/80 transition hover:text-sea-300">
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sand-300">{t('footer.contact')}</h4>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-sea-400" />
              <span>{CONTACT.address[lang]}</span>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Phone size={17} className="shrink-0 text-sea-400" />
                <a href={`tel:${p.replace(/\s/g, '')}`} className="transition hover:text-sea-300">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={17} className="shrink-0 text-sea-400" />
              <a href={`mailto:${CONTACT.email}`} className="transition hover:text-sea-300">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sand-300">{t('footer.follow')}</h4>
          <div className="mt-4 flex gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-sea-500"
            >
              <Facebook size={18} />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-sea-500"
            >
              <Instagram size={18} />
            </a>
            <a
              href={CONTACT.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-sea-500"
            >
              <Star size={18} />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2.5 text-sm">
            <Star size={16} className="fill-sand-300 text-sand-300" />
            <span className="text-sand-200/90">{t('footer.tripadvisor').replace('{rating}', CONTACT.tripadvisorRating)}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-sand-300/70 sm:flex-row lg:px-8">
          <p>{t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}</p>
          <div className="flex gap-5">
            <button className="transition hover:text-sand-100">{t('footer.legal')}</button>
            <button className="transition hover:text-sand-100">{t('footer.privacy')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
