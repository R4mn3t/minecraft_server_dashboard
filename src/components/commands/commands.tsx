import React from 'react';
import './commands.css'
import Table from "../UI/table/table";
// export interface CommandsProps {
//
// }

// for(let i=0; i<array.length; i++) {
//     for(let j=0; j<array[i].length; j++) {
//         console.log("["+i+"]"+"["+j+"]"+" "+array[i][j]);
//     }
// }

//COMMANDS
const command_headings = ['command', 'description', 'OP-Level'];
const command_data = [
    ['/ability', 'Grants or revokes a player ability.', '-'],
    ['/advancement', 'Gives, removes, or checks player advancements.', '2'],
    ['/alwaysday', 'An alias of /daylock. Locks and unlocks the day-night cycle.', '-'],
];
//TARGET SELECTOR
const target_headings = ['variable', 'function'];
const target_data = [
    ['@p', 'nearest player.'],
    ['@r', 'random player'],
    ['@a', 'all players'],
    ['@e', 'all entities'],
    ['@s', 'entity executing the command'],
];
//TARGET ARGUMENTS
//by positions
const argument_pos_headings = ['argument', 'criteria', 'example'];
const argument_pos_data = [
    ['x, y, z', 'coordinate', ''],
    ['distance', 'distance', '@e[distance=8] (target is exaclty 8 blocks away)\n@e[distance=2..8] (target is within range of 2 and 8 blocks)'],
    ['dx, dy, dz', 'volume dimensions', ''],
];
//by player data
const argument_pdata_headings = ['argument', 'criteria', 'example'];
const argument_pdata_data = [
    ['level', 'experience level', '@a[level=!12] (target is NOT at level 12)\n' +
    '@a[level=3..15] (target is between level 3 and 12'],
    ['gamemode', 'game mode', '@e[gamemode=survival]\n' +
    '@r[gamemode=creative\n' +
    '@a[gamemode=!adventure\n' +
    '@p[gamemode=!spectator]'],
    ['advancements', 'advancements', ''],
];


export default function Commands() {
    return (
        <>
            <h1 id={'PageName'}>Minecraft Commands</h1>
            <h1 id={'Category'}>Commands</h1>
            <br/>
            <div>
                <Table columnHeadings={command_headings} data={command_data}/>
            </div>
            <h1 id={'Category'}>Target Selector</h1>
            <br/>
            <div>
                <Table columnHeadings={target_headings} data={target_data}/>
            </div>
            <h1 id={'Category'}>Target Arguments</h1>
            <h1 id={'Second-Category'}>Selection by Positions</h1>
            <div>
                <Table columnHeadings={argument_pos_headings} data={argument_pos_data}/>
            </div>
            <h1 id={'Second-Category'}>Selection by Player Data</h1>
            <div>
                <Table columnHeadings={argument_pdata_headings} data={argument_pdata_data}/>
            </div>
        </>
    );
}