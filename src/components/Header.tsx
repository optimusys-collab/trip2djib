import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import { navLinks } from '@/data/nav';

const LOGO = '/images/67795146_382345639362714_1457752960149749760_n.jpg';

export default function Header() {
  const { path, navigate } = useRouter();
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onHome = path === '/';
  const solid = scrolled || open || !onHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-sand-50/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => go('/')} className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="Trip2Djib"
            className={`h-11 w-11 rounded-full object-cover ring-2 transition ${
              solid ? 'ring-sea-500/30' : 'ring-white/50'
            }`}
          />
          <span
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              solid ? 'text-volcanic-900' : 'text-white'
            }`}
          >
            Trip2Djib
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = path === link.to;
            return (
              <button
                key={link.to}
                onClick={() => go(link.to)}
                className={`relative text-sm font-medium transition-colors ${
                  solid ? 'text-volcanic-700 hover:text-sea-600' : 'text-white/90 hover:text-white'
                } ${active ? (solid ? '!text-sea-600' : '!text-white') : ''}`}
              >
                {t(link.labelKey)}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-sea-500" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Globe size={18} className={solid ? 'text-volcanic-600' : 'text-white/80'} />
            <button
              onClick={() => setLang('fr')}
              className={`text-sm font-semibold transition ${
                lang === 'fr'
                  ? solid ? 'text-sea-600' : 'text-white'
                  : solid ? 'text-volcanic-400 hover:text-volcanic-700' : 'text-white/50 hover:text-white/80'
              }`}
            >
              FR
            </button>
            <span className={solid ? 'text-volcanic-300' : 'text-white/40'}>|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-sm font-semibold transition ${
                lang === 'en'
                  ? solid ? 'text-sea-600' : 'text-white'
                  : solid ? 'text-volcanic-400 hover:text-volcanic-700' : 'text-white/50 hover:text-white/80'
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => go('/contact')}
            className="hidden rounded-full bg-sea-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sea-500/20 transition hover:bg-sea-600 hover:shadow-sea-500/30 md:block"
          >
            {t('header.planTrip')}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`lg:hidden ${solid ? 'text-volcanic-900' : 'text-white'}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-sand-50 transition-all duration-500 lg:hidden ${
          open ? 'max-h-[80vh] border-t border-sand-200' : 'max-h-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => go(link.to)}
              className={`border-b border-sand-100 py-3.5 text-left text-base font-medium ${
                path === link.to ? 'text-sea-600' : 'text-volcanic-800'
              }`}
            >
              {t(link.labelKey)}
            </button>
          ))}
          <button
            onClick={() => go('/contact')}
            className="mt-5 rounded-full bg-sea-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {t('header.planTrip')}
          </button>
        </nav>
      </div>
    </header>
  );
}
