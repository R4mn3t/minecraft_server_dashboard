import React, {useState} from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
import Home from "../home/home";
import Shortcuts from "../shortcuts/shortcuts";
import Commands from "../commands/commands";

export interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
    const [activeTab, setActiveTab] = useState("home");
    const handleClick = (tab: string) => {
        setActiveTab(tab);
    }
    debugger;
    return (
        <nav>
            <ul>
                <li
                    id={'home'}
                    className={activeTab === 'home' ? 'active' : ''}
                    onClick={() => handleClick('home')}>
                    <Link to="/">Home</Link>
                </li>
                <li
                    id={'shortcuts'}
                    className={activeTab === 'shortcuts' ? 'active' : ''}
                    onClick={() => handleClick('shortcuts')}>
                    <Link to="/shortcuts">Shortcuts</Link>
                    <Shortcuts/>
                </li>
                <li
                    id={'commands'}
                    className={activeTab === 'commands' ? 'active' : ''}
                    onClick={() => handleClick('commands')}>
                    <Link to="/commands">Commands</Link>
                    <Commands/>
                </li>
            </ul>
        </nav>
    );
}