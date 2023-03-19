import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Navbar/Home/home";
import Shortcuts from "./Components/Navbar/Shortcuts/shortcuts";
import Commands from "./Components/Navbar/Commands/commands";
import DarkModeSettings from "./Store/dark-mode-settings";

function App() {
    return (
        <DarkModeSettings.Provider value={{
            darkModeEnabled: false,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={'/'}
                        element={<Navbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path='shortcuts' element={<Shortcuts/>}/>
                        <Route path='commands' element={<Commands/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkModeSettings.Provider>
    );
}

export default App;

export interface UserSettings {
    darkModeEnabled: boolean;
    language: string;
}