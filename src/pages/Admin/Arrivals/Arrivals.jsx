import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import { ViewArrivalModal, EditArrivalModal } from './modals';
import { arrivalActions } from '../../../store/actions/arrivals';
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
    const [airlineWebsite, setAirlineWebsite] = useState('');
    const [flight, setFlight] = useState('');
    const [flightsList, setFlightsList] = useState([]);
    const [origin, setOrigin] = useState('');
    const [scheduled, setScheduled] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState({});

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
        setAirlineWebsite(selectedAirline.website);
        setFlightsList(selectedAirline.flights);
    };

    const addArrival = async () => {
        setIsSubmitting(true);

        if (
            airlineName === '' ||
            flight === '' ||
            origin === '' ||
            scheduled === '' ||
            status === ''
        ) {
            toast.error('Please fill all the fields');
            setIsSubmitting(false);
            return;
        }

        const result = await createArrival({
            airlineLogo,
            airlineName,
            airlineWebsite,
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
            noSort: true,
        },
        { label: 'Airline Name', path: 'airlineName' },
        { label: 'Flight', path: 'flight' },
        { label: 'Origin', path: 'origin' },
        { label: 'Scheduled', path: 'scheduled', noSort: true },
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

    const { totalCount, pagedData } = getPagedData(
        currentPage,
        sortColumn,
        searchQuery,
        arrivals
    );

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Arrivals</h1>
                <PrintButton className='btn btn-secondary ml-auto' />
            </div>

            <div className='no-print'>
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
                            onClick={addArrival}
                        />
                    </Container>
                </AccordionCard>
            </div>

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Arrivals Flights
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label='Arrival'
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
