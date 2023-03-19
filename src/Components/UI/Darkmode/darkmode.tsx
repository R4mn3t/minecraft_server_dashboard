import React, {useContext, useEffect, useState} from 'react';
import {ReactComponent as SunIcon} from '../Icons/sun.svg';
import {ReactComponent as MoonIcon} from '../Icons/moon.svg';
import './darkmode.css';
import DarkModeSettings from "../../../Store/dark-mode-settings";

export default function DarkMode() {
    let darkModeSettings = useContext(DarkModeSettings);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem('dark-mode')) {
            setIsDarkMode(true);
        }
    }, []);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('dark-mode', (!isDarkMode).toString());
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

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