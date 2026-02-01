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

// Détecte la langue préférée du navigateur
const detectBrowserLanguage = (): Language => {
  // Vérifier les langues préférées du navigateur
  const browserLangs = navigator.languages || [navigator.language];
  
  for (const lang of browserLangs) {
    const shortLang = lang.split("-")[0].toLowerCase();
    if (shortLang === "fr") return "fr";
    if (shortLang === "en") return "en";
  }
  
  // Par défaut, français
  return DEFAULT_LANGUAGE;
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Vérifier d'abord si l'utilisateur a déjà choisi une langue
    const savedLang = window.localStorage.getItem(STORAGE_KEY);
    
    if (savedLang === "fr" || savedLang === "en") {
      // Utiliser la langue sauvegardée
      setLanguageState(savedLang);
    } else {
      // Sinon, détecter automatiquement la langue du navigateur
      const detectedLang = detectBrowserLanguage();
      setLanguageState(detectedLang);
      // Ne pas sauvegarder pour permettre à l'utilisateur de changer
    }
    
    setIsInitialized(true);
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
