import React from 'react';
import {ReactComponent as FlagUk} from '../Icons/flag_uk.svg';
import {ReactComponent as FlagGerman} from '../Icons/flag_german.svg';
import './language-selector.css';
import useTranslation from "../../../Translation/translation";

interface LanguageSelectorProps {
    onToggle: (isEnglish: boolean) => void;
    isEnglish: boolean;
}

export default function LanguageSelector(props: LanguageSelectorProps) {
    const {onToggle, isEnglish} = props;
    const {setLanguage} = useTranslation();

    const handleToggle = () => {
        const newLanguage = isEnglish ? 'en' : 'de';

        setLanguage(newLanguage);
        onToggle(!isEnglish);
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