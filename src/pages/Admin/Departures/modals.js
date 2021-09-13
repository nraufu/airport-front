import Modal from '../../../components/UI/Modal/Modal';
import ViewDeparture from './ViewDeparture';
import EditDeparture from './EditDeparture';

export const ViewDepartureModal = ( departure ) => {
	Modal( {
		title: `Flight  ${ departure.flight }`,
		size: 'sm',
		children: <ViewDeparture departureId={ departure._id } />,
	} );
};

export const EditDepartureModal = ( departure ) => {
	Modal( {
		title: `Flight  ${ departure.flight }`,
		size: 'sm',
		children: <EditDeparture departure={ departure } />,
	} );
};

