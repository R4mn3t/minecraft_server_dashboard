import React, {useEffect, useState} from 'react';
import './navbar.css'
import {NavLink, Outlet, useLocation} from "react-router-dom";
import DarkMode from "../UI/Darkmode/darkmode";
import LanguageSelector from "../UI/LanguageSelector/language-selector";
import {css, cx} from "@emotion/css";
import {
    cssAbsolut,
    cssBackgroundColor,
    cssBlock,
    cssBold,
    cssBoxShadow,
    cssCenter,
    cssColor,
    cssContent,
    cssCursor,
    cssFlex,
    cssHeight,
    cssListStyle,
    cssMargin,
    cssOverflow,
    cssPadding,
    cssRelative,
    cssRight,
    cssSticky,
    cssTextDecoration,
    cssTop,
    cssTranslateY,
    cssWidth,
    cssZIndex
} from "../UI/css";

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
    };

    return (
        <>
            <nav className={navStyles}>
                <ul className={ulStyles}>
                    <li
                        id={'home'}
                        className={cx(liStyles, activeTab === 'home' ? 'active' : '')}
                        onClick={() => handleClick('home')}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li
                        id={'shortcuts'}
                        className={cx(liStyles, activeTab === 'shortcuts' ? 'active' : '')}
                        onClick={() => handleClick('shortcuts')}>
                        <NavLink to="/shortcuts">Shortcuts</NavLink>
                    </li>
                    <li
                        id={'commands'}
                        className={cx(liStyles, activeTab === 'commands' ? 'active' : '')}
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

const navStyles = cx(
    cssFlex,
    cssHeight(3),
    cssBackgroundColor('#000000'),
    cssSticky,
    cssTop(0),
    cssZIndex(1),
    cssBoxShadow('0px 0px 10px black'));

const ulStyles = cx(
    cssFlex,
    cssListStyle('none'),
    cssMargin(0),
    cssPadding(0),
    cssOverflow('hidden'),
    cssBackgroundColor('#000000'));

const liStyles = css`
  ${cssBold}
  ${cssRelative}
  & > a {
    ${cssBlock}
    ${cssColor('#d7d9d9')}
    ${cssCenter}
    ${cssPadding('14px 16px')}
    ${cssTextDecoration('none')}
    ${cssCursor('pointer')}
    &:hover:not(.active) {
      ${cssBackgroundColor('#36454F')}
    }
  }

  &:not(:nth-last-child(1))::after {
    ${cssContent('""')}
    ${cssAbsolut}
    ${cssRight(0)}
    ${cssTop('50%')}
    ${cssTranslateY('translateY(-50%)')}
    ${cssWidth('1px')}
    ${cssHeight('80%')}
    ${cssBackgroundColor('#AAAAAA')}
  }
`;