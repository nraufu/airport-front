import React from 'react';
import Button from '../Button/Button';

const DataActionButtons = (props) => {
    const { onView, onDelete, onEdit, onApprove, onReject } = props;
    let { disable } = props;

    if (typeof disable === 'undefined') {
        disable = [];
    }

    const isDisabled = (buttonId) => {
        return (
            disable.findIndex((item) => {
                return item === buttonId;
            }) !== -1
        );
    };

    const buttons = {
        view: (
            <Button
                title='View'
                className='btn p-1'
                icon='fi fi-eye'
                onClick={() => onView()}
            />
        ),
        delete: (
            <Button
                title='Delete'
                className='btn p-1 text-danger'
                icon='fi fi-trash'
                onClick={() => onDelete()}
            />
        ),
        edit: (
            <Button
                title='Edit'
                className='btn p-1'
                icon='lnir lnir-pencil'
                onClick={() => onEdit()}
            />
        ),
        approve: (
            <Button
                title='Approve'
                className='btn p-1 text-primary'
                icon='lnir lnir-checkmark-circle'
                onClick={() => onApprove()}
            />
        ),
        reject: (
            <Button
                title='Reject'
                className='btn p-1 text-danger'
                icon='lnir lnir-cross-circle'
                onClick={() => onReject()}
            />
        ),
    };
    return (
        <div className='d-flex data-action-buttons no-print'>
            {isDisabled('view') || buttons.view}
            {isDisabled('edit') || buttons.edit}
            {isDisabled('delete') || buttons.delete}
            {isDisabled('approve') || buttons.approve}
            {isDisabled('reject') || buttons.reject}
        </div>
    );
};

export default React.memo(DataActionButtons);
