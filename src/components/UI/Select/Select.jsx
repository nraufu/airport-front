import React from 'react';
import { Form } from 'react-bootstrap';

const Select = (props) => {
    const { onChange, label, options, value, inselectlabel, isintable } = props;
    return (
        <div className='form-group'>
            {label && <label>{label}</label>}
            <Form.Select
                size={isintable === 'true' ? 'md' : 'lg'}
                onChange={onChange}
                value={value}
                {...props}
                className={`${isintable ? 'normal-font' : ''}`}
            >
                <option value=''>{`Select ${label || inselectlabel}`}</option>
                {options &&
                    options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Select>
        </div>
    );
};

export default Select;
