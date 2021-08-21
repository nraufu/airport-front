import React from 'react';

const Input = (props) => {
    const { value, onChange, elementType, valueType } = props;
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
        <div className='form-group'>
            <label>{valueType}</label>
            {inputElement}
        </div>
    );
};

export default Input;
