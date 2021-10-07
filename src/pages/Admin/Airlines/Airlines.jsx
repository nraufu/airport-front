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
    PrintButton,
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
    const [website, setWebsite] = useState('');
    const [headQuarterLocation, setheadQuarterLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [flights, setFlights] = useState([]);
    const [email, setEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sortColumn, setSortColumn] = useState({});

    useEffect(() => {
        fetchAirlines();
    }, [fetchAirlines]);

    const addAirline = async () => {
        setIsSubmitting(true);

        if (
            name === '' ||
            logo === '' ||
            country === '' ||
            website === '' ||
            headQuarterLocation === '' ||
            phone === '' ||
            email === '' ||
            flights.length === 0
        ) {
            toast.error('Please fill all the fields');
            setIsSubmitting(false);
            return;
        }

        if (
            !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
                website
            )
        ) {
            toast.error('Please enter a valid website');
            setIsSubmitting(false);
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            toast.error('Please enter a valid phone number');
            setIsSubmitting(false);
            return;
        }

        if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                email
            )
        ) {
            toast.error('Please enter a valid email');
            setIsSubmitting(false);
            return;
        }

        const result = await createAirline({
            name,
            logoImg: logo,
            country,
            flights,
            website,
            email,
            headQuarterLocation,
            phone,
        });

        setIsSubmitting(false);

        if (result.airline) {
            toast.success('Airline created successfully');
            setName('');
            setLogo('');
            setCountry('');
            setFlights([]);
            setWebsite('');
            setheadQuarterLocation('');
            setPhone('');
            return;
        } else {
            toast.error('Something Went Wrong');
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
            label: 'Website',
            path: 'website',
            noSort: true,
            content: (item) => <a href={item.website}>{item.website}</a>,
        },
        {
            label: 'Email',
            path: 'email',
            content: (item) => (
                <a href={`mailto:${item.email}`}>{item.email}</a>
            ),
        },
        {
            label: 'Phone',
            path: 'phone',
            noSort: true,
            content: (item) => <a href={`tel:${item.phone}`}>{item.phone}</a>,
        },
        {
            label: 'Total Flights',
            path: 'flights',
            noSort: true,
            content: (item) => <span>{item.flights.length}</span>,
        },
        {
            label: 'action',
            path: 'actionCol',
            noSort: true,
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
        currentPage,
        sortColumn,
        searchQuery,
        airlines
    );

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Airlines</h1>
                <PrintButton className='btn btn-secondary ml-auto' />
            </div>

            <div className='no-print'>
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
                                    name='phone'
                                    valueType='Phone'
                                    value={phone}
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'phone###',
                                    }}
                                    onChange={(e) => setPhone(e.target.value)}
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

                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='input'
                                    name='website'
                                    valueType='Airline Website'
                                    value={website}
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'Website',
                                    }}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='input'
                                    name='headQuarterLocation'
                                    valueType='Head Quarter Address'
                                    value={headQuarterLocation}
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'Head Quarter Address',
                                    }}
                                    onChange={(e) =>
                                        setheadQuarterLocation(e.target.value)
                                    }
                                />
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='image'
                                    valueType='Logo image'
                                    name='logo'
                                    type='file'
                                    multiple={false}
                                    onDone={({ base64 }) => setLogo(base64)}
                                    accept='image/*'
                                />
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='input'
                                    name='email'
                                    valueType='Email'
                                    value={email}
                                    elementConfig={{
                                        type: 'email',
                                        placeholder: 'Email',
                                    }}
                                    onChange={(e) => setEmail(e.target.value)}
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
            </div>

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
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
