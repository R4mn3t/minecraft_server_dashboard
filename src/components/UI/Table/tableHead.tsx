import React from 'react';

interface TableHeadProps {
    columnHeadings: string[];
}

export default function TableHead({columnHeadings}: TableHeadProps) {
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