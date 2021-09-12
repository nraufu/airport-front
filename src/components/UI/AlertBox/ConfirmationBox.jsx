import AlertBox from './AlertBox';

function ConfirmationBox({ onYes, onNo, title, message }) {
    AlertBox({
        show: true,
        title,
        message,
        isDefault: true,
        btnActions: [
            {
                className: 'btn btn-success m-3 px-4',
                label: 'Yes',
                onClick: () => {
                    if (onYes) {
                        onYes();
                    }
                },
            },
            {
                className: 'btn btn-secondary px-4',
                label: 'No',
                onClick: () => {
                    if (onNo) {
                        onNo();
                    }
                },
            },
        ],
    });
}

export default ConfirmationBox;
