import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const LanguageContext = createContext();

const translations = { es, en };

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.languages?.[0] || 'es';
    return browserLang.startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('portfolio-lang');
        if (saved === 'es' || saved === 'en') return saved;
        return detectBrowserLanguage();
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    }, []);

    const t = useCallback((key) => {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
            result = result?.[k];
        }
        return result ?? key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
