import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import './layout.css';

export default function Layout() {
    const [activeTab, setActiveTab] = useState("home");
    const handleClick = (tab: string) => {
        setActiveTab(tab);
    }

    return (
        <>
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
                    </li>
                    <li
                        id={'home'}
                        className={activeTab === 'commands' ? 'active' : ''}
                        onClick={() => handleClick('commands')}>
                        <Link to="/commands">Commands</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}