import { useState } from 'react';
import { ArrowLeft, Check, Clock, MapPin, Star, Tag, X } from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import Reveal from '@/components/Reveal';
import { CONTACT, excursions } from '@/data/content';

export default function ExcursionDetail({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const { lang, t } = useI18n();
  const excursion = excursions.find((e) => e.slug === slug);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!excursion) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-3xl font-semibold">{t('excursion.notFound.title')}</h1>
        <p className="mt-3 text-volcanic-600">{t('excursion.notFound.text')}</p>
        <button
          onClick={() => navigate('/destinations')}
          className="mt-6 rounded-full bg-sea-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sea-600"
        >
          {t('excursion.notFound.button')}
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className="relative flex min-h-[60svh] items-end overflow-hidden py-16 sm:h-[70vh] sm:min-h-[460px] sm:py-0">
        <img src={excursion.image} alt={excursion.name[lang]} className="absolute inset-0 h-full w-full animate-slow-zoom object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-volcanic-900/90 via-volcanic-900/30 to-volcanic-900/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 text-white lg:px-8">
          <button
            onClick={() => navigate('/destinations')}
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} /> {t('excursion.back')}
          </button>
          <div className="mb-3 flex flex-wrap gap-2">
            {excursion.categories.map((c) => (
              <span key={c} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {t(`category.${c}`)}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl font-semibold sm:text-6xl">{excursion.name[lang]}</h1>
          <p className="mt-2 font-display text-xl text-sand-200">{excursion.tagline[lang]}</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/85">
            <span className="flex items-center gap-2"><Clock size={16} /> {excursion.duration[lang]}</span>
            <span className="flex items-center gap-2"><Tag size={16} /> {excursion.type[lang]}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:gap-12 sm:py-16 lg:grid-cols-3 lg:px-8">
        <div className="space-y-12 lg:col-span-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">{t('excursion.summary')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-volcanic-600">{excursion.summary[lang]}</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold">{t('excursion.highlights')}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {excursion.highlights.map((h) => (
                <li key={h[lang]} className="flex items-start gap-3 rounded-xl bg-sand-100 p-4">
                  <Star size={18} className="mt-0.5 shrink-0 fill-sand-500 text-sand-500" />
                  <span className="text-sm text-volcanic-700">{h[lang]}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold">{t('excursion.itinerary')}</h2>
            <ol className="mt-6 space-y-6 border-l-2 border-sand-200 pl-6">
              {excursion.itinerary.map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.95rem] flex h-7 w-7 items-center justify-center rounded-full bg-sea-500 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="font-display text-lg font-semibold">{step.title[lang]}</p>
                  <p className="mt-1 text-sm text-volcanic-600">{step.detail[lang]}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-xl font-semibold">{t('excursion.included')}</h3>
              <ul className="mt-4 space-y-2.5">
                {excursion.included.map((x) => (
                  <li key={x[lang]} className="flex items-start gap-2.5 text-sm text-volcanic-700">
                    <Check size={18} className="mt-0.5 shrink-0 text-sea-600" /> {x[lang]}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-display text-xl font-semibold">{t('excursion.notIncluded')}</h3>
              <ul className="mt-4 space-y-2.5">
                {excursion.notIncluded.map((x) => (
                  <li key={x[lang]} className="flex items-start gap-2.5 text-sm text-volcanic-500">
                    <X size={18} className="mt-0.5 shrink-0 text-volcanic-400" /> {x[lang]}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold">{t('excursion.gallery')}</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
              {excursion.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(img)}
                  className={`group overflow-hidden rounded-xl ${i === 0 ? 'col-span-1 sm:col-span-2' : ''}`}
                >
                  <img
                    src={img}
                    alt={`${excursion.name[lang]} ${i + 1}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${i === 0 ? 'h-56 sm:h-80' : 'h-40 sm:h-52'}`}
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl bg-sand-100 p-6 ring-1 ring-black/5">
              <h3 className="font-display text-xl font-semibold">{t('excursion.practical')}</h3>
              <dl className="mt-4 space-y-3.5">
                {excursion.practical.map((p) => (
                  <div key={p.label[lang]} className="flex justify-between gap-4 border-b border-sand-200 pb-3 text-sm last:border-0 last:pb-0">
                    <dt className="text-volcanic-500">{p.label[lang]}</dt>
                    <dd className="text-right font-medium text-volcanic-800">{p.value[lang]}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex items-center gap-2 text-xs text-volcanic-500">
                <MapPin size={14} /> {t('excursion.departure')}
              </p>
            </div>

            <div className="rounded-2xl bg-volcanic-900 p-6 text-white">
              <h3 className="font-display text-xl font-semibold">{t('excursion.booking.title')}</h3>
              <p className="mt-2 text-sm text-sand-200/80">
                {t('excursion.booking.text')}
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="mt-5 w-full rounded-full bg-sea-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sea-600"
              >
                {t('excursion.booking.button')}
              </button>
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t('cta.whatsapp')}
              </a>
            </div>
          </div>
        </aside>
      </div>

      {lightbox && (
        <button
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-volcanic-900/90 p-5 backdrop-blur-sm"
        >
          <img src={lightbox} alt="" className="max-h-[88vh] max-w-full rounded-xl object-contain" />
          <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
            <X size={22} />
          </span>
        </button>
      )}
    </div>
  );
}
