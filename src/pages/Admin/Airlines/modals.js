import Modal from '../../../components/UI/Modal/Modal';
import ViewAirline from './ViewAirline';
import EditAirline from './EditAirline';

export const ViewAirlineModal = (airline) => {
    Modal({
        title: `Airline  ${airline.name}`,
        size: 'md',
        children: <ViewAirline airlineId={airline._id} />,
    });
};

export const EditAirlineModal = (airline) => {
    Modal({
        title: `Update Airline  ${airline.name}`,
        size: 'md',
        children: <EditAirline airline={airline} />,
    });
};
