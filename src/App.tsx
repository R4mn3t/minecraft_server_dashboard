import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Navbar/Home/home";
import Shortcuts from "./Components/Navbar/Shortcuts/shortcuts";
import Commands from "./Components/Navbar/Commands/commands";

function App() {
    let userSettings: UserSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={<Navbar userSettings={userSettings}/>}>
                    <Route index element={<Home/>}/>
                    <Route path='shortcuts' element={<Shortcuts/>}/>
                    <Route path='commands' element={<Commands/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

export interface UserSettings {
    darkModeEnabled: boolean;
    language: string;
}