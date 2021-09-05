import React from 'react';

const Button = ({ onClick, loading, disabled, label, className }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {loading ? (
                <div className='d-flex'>
                    <i className='fa fa-spinner fa-spin'></i>
                    {label}
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;
