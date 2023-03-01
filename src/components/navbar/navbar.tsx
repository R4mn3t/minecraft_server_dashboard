import React, {useEffect, useState} from 'react';
import './navbar.css'
import {NavLink, Outlet, useLocation} from "react-router-dom";
import DarkMode from "../UI/DarkMode/darkMode";
import LanguageSelector from "../UI/LanguageSelector/language-selector";

interface NavBarProps {
    onDarkModeToggle: (isDarkMode: boolean) => void;
    onLanguageToggle: (isEnglish: boolean) => void;
    isDarkMode: boolean;
    isEnglish: boolean;
}

export default function Navbar(props: NavBarProps) {
    const [activeTab, setActiveTab] = useState('Home');
    const location = useLocation();

    const handleClick = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    }

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab) {
            setActiveTab(storedTab);
        }
    }, []);

    useEffect(() => {
        const currentTab = location.pathname.split('/')[1] || '';
        setActiveTab(currentTab);
    }, [location.pathname]);

    const {onDarkModeToggle, onLanguageToggle, isDarkMode, isEnglish} = props;

    const handleDarkModeToggle = (isDarkMode: boolean) => {
        onDarkModeToggle(isDarkMode);
    };

    const handleLanguageToggle = (isEnglish: boolean) => {
        onLanguageToggle(isEnglish);
        console.log('Navbar.tsx' + isEnglish);
    };

    return (
        <>
            <nav>
                <ul>
                    <li
                        id={'home'}
                        className={activeTab === 'home' ? 'active' : ''}
                        onClick={() => handleClick('home')}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li
                        id={'shortcuts'}
                        className={activeTab === 'shortcuts' ? 'active' : ''}
                        onClick={() => handleClick('shortcuts')}>
                        <NavLink to="/shortcuts">Shortcuts</NavLink>
                    </li>
                    <li
                        id={'commands'}
                        className={activeTab === 'commands' ? 'active' : ''}
                        onClick={() => handleClick('commands')}>
                        <NavLink to="/commands">Commands</NavLink>
                    </li>
                </ul>
                <div className={'navContainer'}>
                    <div id={'darkMode'}>
                        <DarkMode
                            onToggle={handleDarkModeToggle}
                            isDarkMode={isDarkMode}/>
                    </div>
                    <div id={'language'}>
                        <LanguageSelector
                            onToggle={handleLanguageToggle}
                            isEnglish={isEnglish}/>
                    </div>
                </div>
            </nav>

            <Outlet/>
        </>
    );
}