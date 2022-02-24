import {useMemo} from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Education.css';
import React from 'react'
import {useTable} from 'react-table'
import EDUCATION_DATA from './EDUCATION_DATA.json'
import {COLUMNS} from './Columns.js'





function Education() {
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => EDUCATION_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })
    

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = tableInstance

    return (
        
        <div className = "Education"> 
            
            <Navbar />

            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                                ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr className ="rows" {...row.getRowProps()}>
                                    {
                                        row.cells.map((cells) => {
                                            return <td {...cells.getCellProps()}>{cells.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
                <tfoot className ="tablefooter">
                    {footerGroups.map(group => (
                    <tr {...group.getFooterGroupProps()}>
                        {group.headers.map(column => (
                        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                    ))}
                </tfoot>
                
            </table>



        </div>
    );
}

export default Education;
