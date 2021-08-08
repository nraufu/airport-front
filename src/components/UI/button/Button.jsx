import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, loading, disabled, label, className }) => {
    const btnClass = classNames('btn btn-primary', {
        [className]: className,
    });

    return (
        <button onClick={onClick} disabled={disabled} className={btnClass}>
            {loading ? (
                <div className='d-flex'>
                    <i className='fa fa-spinner fa-spin'></i>
                    {label}
                </div>
            ) : (
                { label }
            )}
        </button>
    );
};

export default Button;
