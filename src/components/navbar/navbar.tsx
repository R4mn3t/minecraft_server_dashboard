import React, {useEffect, useState} from 'react';
import './navbar.css'
import {NavLink, Outlet, useLocation} from "react-router-dom";

export default function Navbar() {
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

    return (
        <>
            <nav>
                <ul>
                    <li
                        id={'Home'}
                        className={activeTab === 'Home' ? 'active' : ''}
                        onClick={() => handleClick('Home')}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li
                        id={'Shortcuts'}
                        className={activeTab === 'Shortcuts' ? 'active' : ''}
                        onClick={() => handleClick('Shortcuts')}>
                        <NavLink to="/shortcuts">Shortcuts</NavLink>
                    </li>
                    <li
                        id={'commands'}
                        className={activeTab === 'commands' ? 'active' : ''}
                        onClick={() => handleClick('commands')}>
                        <NavLink to="/commands">Commands</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}