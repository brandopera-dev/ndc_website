import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, Language, translations } from "@/i18n/translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "ndc_language";

const getByPath = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "fr" || raw === "en") setLanguageState(raw);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const t = (key: string) => {
    const fromLang = getByPath(translations[language] as any, key);
    if (typeof fromLang === "string") return fromLang;

    const fromDefault = getByPath(translations[DEFAULT_LANGUAGE] as any, key);
    if (typeof fromDefault === "string") return fromDefault;

    return key;
  };

  const value = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
