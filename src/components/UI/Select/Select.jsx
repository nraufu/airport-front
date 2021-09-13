import React from 'react';
import { Form } from 'react-bootstrap';

const Select = (props) => {
    const { onChange, label, options, value } = props;
    return (
        <div className='form-group'>
            <label>{label}</label>
            <Form.Select size='lg' onChange={onChange} value={value} {...props}>
                <option value=''>{`Select ${label}`}</option>
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
