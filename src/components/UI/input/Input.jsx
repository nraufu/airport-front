import React from 'react';

const Input = (props) => {
    const { label, value, onChange, elementType } = props;
    let inputElement = null;

    switch (elementType) {
        case 'input':
            inputElement = (
                <input
                    className='form-control'
                    {...props.elementConfig}
                    value={value}
                    onChange={onChange}
                />
            );
            break;

        default:
            break;
    }
    return (
        <div class='form-group'>
            {/* <label>{label}</label> */}
            {inputElement}
        </div>
    );
};

export default Input;
