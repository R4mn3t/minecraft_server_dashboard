import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Shortcuts from "./components/shortcuts/shortcuts";
import Commands from "./components/commands/commands";
import Navbar from "./components/navbar/navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path='shortcuts' element={<Shortcuts/>}/>
                    <Route path='commands' element={<Commands/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
