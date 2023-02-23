import React from 'react';
import {TableDataProps} from "./tableDataProps";

export default function TableHead({columnHeadings}: TableDataProps) {
    return (
        <thead>
        <tr>
            {columnHeadings.map((col: string, i: number) => (
                <th key={i}>{col}</th>
            ))}
        </tr>
        </thead>
    );
};