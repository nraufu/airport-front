import React, { createRef } from 'react';
import Button from '../Button/Button';

const AddableInput = ({ label, placeholder, value, onChange }) => {
    const tagInput = createRef();

    const removeTag = (index) => {
        const newValue = [...value];
        newValue.splice(index, 1);

        onChange(newValue);
    };

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (
                value &&
                value.find((tag) => tag.toLowerCase() === val.toLowerCase())
            ) {
                return;
            }
            onChange([...value, val]);
            tagInput.current.value = null;
        }
    };

    return (
        <div className='addable-input'>
            <h6 className='addable-input__label'>{label}</h6>

            <div className='addable-input__container'>
                <input
                    type='text'
                    className='addable-input__container--input'
                    ref={tagInput}
                    placeholder={placeholder}
                    onKeyDown={inputKeyDown}
                />

                {value && value.length > 0 && (
                    <ul className='addable-input__container--tags'>
                        {value.map((item, index) => (
                            <li key={index}>
                                {item}
                                <Button
                                    className='tag-btn'
                                    icon='lnr lnr-cross'
                                    onClick={() => removeTag(index)}
                                />
                            </li>
                        ))}
                    </ul>
                )}

                {(typeof value === 'undefined' || value.length === 0) && (
                    <span className='addable-input__empty-tags'>
                        No items - Add items using the input above.
                    </span>
                )}
            </div>
        </div>
    );
};

export default AddableInput;
