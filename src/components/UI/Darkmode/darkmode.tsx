import React, {useState} from 'react';
import {ReactComponent as SunIcon} from '../Icons/sun.svg';
import {ReactComponent as MoonIcon} from '../Icons/moon.svg';
import './darkMode.css';


export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <label className={'switch'}>
            <input
                type={'checkbox'}
                checked={isDarkMode}
                onChange={handleToggle}
                style={{display: 'none'}}/>
            <span className={'slider round'}>
                {isDarkMode ? <MoonIcon/> : <SunIcon/>}
            </span>
        </label>
    );
}