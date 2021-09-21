import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import { ViewAirlineModal, EditAirlineModal } from './modals';
import { airlineActions } from '../../../store/actions/airlines';
import { countriesList } from '../../../components/UI/countries';
import { getPagedData } from '../../../utils/paginate';
import Pagination from '../../../components/Pagination/Pagination';
import {
    AddableInput,
    Input,
    Button,
    Table,
    Select,
    ActionButtons,
    ConfirmationBox,
    SearchBox,
} from '../../../components/UI';

const Airlines = ({
    airlines,
    fetchAirlines,
    createAirline,
    deleteAirline,
}) => {
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [country, setCountry] = useState('');
    const [flights, setFlights] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState({});

    useEffect(() => {
        fetchAirlines();
    }, [fetchAirlines]);

    const addAirline = async () => {
        setIsSubmitting(true);

        const result = await createAirline({
            name,
            logoImg: logo,
            country,
            flights,
        });

        setIsSubmitting(false);

        if (result.airline) {
            toast.success('Airline created successfully');
            setName('');
            setLogo('');
            setCountry('');
            setFlights([]);
        } else {
            toast.error('Something went wrong');
        }
    };

    const columns = [
        {
            label: 'Airline',
            path: 'logoUrl',
            content: (item) => (
                <img src={item.logoImgUri} alt='logo' className='logo-image' />
            ),
        },
        { label: 'Name', path: 'name' },
        { label: 'Country', path: 'country' },
        {
            label: 'Total Flights',
            path: 'flights',
            content: (item) => <span>{item.flights.length}</span>,
        },
        {
            label: 'action',
            content: (item) => (
                <ActionButtons
                    onView={() => ViewAirlineModal(item)}
                    onEdit={() => EditAirlineModal(item)}
                    onDelete={() =>
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message: `Are you sure you want to delete ${item.name} ?`,
                            onYes: async () => {
                                const result = await deleteAirline(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Airline deleted successfully'
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
        'name',
        currentPage,
        sortColumn,
        searchQuery,
        airlines
    );

    return (
        <>
            <h1 className='title-secondary mb-5'>Airlines</h1>
            <AccordionCard header='+ Add Airline'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='name'
                                valueType='Name'
                                value={name}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Name',
                                }}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='logoUrl'
                                valueType='Logo Url'
                                value={logo}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Logo Url',
                                }}
                                onChange={(e) => setLogo(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Select
                                label='Country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                options={countriesList.map((country) => ({
                                    value: country.name,
                                    label: country.name,
                                }))}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                            <AddableInput
                                label='Flights'
                                placeholder='Enter Airline flights'
                                value={flights}
                                onChange={setFlights}
                            />
                        </Col>
                    </Row>

                    <Button
                        label='Submit'
                        className='btn btn-primary text-white mt-4'
                        isLoading={isSubmitting}
                        onClick={addAirline}
                    />
                </Container>
            </AccordionCard>

            <div className='d-flex justify-content-between align-items-center table-header-count'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Airlines
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label='Airline'
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

const mapStateToProps = ({ airlinesState }) => ({
    airlines: airlinesState.airlines,
});

const mapDispatchToProps = {
    fetchAirlines: airlineActions.getAll,
    createAirline: airlineActions.create,
    deleteAirline: airlineActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Airlines);
