import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as FlagUk} from '../Icons/flag_uk.svg';
import {ReactComponent as FlagGerman} from '../Icons/flag_german.svg';
import './language-selector.css';

export default function LanguageSelector() { //TODO
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('language') === 'de') {
            setIsEnglish(false);
        }
    }, []);

    const handleToggle = () => {
        setIsEnglish(!isEnglish);
        localStorage.setItem('language', (!isEnglish) ? 'en' : 'de');
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