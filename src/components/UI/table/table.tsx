import React from 'react';
import TableHead from "./tableHead";
import TableRows from "./tableRows";
import {TableDataProps} from "./tableDataProps";

export default function Table(props: TableDataProps) {
    return (
        <table>
            {props.caption && <caption>{props.caption}</caption>}
            <TableHead columnHeadings={} rows={}/>
            <TableRows columnHeadings={} rows={}/>
        </table>
    );
}



