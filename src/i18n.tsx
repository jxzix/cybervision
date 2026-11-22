import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';
const WA = 'https://wa.me/525572832749';

const waHello: Record<Lang, string> = {
  es: 'Hola, me interesa saber más sobre los servicios de CyberVision 👀',
  en: "Hello, I'd like to know more about CyberVision's services 👀",
};

/** Idioma inicial: ?lang=, luego el guardado; por defecto español (nuestro público principal). */
export function readLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* sin almacenamiento: español */
  }
  return 'es';
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; waHello: string; wa: (msg: string) => string };

const LangContext = createContext<Ctx>({
  lang: 'es',
  setLang: () => {},
  waHello: waHello.es,
  wa: (m) => `${WA}?text=${encodeURIComponent(m)}`,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignorar */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      waHello: waHello[lang],
      wa: (m: string) => `${WA}?text=${encodeURIComponent(m)}`,
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
