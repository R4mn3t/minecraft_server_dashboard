import React, {useEffect, useState} from 'react';
import './navbar.css'
import {Link, Outlet} from "react-router-dom";

export interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
    const [activeTab, setActiveTab] = useState('home');
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
                        id={'commands'}
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