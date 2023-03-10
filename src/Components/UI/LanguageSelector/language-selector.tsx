import React, {useEffect, useState} from 'react';
import {ReactComponent as FlagUk} from '../Icons/flag_uk.svg';
import {ReactComponent as FlagGerman} from '../Icons/flag_german.svg';
import './language-selector.css';
import useTranslation from "../../../Translation/translation";
import {UserSettings} from "../../../App";

interface LanguageSelectorProps {
    userSettings: UserSettings;
}

export default function LanguageSelector(props: LanguageSelectorProps) { //TODO
    let {userSettings} = props;
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        if (userSettings.language === 'de') {
            setIsEnglish(false);
        }
    }, []);

    const handleToggle = () => {
        setIsEnglish(!isEnglish);
        userSettings = {...userSettings, language: isEnglish ? 'en' : 'de'};
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
        console.log(!isEnglish);
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