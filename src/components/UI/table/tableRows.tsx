import React from 'react';
import {TableDataProps} from "./tableDataProps";

export default function TableRows({rows}: TableDataProps) {
    return (
        <tbody>
        {rows.map((row: any, i: number) => (
            <tr key={i}>
                {row.map((cell: any, j: number) => (
                    <td key={j}>{cell}</td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};