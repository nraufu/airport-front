import Button from '../Button/Button';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

const notificationRoot = document.getElementById('modal-root');

function AlertBox(props) {
    const {
        show,
        isError,
        isWarning,
        isSuccess,
        isDefault,
        message,
        btnActions,
        title,
    } = props;
    let icon;

    const closeAlertBox = (ref) => {
        ref.style = 'transition:opacity 0.3s; opacity:0';
        setTimeout(() => {
            if (notificationRoot.contains(ref))
                notificationRoot.removeChild(ref);
        }, 340);
    };

    let alertBoxNode = null;
    alertBoxNode = document.createElement('div');

    notificationRoot.appendChild(alertBoxNode);

    const wrapperClass = classnames('alert-box-wrapper', {
        show,
    });

    const boxColorClass = classnames('alert-box', {
        'bg-danger alert-box--error': isError,
        'bg-warning alert-box--warning': isWarning,
        'bg-success alert-box--success': isSuccess,
        'bg-light alert-box--default': isDefault,
    });

    if (isError) icon = 'icon fi fi-flash';
    if (isWarning) icon = 'icon fi fi-universal-acces';
    if (isSuccess) icon = 'icon fi fi-check';
    if (isDefault) icon = 'icon fi fi-info';

    ReactDOM.render(
        <div className={wrapperClass}>
            <div className={boxColorClass}>
                {title && (
                    <header className='alert-box__header'>
                        <i data-testid='box-icon' className={icon}></i>
                        {title}
                    </header>
                )}
                <div className='alert-box__content'>
                    <p className='mb-4'>{message}</p>

                    {btnActions && (
                        <div className='alert-box__content-buttons d-flex flex-wrap justify-content-center align-items-center'>
                            {btnActions.map((btn, index) => (
                                <Button
                                    key={index}
                                    className={btn.className}
                                    label={btn.label}
                                    onClick={() => {
                                        btn.onClick(() => {
                                            closeAlertBox(alertBoxNode);
                                        });
                                        closeAlertBox(alertBoxNode);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        alertBoxNode
    );

    return null;
}

export default AlertBox;
