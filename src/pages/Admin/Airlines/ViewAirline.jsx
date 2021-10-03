import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ContentBox, InfoBox, DateBox } from '../../../components/Layouts';
import { Grid } from '../../../components/Grid';
import { EditAirlineModal } from './modals';
import ConfirmationBox from '../../../components/UI/AlertBox/ConfirmationBox';
import Button from '../../../components/UI/Button/Button';
import { airlineActions } from '../../../store/actions/airlines';
import Spinner from '../../../components/Spinner/Spinner';

function ViewAirline(props) {
    const { airlineId, loadAirline, airline, deleteAirline } = props;

    const {
        _id,
        name,
        logoImgUri,
        country,
        flights,
        website,
        headerQuarterLocation,
        phone,
        createdAt,
        updatedAt,
    } = airline || {};

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        loadAirline(airlineId);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [loadAirline, airlineId]);

    return isLoading ? (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner />
        </div>
    ) : (
        <>
            <header className='d-flex justify-content-between mb-4'>
                <InfoBox title={name} subTitle='Airline'>
                    <DateBox prefix={'Created on'} date={createdAt} />
                    <DateBox prefix={'Updated on'} date={updatedAt} />
                </InfoBox>
            </header>

            <Grid.Row>
                <Grid.Col lg={6} className='mb-3'>
                    <ContentBox title='Logo Image'>
                        <img src={logoImgUri} className='img-fluid' alt='' />
                    </ContentBox>
                </Grid.Col>

                <Grid.Col lg={6} className='mb-3'>
                    <ContentBox title='Website'>
                        <a
                            href={website}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {website}
                        </a>
                    </ContentBox>
                </Grid.Col>

                <Grid.Col lg={6}>
                    <Grid.Row>
                        <Grid.Col lg={6}>
                            <ContentBox title='Country'>{country}</ContentBox>
                        </Grid.Col>

                        <Grid.Col lg={6}>
                            <ContentBox title='Phone'>{phone}</ContentBox>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Col>

                <Grid.Col lg={6}>
                    <ContentBox title='Header Quarter Location'>
                        {headerQuarterLocation}
                    </ContentBox>
                </Grid.Col>

                <Grid.Col lg={6} className='mt-3'>
                    <ContentBox title='Flights'>
                        <ul>
                            {flights &&
                                flights.map((flight, index) => (
                                    <li key={index}>{flight}</li>
                                ))}
                        </ul>
                    </ContentBox>
                </Grid.Col>
            </Grid.Row>

            <footer className='mt-5 d-flex align-items-center'>
                <Button
                    label='Edit'
                    className='btn btn-dark m-3'
                    icon='lnir lnir-pencil'
                    onClick={() => EditAirlineModal(airline)}
                />

                <Button
                    label='Delete'
                    className='btn btn-danger'
                    icon='lnir lnir-trash'
                    onClick={() => {
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message:
                                'Are you sure you to delete airline ' + name,
                            onYes: async () => {
                                const result = await deleteAirline(_id);

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

const mapStateToProps = ({ airlinesState }) => {
    return { airline: airlinesState.airline };
};

const mapDispatchToProps = {
    loadAirline: airlineActions.getSingle,
    deleteAirline: airlineActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAirline);
