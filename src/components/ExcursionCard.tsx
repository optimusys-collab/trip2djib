import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useRouter } from '@/router';
import { useI18n } from '@/i18n/context';
import type { LocalizedExcursion } from '@/i18n/types';

export default function ExcursionCard({ excursion }: { excursion: LocalizedExcursion }) {
  const { navigate } = useRouter();
  const { lang, t } = useI18n();
  return (
    <button
      onClick={() => navigate(`/excursion/${excursion.slug}`)}
      className="group relative flex h-72 w-full flex-col justify-end overflow-hidden rounded-2xl text-left shadow-md ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl sm:h-96"
    >
      <img
        src={excursion.image}
        alt={excursion.name[lang]}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-volcanic-900/90 via-volcanic-900/25 to-transparent" />
      <div className="relative p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {excursion.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
            >
              {t(`category.${c}`)}
            </span>
          ))}
        </div>
        <p className="font-display text-xl font-semibold text-white sm:text-2xl">{excursion.name[lang]}</p>
        <p className="mt-1 text-sm text-sand-200">{excursion.tagline[lang]}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-sand-200/90">
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {excursion.duration[lang]}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {excursion.type[lang]}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sea-300 transition group-hover:gap-3">
          {t('excursion.view')} <ArrowRight size={16} />
        </span>
      </div>
    </button>
  );
}
