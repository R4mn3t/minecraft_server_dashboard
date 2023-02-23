import React from 'react';
import './shortcuts.css'
import Table from "../UI/table/table";

export default function Shortcuts() {
    const headings = ['Name', 'Vorname', 'E-Mail'];

    const data = [
        ['Pipi', 'Langstrumpf', 'test@example.com'],
        ['Marten', 'Knystock', 'knystockmarten@gmail.com'],
        ['Dome', 'Zilke', 'bla'],
    ];

    return (
        <>
            <Table columnHeadings={headings} data={data}/>
        </>
    );
}