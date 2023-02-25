import React from 'react';
import './shortcuts.css';
import '../../UI/main.css';
import Table from "../../UI/Table/table";

export default function Shortcuts() {
    const headings = ['Name', 'Vorname', 'E-Mail'];

    const data = [
        ['Pipi', 'Langstrumpf', 'test@example.com'],
        ['Marten', 'Knystock', 'knystockmarten@gmail.com'],
        ['Dome', 'Zilke', 'bla'],
    ];

    return (
        <div className={'body'}>
            <h1 className={'pageName'}>Minecraft Shortcuts</h1>

            <div className={'table-container'}>
                <Table
                    columnHeadings={headings}
                    data={data}/>
            </div>
        </div>
    );
}