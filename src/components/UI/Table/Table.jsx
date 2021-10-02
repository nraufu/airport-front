import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortColumn, onSort, data, className }) => {
    return (
        <table className={`table table-striped ${className}`}>
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody columns={columns} data={data} />

            {data.length === 0 && (
                <tbody>
                    <tr>
                        <td colSpan={columns.length}>No Data</td>
                    </tr>
                </tbody>
            )}
        </table>
    );
};

export default Table;
