import {useEffect, useState} from "react";
import translationsEn from './en.json';
import translationsDe from './de.json';

export default function useTranslation() {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState<{ [key: string]: string }>(translationsEn);

    useEffect(() => {
        setTranslations(language === 'en' ? translationsEn : translationsDe);
    }, [language]);

    const t = (key: string) => {
        return translations[key] || key;
    };

    return {t, setLanguage};
};