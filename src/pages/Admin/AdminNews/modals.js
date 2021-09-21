import Modal from '../../../components/UI/Modal/Modal';
import AddNews from './AddNews';

export const AddNewsModal = ( ) => {
	Modal( {
		title: `Add News`,
		size: 'md',
		children: <AddNews/>,
	} );
};

