import Modal from '../../../components/UI/Modal/Modal';
import ViewAirline from './ViewAirline';
import EditAirline from './EditAirline';

export const ViewAirlineModal = ( airline ) => {
	Modal( {
		title: `Airline  ${ airline.name }`,
		size: 'sm',
		children: <ViewAirline airlineId={ airline._id } />,
	} );
};

export const EditAirlineModal = ( airline ) => {
	Modal( {
		title: `Airline  ${ airline.name }`,
		size: 'sm',
		children: <EditAirline airline={ airline } />,
	} );
};

