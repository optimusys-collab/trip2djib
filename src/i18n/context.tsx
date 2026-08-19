import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from './types';
import { translations } from './translations';

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: 'fr',
  setLang: () => {},
  t: (key) => key,
});

const STORAGE_KEY = 'trip2djib-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr' || stored === 'en') return stored;
  const nav = window.navigator.language.toLowerCase();
  return nav.startsWith('en') ? 'en' : 'fr';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] ?? key;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
