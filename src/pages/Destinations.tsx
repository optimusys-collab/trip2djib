import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ExcursionCard from '@/components/ExcursionCard';
import { useI18n } from '@/i18n/context';
import { excursions, experienceCategories, type Category } from '@/data/content';

export default function Destinations() {
  const { t } = useI18n();
  const [active, setActive] = useState<'all' | Category>('all');

  const visible =
    active === 'all' ? excursions : excursions.filter((e) => e.categories.includes(active));

  const filters: ('all' | Category)[] = ['all', ...experienceCategories];

  return (
    <div>
      <PageHero
        image="https://images.pexels.com/photos/4154219/pexels-photo-4154219.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000"
        eyebrow={t('destinations.eyebrow')}
        title={t('destinations.title')}
        subtitle={t('destinations.subtitle')}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2.5 sm:mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === f
                  ? 'bg-sea-500 text-white shadow-md shadow-sea-500/20'
                  : 'bg-sand-100 text-volcanic-700 hover:bg-sand-200'
              }`}
            >
              {f === 'all' ? t('destinations.filter.all') : t(`category.${f}`)}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="py-16 text-center text-volcanic-500">
            {t('destinations.empty')}
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {visible.map((exc, i) => (
              <Reveal key={exc.slug} delay={(i % 3) * 80}>
                <ExcursionCard excursion={exc} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
