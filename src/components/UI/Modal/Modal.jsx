import React from 'react';
import { Provider } from 'react-redux';
import Button from '../Button/Button';
import ReactDOM from 'react-dom';
import store from '../../../store';

const Modal = (props) => {
    const modalRoot = document.getElementById('modal-root');
    const { onClose, footer } = props;

    let modalNode = null;

    const closeModal = (ref) => {
        ref.style = 'transition:opacity 0.3s; opacity:0';
        setTimeout(() => {
            if (modalRoot.contains(ref)) {
                modalRoot.removeChild(ref);
            }
        }, 400);
    };

    modalNode = document.createElement('div');

    modalNode.classList.add('modal');
    modalNode.classList.add('show');
    modalNode.classList.add('modal--' + props.size);
    modalNode.classList.add('id--' + Math.floor(Math.random() * 10 + 1));

    modalRoot.appendChild(modalNode);

    ReactDOM.render(
        <Provider store={store}>
            <div className={`modal__content ${props.bgContent}`}>
                <div className='modal__header d-flex justify-content-between align-items-center'>
                    <h5 className='title'>{props.title}</h5>
                    <Button
                        icon='fi fi-close-a'
                        className='modal__header-close-btn btn btn-danger'
                        onClick={() => {
                            closeModal(modalNode);
                            if (typeof onClose === 'function') onClose();
                        }}
                    />
                </div>
                {props.description && (
                    <span className='description'>{props.description}</span>
                )}
                <div className='modal__body'>
                    <div className='inner-contents'>{props.children}</div>
                </div>
                {footer && <footer className='modal__footer'>{footer}</footer>}
            </div>
        </Provider>,
        modalNode
    );
    return null;
};

export default Modal;
