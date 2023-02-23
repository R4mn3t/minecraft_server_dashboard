import React from 'react';

interface TableDataProps {
    data: any[][];
}

export default function TableData({data}: TableDataProps) {
    return (
        <tbody>
        {data.map((row: any, i: number) => (
            <tr key={i}>
                {row.map((cell: any, j: number) => (
                    <td key={j}>{cell}</td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};