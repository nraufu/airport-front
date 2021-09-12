import React, { Component } from 'react';

// columns: array

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((column, index) => (
                        <th key={index}> {column.label}</th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
