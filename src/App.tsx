import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCta from '@/components/MobileCta';
import { RouterProvider, useRouter } from '@/router';
import { I18nProvider, useI18n } from '@/i18n/context';
import Home from '@/pages/Home';
import Destinations from '@/pages/Destinations';
import ExcursionDetail from '@/pages/ExcursionDetail';
import { About, Contact, Experiences, Gallery, Services } from '@/pages/MorePages';

function PageContent() {
  const { path } = useRouter();
  const { t } = useI18n();
  const detailMatch = path.match(/^\/excursion\/(.+)$/);

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': `Trip2Djib — ${t('footer.discover')}`,
      '/destinations': `${t('nav.destinations')} — Trip2Djib`,
      '/experiences': `${t('nav.experiences')} — Trip2Djib`,
      '/gallery': `${t('nav.gallery')} — Trip2Djib`,
      '/about': `${t('nav.about')} — Trip2Djib`,
      '/services': `${t('nav.services')} — Trip2Djib`,
      '/contact': `${t('nav.contact')} — Trip2Djib`,
    };
    document.title = detailMatch ? `${t('excursion.summary')} — Trip2Djib` : titles[path] ?? `Trip2Djib — ${t('footer.discover')}`;
  }, [path, detailMatch, t]);

  const page = detailMatch ? <ExcursionDetail slug={detailMatch[1]} /> :
    path === '/destinations' ? <Destinations /> :
    path === '/experiences' ? <Experiences /> :
    path === '/gallery' ? <Gallery /> :
    path === '/about' ? <About /> :
    path === '/services' ? <Services /> :
    path === '/contact' ? <Contact /> :
    <Home />;

  return <><Header /><main>{page}</main><Footer /><MobileCta /></>;
}

export default function App() {
  return <RouterProvider><I18nProvider><PageContent /></I18nProvider></RouterProvider>;
}
