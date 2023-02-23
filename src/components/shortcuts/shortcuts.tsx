import React from 'react';
import './shortcuts.css'
import Table from "../UI/table/table";

//export interface ShortcutsProps {
//    title: string;
//}

export default function Shortcuts() {
    const headings = ['Name', 'Vorname', 'E-Mail'];

    const data = [
        ['Pipi', 'Langstrumpf', 'test@example.com'],
        ['Marten', 'Knystock', 'knystockmarten@gmail.com'],
    ];

    return (
        <>
            <Table columnHeadings={headings} data={data}/>
        </>
    );
}