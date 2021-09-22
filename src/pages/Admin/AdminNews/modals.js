import Modal from '../../../components/UI/Modal/Modal';
import AddNews from './AddNews';
import EditNews from './EditNews';

export const AddNewsModal = ( ) => {
	Modal( {
		title: `Add News`,
		size: 'md',
		children: <AddNews/>,
	} );
};

export const EditNewsModal = ( news) => {
	Modal( {
		title: `Edit News`,
		size: 'md',
		children: <EditNews newsId={news._id}/>,
	} );
}
