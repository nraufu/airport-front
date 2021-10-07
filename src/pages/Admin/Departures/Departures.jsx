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
    PrintButton,
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
    const [airlineWebsite, setAirlineWebsite] = useState('');
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
        setAirlineWebsite(selectedAirline.website);
        setFlightsList(selectedAirline.flights);
    };

    const addDeparture = async () => {
        setIsSubmitting(true);

        if (
            destination.toLowerCase() === 'kigali' ||
            destination.toLowerCase() === 'rwanda'
        ) {
            toast.error('destination is invalid');
            return;
        }

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
            airlineWebsite,
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
            noSort: true,
            content: (item) => (
                <img src={item.airlineLogo} alt='logo' className='logo-image' />
            ),
        },
        { label: 'Airline Name', path: 'airlineName' },
        { label: 'Flight', path: 'flight' },
        { label: 'Destination', path: 'destination' },
        { label: 'Scheduled', path: 'scheduled' },
        {
            label: 'Status',
            path: 'status',
            noSort: true,
            content: (item) => (
                <span className='text-primary'>{item.status}</span>
            ),
        },
        {
            label: 'action',
            path: 'actionCol',
            noSort: true,
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
        currentPage,
        sortColumn,
        searchQuery,
        departures
    );

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Departures</h1>
                <PrintButton className='btn btn-secondary ml-auto' />
            </div>

            <div className='no-print'>
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
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setScheduled(e.target.value)
                                    }
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
            </div>

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
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
