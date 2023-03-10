import React, {useEffect, useState} from 'react';
import {ReactComponent as SunIcon} from '../Icons/sun.svg';
import {ReactComponent as MoonIcon} from '../Icons/moon.svg';
import './darkmode.css';
import {UserSettings} from "../../../App";

interface DarkModeProps {
    userSettings: UserSettings;
}

export default function DarkMode(props: DarkModeProps) {
    let {userSettings} = props;
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (userSettings.darkModeEnabled) {
            setIsDarkMode(true);
        }
    }, []);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        userSettings = {...userSettings, darkModeEnabled: !isDarkMode};
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
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