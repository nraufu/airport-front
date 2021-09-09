import React from 'react';

const Button = ({ onClick, loading, disabled, label, className, icon }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {icon && (
                <i className={'btn__icon ' + icon} data-testid='btn-icon'></i>
            )}

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
