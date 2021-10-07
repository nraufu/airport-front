import { Modal } from '../../../components/UI';
import ChangePassword from './ChangePassword';

export const ChangePasswordModal = () => {
    Modal({
        title: 'change Password',
        size: 'sm',
        children: <ChangePassword />,
    });
};
