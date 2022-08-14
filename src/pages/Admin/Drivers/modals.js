import Modal from '../../../components/UI/Modal/Modal';
import EditDriver from './EditDriver';

export const EditDriverModal = (driver) => {
    Modal({
        title: `Update Driver  ${driver.fullNames}`,
        size: 'md',
        children: <EditDriver driver={driver} />,
    });
};
