import {
  ArrowRight,
  Compass,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import Reveal from '@/components/Reveal';
import ExcursionCard from '@/components/ExcursionCard';
import { CONTACT, excursions, whyDjiboutiImages, reasonKeys } from '@/data/content';

const HERO = 'https://images.pexels.com/photos/14065506/pexels-photo-14065506.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000';
const CTA_IMAGE = 'https://images.pexels.com/photos/17877123/pexels-photo-17877123.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Users,
  Heart,
};

export default function Home() {
  const { navigate } = useRouter();
  const { t } = useI18n();

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-20">
        <img src={HERO} alt="Paysage de Djibouti" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-volcanic-900/60 via-volcanic-900/40 to-volcanic-900/70" />
        <div className="relative mx-auto max-w-4xl px-5 text-center text-white">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
            <MapPin size={14} /> {t('home.hero.badge')}
          </div>
          <h1 className="animate-fade-up font-display text-4xl font-semibold leading-heading tracking-tight sm:text-6xl md:text-7xl">
            {t('home.hero.title')}
          </h1>
          <p className="animate-fade-up mt-3 font-display text-xl font-medium text-sand-100 sm:text-3xl" style={{ animationDelay: '120ms' }}>
            {t('home.hero.subtitle')}
          </p>
          <p className="animate-fade-up mx-auto mt-4 max-w-2xl text-sm text-white/85 sm:text-lg" style={{ animationDelay: '220ms' }}>
            {t('home.hero.description')}
          </p>
          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '320ms' }}>
            <button
              onClick={() => navigate('/destinations')}
              className="w-full rounded-full bg-sea-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sea-900/30 transition hover:bg-sea-600 sm:w-auto"
            >
              {t('home.hero.explore')}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              {t('home.hero.plan')}
            </button>
          </div>
        </div>
      </section>

      {/* WHY DJIBOUTI */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('home.why.eyebrow')}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-heading sm:text-5xl">
              {t('home.why.title')}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-volcanic-600">
              {t('home.why.text')}
            </p>
            <p className="mt-4 font-display text-xl text-sand-700">
              {t('home.why.statement')}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyDjiboutiImages.map((item, i) => (
              <Reveal key={item.titleKey} delay={i * 90} className="group overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
                <div className="relative h-56 sm:h-52">
                  <img src={item.img} alt={t(item.titleKey)} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-volcanic-900/85 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="font-display text-lg font-semibold text-white">{t(item.titleKey)}</p>
                    <p className="mt-1 text-xs leading-snug text-sand-200">{t(item.textKey)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-volcanic-900 py-16 text-center sm:py-20">
        <Reveal className="mx-auto max-w-3xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sea-400">{t('home.brand.eyebrow')}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t('home.brand.title')}
          </h2>
          <p className="mt-2 font-display text-2xl font-medium text-sand-300 sm:text-4xl">{t('home.brand.subtitle')}</p>
          <p className="mx-auto mt-6 max-w-xl text-sand-200/80">
            {t('home.brand.text')}
          </p>
        </Reveal>
      </section>

      {/* EXPLORE DJIBOUTI */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('home.explore.eyebrow')}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-heading sm:text-5xl">
            {t('home.explore.title')}
          </h2>
          <p className="mt-4 text-base text-volcanic-600 sm:text-lg">
            {t('home.explore.text')}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {excursions.map((exc, i) => (
            <Reveal key={exc.slug} delay={(i % 3) * 90}>
              <ExcursionCard excursion={exc} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="bg-sand-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('home.travel.eyebrow')}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-heading sm:text-5xl">
              {t('home.travel.title')}
            </h2>
            <p className="mt-4 text-base text-volcanic-600 sm:text-lg">
              {t('home.travel.text')}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {reasonKeys.map((r, i) => {
              const Icon = iconMap[r.icon];
              return (
                <Reveal key={r.titleKey} delay={i * 80} className="rounded-2xl bg-sand-50 p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea-500/10 text-sea-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{t(r.titleKey)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-volcanic-600">{t(r.textKey)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sea-600">{t('home.reviews.eyebrow')}</p>
          <div className="mt-6 inline-flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={26} className={i < 4 ? 'fill-sand-500 text-sand-500' : 'fill-sand-300 text-sand-300'} />
            ))}
          </div>
          <p className="mt-4 font-display text-2xl font-semibold sm:text-4xl">
            {t('home.reviews.title').replace('{rating}', CONTACT.tripadvisorRating)}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-volcanic-600">
            {t('home.reviews.text')}
          </p>
          <a
            href={CONTACT.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-volcanic-300 px-6 py-3 text-sm font-semibold text-volcanic-800 transition hover:border-sea-500 hover:text-sea-600"
          >
            {t('home.reviews.button')} <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img src={CTA_IMAGE} alt="Aventure dans le désert de Djibouti" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-volcanic-900/70" />
        <Reveal className="relative mx-auto max-w-3xl px-5 py-20 text-center text-white sm:py-28">
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">{t('home.final.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {t('home.final.text')}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate('/contact')}
              className="w-full rounded-full bg-sea-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:bg-sea-600 sm:w-auto"
            >
              {t('home.final.plan')}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              {t('home.final.contact')}
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
