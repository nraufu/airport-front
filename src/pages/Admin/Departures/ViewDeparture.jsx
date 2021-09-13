import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ContentBox, InfoBox, DateBox } from '../../../components/Layouts';
import { Grid } from '../../../components/Grid';
import { EditDepartureModal } from './modals';
import ConfirmationBox from '../../../components/UI/AlertBox/ConfirmationBox';
import Button from '../../../components/UI/Button/Button';
import { departureActions } from '../../../store/actions/departures';
import Spinner from '../../../components/Spinner/Spinner';

function ViewDeparture(props) {
    const { departureId, loadDeparture, departure, deleteDeparture } = props;

    const {
        _id,
        airline,
        airlineName,
        flight,
        destination,
        scheduled,
        status,
        createdAt,
        updatedAt,
    } = departure || {};

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        loadDeparture(departureId);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [loadDeparture, departureId]);

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
                    <ContentBox title='Destination'>{destination}</ContentBox>
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
                    onClick={() => EditDepartureModal(airline)}
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
                                const result = await deleteDeparture(_id);

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

const mapStateToProps = ({ departuresState }) => {
    return { departure: departuresState.departure };
};

const mapDispatchToProps = {
    loadDeparture: departureActions.getSingle,
    deleteDeparture: departureActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeparture);
