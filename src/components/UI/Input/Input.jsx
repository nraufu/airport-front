import React from 'react';
import { countriesList } from '../countries';

const Input = (props) => {
    const { value, onChange, elementType, valueType, label, options } = props;
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
        case 'select':
            inputElement = (
                <select
                    className='form-control no-print'
                    onChange={onChange}
                    onBlur={onChange}
                    value={value}
                    {...props}
                    required
                >
                    <option value=''>{`Select ${label}`}</option>
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            );
            break;
        case 'country':
            inputElement = (
                <select
                    className='form-control no-print'
                    onChange={onChange}
                    onBlur={onChange}
                    value={value}
                    required
                >
                    <option value=''>{`Select Country`}</option>
                    {countriesList &&
                        countriesList.map((option, index) => (
                            <option key={index} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                </select>
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
