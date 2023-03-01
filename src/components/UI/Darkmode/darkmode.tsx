import React, {useEffect} from 'react';
import {ReactComponent as SunIcon} from '../Icons/sun.svg';
import {ReactComponent as MoonIcon} from '../Icons/moon.svg';
import './darkMode.css';
import {cssDisplay} from "../css";

interface DarkModeProps {
    onToggle: (isDarkMode: boolean) => void;
    isDarkMode: boolean;
}

export default function DarkMode(props: DarkModeProps) {
    const {onToggle, isDarkMode} = props;

    const handleToggle = () => {
        onToggle(!isDarkMode);
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
                className={cssDisplay('none')}/>
            <span className={'slider round'}>
                {isDarkMode ? <MoonIcon/> : <SunIcon/>}
            </span>
        </label>
    );
}