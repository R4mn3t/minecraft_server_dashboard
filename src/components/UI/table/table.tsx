import React from 'react';
import TableHead from "./tableHead";
import TableData from "./tableData";

export interface TableProps {
    columnHeadings: string[]; // Spaltenüberschriften
    data: any[][]; // Tabellendaten
    caption?: string; // Tabellenbeschriftung
}

export default function Table(props: TableProps) {
    return (
        <table>
            {props.caption && <caption>{props.caption}</caption>}
            <TableHead columnHeadings={props.columnHeadings}/>
            <TableData data={props.data}/>
        </table>
    );
}



