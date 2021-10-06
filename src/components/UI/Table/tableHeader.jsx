import React, { Component } from 'react';

// columns: array

class TableHeader extends Component {
    raiseSort = (path) => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        if (this.props.onSort) {
            this.props.onSort(sortColumn);
        }
    };

    renderSortIcon = (column) => {
        const { sortColumn } = this.props;

        if (!sortColumn) return;

        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className='fa fa-sort-asc' />;
        return <i className='fa fa-sort-desc' />;
    };

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((column, index) => (
                        <th
                            className={`clickable ${
                                column.path === 'actionCol' && 'no-print'
                            }`}
                            key={column.path || index}
                            onClick={() => {
                                if (column.noSort) return;
                                this.raiseSort(column.path);
                            }}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
