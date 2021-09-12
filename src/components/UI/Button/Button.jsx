import React from 'react';

const Button = ({ onClick, isLoading, disabled, label, className, icon }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {icon && (
                <i className={'btn__icon ' + icon} data-testid='btn-icon'></i>
            )}

            {isLoading ? (
                <div className='d-flex align-items-center'>
                    <i className='fa fa-spinner fa-spin mr-2'></i>
                    {label}
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default Button;
