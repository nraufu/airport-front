import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import { ViewDepartureModal, EditDepartureModal } from './modals';
import { departureActions } from '../../../store/actions/departures';
import { airlineActions } from '../../../store/actions/airlines';
import {
    Input,
    Button,
    Table,
    Select,
    ActionButtons,
    ConfirmationBox,
    SearchBox,
} from '../../../components/UI';
import Pagination from '../../../components/Pagination/Pagination';
import { getPagedData } from '../../../utils/paginate';

const Departures = ({
    airlines,
    departures,
    fetchDepartures,
    fetchAirlines,
    createDeparture,
    deleteDeparture,
}) => {
    const [airlineLogo, setAirlineLogo] = useState('');
    const [airlineName, setAirlineName] = useState('');
    const [flight, setFlight] = useState('');
    const [flightsList, setFlightsList] = useState([]);
    const [destination, setDestination] = useState('');
    const [scheduled, setScheduled] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState({});

    useEffect(() => {
        fetchDepartures();
        fetchAirlines();
    }, [fetchDepartures, fetchAirlines]);

    const onAirlineChange = (e) => {
        const selectedAirline = airlines.find(
            (airline) => airline.name === e.target.value
        );
        setAirlineLogo(selectedAirline.logoImgUri);
        setAirlineName(selectedAirline.name);
        setFlightsList(selectedAirline.flights);
    };

    const addDeparture = async () => {
        setIsSubmitting(true);

        if (
            (airlineName === '' || flight === '' || destination === '',
            scheduled === '',
            status === '')
        ) {
            toast.error('Please fill all the fields');
            setIsSubmitting(false);
            return;
        }

        const result = await createDeparture({
            airlineLogo,
            airlineName,
            flight,
            destination,
            scheduled,
            status,
        });

        setIsSubmitting(false);
        if (result.departure) {
            toast.success('Departure created successfully');
            setAirlineLogo('');
            setAirlineName('');
            setFlightsList([]);
            setDestination('');
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
        { label: 'Destination', path: 'destination' },
        { label: 'Scheduled', path: 'scheduled' },
        { label: 'Status', path: 'status' },
        {
            label: 'action',
            content: (item) => (
                <ActionButtons
                    onView={() => ViewDepartureModal(item)}
                    onEdit={() => EditDepartureModal(item)}
                    onDelete={() =>
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message: `Are you sure you want to delete ${item.airlineName} ?`,
                            onYes: async () => {
                                const result = await deleteDeparture(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Departure deleted successfully'
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

    const { totalCount, pagedData } = getPagedData(
        'airlineName',
        currentPage,
        sortColumn,
        searchQuery,
        departures
    );

    return (
        <>
            <h1 className='title-secondary mb-5'>Departures</h1>
            <AccordionCard header='+ Add Departure'>
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
                                name='destination'
                                valueType='Destination'
                                value={destination}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Destination',
                                }}
                                onChange={(e) => setDestination(e.target.value)}
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
                        onClick={addDeparture}
                    />
                </Container>
            </AccordionCard>

            <div className='d-flex justify-content-between align-items-center table-header-count'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Departures Flights
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label='Departure'
                />
            </div>

            <Table
                className='table-sm theme-light bordered'
                columns={columns}
                data={pagedData}
                sortColumn={sortColumn}
                onSort={(sortColumn) => setSortColumn(sortColumn)}
            />

            <Pagination
                currentPage={currentPage}
                itemsCount={totalCount}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
};

const mapStateToProps = ({ departuresState, airlinesState }) => ({
    departures: departuresState.departures,
    airlines: airlinesState.airlines,
});

const mapDispatchToProps = {
    fetchDepartures: departureActions.getAll,
    createDeparture: departureActions.create,
    deleteDeparture: departureActions.remove,
    fetchAirlines: airlineActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Departures);
