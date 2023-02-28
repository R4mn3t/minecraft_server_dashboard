import {useEffect, useState} from "react";
import translationsEn from './en.json';
import translationsDe from './de.json';

export default function useTranslation() {
    let userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');

    const [language, setLanguage] = useState<string>(() => {
        const storedLanguage = userSettings?.language;
        return storedLanguage ? storedLanguage : 'en';
    });

    userSettings = {...userSettings, language: language}

    const [translations, setTranslations] = useState<{ [key: string]: string }>(translationsEn);

    useEffect(() => {
        setTranslations(language === 'en' ? translationsEn : translationsDe);
        localStorage.setItem('userSettings', JSON.stringify(userSettings))
    }, [userSettings, language]);

    const t = (key: string) => {
        return translations[key] || key;
    };

    return {t};
};