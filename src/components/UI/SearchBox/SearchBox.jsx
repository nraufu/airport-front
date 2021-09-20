import React from 'react';

const SearchBox = ({ value, onChange, label }) => {
    return (
        <input
            type='text'
            name='query'
            className='form-control search-input'
            placeholder={`Search ${label || '..'}...`}
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
        />
    );
};

export default SearchBox;
