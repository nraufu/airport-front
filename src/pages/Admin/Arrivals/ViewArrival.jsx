import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ContentBox, InfoBox, DateBox } from '../../../components/Layouts';
import { Grid } from '../../../components/Grid';
import { EditArrivalModal } from './modals';
import ConfirmationBox from '../../../components/UI/AlertBox/ConfirmationBox';
import Button from '../../../components/UI/Button/Button';
import { arrivalActions } from '../../../store/actions/arrivals';
import Spinner from '../../../components/Spinner/Spinner';

function ViewArrival(props) {
    const { arrivalId, loadArrival, arrival, deleteArrival } = props;

    const {
        _id,
        airline,
        airlineName,
        flight,
        origin,
        scheduled,
        status,
        createdAt,
        updatedAt,
    } = arrival || {};

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        loadArrival(arrivalId);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [loadArrival, arrivalId]);

    return isLoading ? (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner />
        </div>
    ) : (
        <>
            <header className='d-flex justify-content-between mb-4'>
                <InfoBox title={airlineName} subTitle='Airline'>
                    <DateBox prefix={'Created on'} date={createdAt} />
                    <DateBox prefix={'Updated on'} date={updatedAt} />
                </InfoBox>
            </header>

            <Grid.Row>
                <Grid.Col lg={4}>
                    <ContentBox title='Logo'>
                        <img src={airline} className='img-fluid' alt='' />
                    </ContentBox>
                </Grid.Col>

                <Grid.Col lg={4} className='mb-3'>
                    <ContentBox title='Origin'>{origin}</ContentBox>
                </Grid.Col>

                <Grid.Col lg={4} className='mb-3'>
                    <ContentBox title='Scheduled'>{scheduled}</ContentBox>
                </Grid.Col>

                <Grid.Col lg={4} className='mb-3'>
                    <ContentBox title='Flight'>{flight}</ContentBox>
                </Grid.Col>

                <Grid.Col lg={4}>
                    <ContentBox title='Status'>
                        <strong>{status}</strong>
                    </ContentBox>
                </Grid.Col>
            </Grid.Row>

            <footer className='mt-5 d-flex align-items-center'>
                <Button
                    label='Edit'
                    className='btn btn-dark m-3'
                    icon='lnir lnir-pencil'
                    onClick={() => EditArrivalModal(airline)}
                />

                <Button
                    label='Delete'
                    className='btn btn-danger'
                    icon='lnir lnir-trash'
                    onClick={() => {
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message:
                                'Are you sure you to delete airline ' +
                                airlineName,
                            onYes: async () => {
                                const result = await deleteArrival(_id);

                                if (result.message) {
                                    toast.success('Deleted SuccessFully');
                                }
                            },
                        });
                    }}
                />
            </footer>
        </>
    );
}

const mapStateToProps = ({ arrivalsState }) => {
    return { arrival: arrivalsState.arrival };
};

const mapDispatchToProps = {
    loadArrival: arrivalActions.getSingle,
    deleteArrival: arrivalActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewArrival);
