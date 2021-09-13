import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Table from '../../../components/UI/Table/Table';
import ActionButtons from '../../../components/UI/Table/ActionButtons';
import ConfirmationBox from '../../../components/UI/AlertBox/ConfirmationBox';
import { ViewArrivalModal, EditArrivalModal } from './modals';
import Select from '../../../components/UI/Select/Select';
import { arrivalActions } from '../../../store/actions/arrivals';
import { airlineActions } from '../../../store/actions/airlines';

const Arrivals = ({
    airlines,
    arrivals,
    fetchArrivals,
    fetchAirlines,
    createArrival,
    deleteArrival,
}) => {
    const [airlineLogo, setAirlineLogo] = useState('');
    const [airlineName, setAirlineName] = useState('');
    const [flight, setFlight] = useState('');
    const [flightsList, setFlightsList] = useState([]);
    const [origin, setOrigin] = useState('');
    const [scheduled, setScheduled] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchArrivals();
        fetchAirlines();
    }, [fetchArrivals, fetchAirlines]);

    const onAirlineChange = (e) => {
        const selectedAirline = airlines.find(
            (airline) => airline.name === e.target.value
        );
        setAirlineLogo(selectedAirline.logoImgUri);
        setAirlineName(selectedAirline.name);
        setFlightsList(selectedAirline.flights);
    };

    const addArrival = async () => {
        setIsSubmitting(true);
        const result = await createArrival({
            airlineLogo,
            airlineName,
            flight,
            origin,
            scheduled,
            status,
        });

        setIsSubmitting(false);
        if (result.arrival) {
            toast.success('Arrival created successfully');
            setAirlineLogo('');
            setAirlineName('');
            setFlightsList([]);
            setOrigin('');
            setScheduled('');
            setStatus('');
        } else {
            toast.error('Something went wrong');
        }
    };

    const columns = [
        {
            label: 'Airline Logo',
            path: 'airlineLogo',
            content: (item) => (
                <img src={item.airlineLogo} alt='logo' className='logo-image' />
            ),
        },
        { label: 'Airline Name', path: 'airlineName' },
        { label: 'Flight', path: 'flight' },
        { label: 'Origin', path: 'origin' },
        { label: 'Scheduled', path: 'scheduled' },
        { label: 'Status', path: 'status' },
        {
            label: 'action',
            content: (item) => (
                <ActionButtons
                    onView={() => ViewArrivalModal(item)}
                    onEdit={() => EditArrivalModal(item)}
                    onDelete={() =>
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message: `Are you sure you want to delete ${item.airlineName} ?`,
                            onYes: async () => {
                                const result = await deleteArrival(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Arrival deleted successfully'
                                    );
                                } else {
                                    toast.error('Something went wrong');
                                }
                            },
                        })
                    }
                />
            ),
        },
    ];

    return (
        <>
            <h1 className='title-secondary mb-5'>Arrivals</h1>
            <AccordionCard header='+ Add Arrival'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Select
                                label='Airline'
                                value={airlineName}
                                onChange={onAirlineChange}
                                options={airlines.map((airline) => ({
                                    value: airline.name,
                                    label: airline.name,
                                }))}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Select
                                label='Flight'
                                value={flight}
                                onChange={(e) => setFlight(e.target.value)}
                                options={flightsList.map((flight) => ({
                                    value: flight,
                                    label: flight,
                                }))}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='origin'
                                valueType='Origin'
                                value={origin}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Origin',
                                }}
                                onChange={(e) => setOrigin(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='scheduled'
                                valueType='Scheduled'
                                value={scheduled}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Scheduled',
                                }}
                                onChange={(e) => setScheduled(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='status'
                                valueType='Status'
                                value={status}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Status',
                                }}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Button
                        label='Submit'
                        className='btn btn-primary text-white mt-4'
                        isLoading={isSubmitting}
                        onClick={addArrival}
                    />
                </Container>
            </AccordionCard>

            <h6 className='title-tertiary my-5'>List</h6>

            <Table
                className='table-sm theme-light bordered'
                columns={columns}
                data={arrivals}
            />
        </>
    );
};

const mapStateToProps = ({ arrivalsState, airlinesState }) => ({
    arrivals: arrivalsState.arrivals,
    airlines: airlinesState.airlines,
});

const mapDispatchToProps = {
    fetchArrivals: arrivalActions.getAll,
    createArrival: arrivalActions.create,
    deleteArrival: arrivalActions.remove,
    fetchAirlines: airlineActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrivals);
