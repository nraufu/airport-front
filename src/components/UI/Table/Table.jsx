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
        </table>
    );
};

export default Table;
