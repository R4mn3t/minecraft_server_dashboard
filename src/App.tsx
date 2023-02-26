import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Navbar/Home/home";
import Shortcuts from "./Components/Navbar/Shortcuts/shortcuts";
import Commands from "./Components/Navbar/Commands/commands";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);

    let userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');

    const onLoad = () => {
        if (userSettings.darkModeEnabled) {
            setIsDarkMode(true);
        }

        if (userSettings.language === 'de') {
            setIsEnglish(false);
        }
    };

    const onDarkModeToggle = (isDarkMode: boolean) => {
        setIsDarkMode(isDarkMode);
        userSettings = {...userSettings, darkModeEnabled: isDarkMode};
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
    };

    const onLanguageToggle = (isEnglish: boolean) => {
        setIsEnglish(isEnglish);
        userSettings = {...userSettings, language: isEnglish ? 'en' : 'de'};
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
    };

    useEffect(() => {
        onLoad();
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={<Navbar
                        onDarkModeToggle={onDarkModeToggle}
                        onLanguageToggle={onLanguageToggle}
                        isDarkMode={isDarkMode}
                        isEnglish={isEnglish}/>}>
                    <Route index element={<Home/>}/>
                    <Route path='shortcuts' element={<Shortcuts/>}/>
                    <Route path='commands' element={<Commands/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
