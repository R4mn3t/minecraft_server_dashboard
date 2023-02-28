import React, {useEffect, useState} from 'react';
import {ReactComponent as FlagUk} from '../Icons/flag_uk.svg';
import {ReactComponent as FlagGerman} from '../Icons/flag_german.svg';
import './language-selector.css';

interface LanguageSelectorProps {
    onToggle: (isEnglish: boolean) => void;
    isEnglish: boolean;
}

export default function LanguageSelector(props: LanguageSelectorProps) {
    const {onToggle, isEnglish} = props;
    const [userSettings, setUserSettings] = useState({darkModeEnabled: false, language: ''});

    useEffect(() => {
        const settings = JSON.parse(localStorage.getItem('userSettings') || '');
        setUserSettings(settings || {darkModeEnabled: false, language: ''});
    }, []);

    const handleToggle = () => {
        onToggle(!isEnglish);
        const updatedSettings = {...userSettings, language: !isEnglish ? 'en' : 'de'};
        setUserSettings(updatedSettings);
        localStorage.setItem('userSettings', JSON.stringify(updatedSettings));
        console.log('languageSelector.tsx' + isEnglish);
    }

    return (
        <label className={'switch'}>
            <input
                type={'checkbox'}
                checked={isEnglish}
                onChange={handleToggle}
                style={{display: 'none'}}/>
            <div className={'flag'}>
                {isEnglish ? <FlagUk className={'image'}/> : <FlagGerman className={'image'}/>}
            </div>
        </label>
    );
}