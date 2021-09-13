import Modal from '../../../components/UI/Modal/Modal';
import ViewArrival from './ViewArrival';
import EditArrival from './EditArrival';

export const ViewArrivalModal = ( arrival ) => {
	Modal( {
		title: `Flight  ${ arrival.flight }`,
		size: 'md',
		children: <ViewArrival arrivalId={ arrival._id } />,
	} );
};

export const EditArrivalModal = ( arrival ) => {
	Modal( {
		title: `Flight  ${ arrival.flight }`,
		size: 'sm',
		children: <EditArrival arrival={ arrival } />,
	} );
};

