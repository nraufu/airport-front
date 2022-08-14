import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import { EditDriverModal } from './modals';
import { driverActions } from '../../../store/actions/drivers';
import { getPagedData } from '../../../utils/paginate';
import Pagination from '../../../components/Pagination/Pagination';
import {
    Input,
    Button,
    PrintButton,
    Table,
    ActionButtons,
    ConfirmationBox,
    SearchBox,
    Select,
} from '../../../components/UI';

const Drivers = ({ drivers, fetchDrivers, createDriver, deleteDriver }) => {
    const [fullNames, setFullNames] = useState('');
    const [phone, setPhone] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [carType, setCarType] = useState('');
    const [email, setEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sortColumn, setSortColumn] = useState({});

    useEffect(() => {
        fetchDrivers();
    }, [fetchDrivers]);

    const addDriver = async () => {
        setIsSubmitting(true);

        if (
            fullNames === '' ||
            plateNumber === '' ||
            carType === '' ||
            phone === '' ||
            email === ''
        ) {
            toast.error('Please fill all the fields');
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

        const result = await createDriver({
            fullNames,
            phone,
            carType,
            plateNumber,
            email,
        });

        setIsSubmitting(false);

        if (result.driver) {
            toast.success('Driver created successfully');
            setFullNames('');
            setPhone('');
            setPlateNumber('');
            setCarType('');
            setEmail('');

            return;
        } else {
            toast.error('Something Went Wrong');
        }
    };

    const columns = [
        {
            label: 'Full Names',
            path: 'fullNames',
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
            label: 'Car Type',
            path: 'carType',
            noSort: true,
        },
        {
            label: 'Plate Number',
            path: 'plateNumber',
            noSort: true,
        },
        {
            label: 'action',
            path: 'actionCol',
            noSort: true,
            content: (item) => (
                <ActionButtons
                    onEdit={() => EditDriverModal(item)}
                    onDelete={() =>
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message: `Are you sure you want to delete ${item.fullNames} ?`,
                            onYes: async () => {
                                const result = await deleteDriver(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Driver deleted successfully'
                                    );
                                } else {
                                    toast.error('Something went wrong');
                                }
                            },
                        })
                    }
                    disable={['view', 'approve', 'reject']}
                />
            ),
        },
    ];

    const { totalCount, pagedData } = getPagedData(
        currentPage,
        sortColumn,
        searchQuery,
        drivers
    );

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Taxi Drivers</h1>
                <PrintButton className='btn btn-secondary ml-auto' />
            </div>

            <div className='no-print'>
                <AccordionCard header='+ Add Driver'>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='input'
                                    name='fullName'
                                    valueType='Full Name'
                                    value={fullNames}
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'Full Names',
                                    }}
                                    onChange={(e) =>
                                        setFullNames(e.target.value)
                                    }
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
                                    label='Car Type'
                                    value={carType}
                                    onChange={(e) => setCarType(e.target.value)}
                                    options={[
                                        {
                                            label: 'Normal',
                                            value: 'Normal',
                                        },
                                        {
                                            label: 'Van',
                                            value: 'Van',
                                        },
                                        {
                                            label: 'Bus',
                                            value: 'Bus',
                                        },
                                    ]}
                                />
                            </Col>

                            <Col xs={12} md={6} lg={4}>
                                <Input
                                    elementType='input'
                                    name='plateNumber'
                                    valueType='Plate Number'
                                    value={plateNumber}
                                    elementConfig={{
                                        type: 'text',
                                        placeholder: 'Plate Number',
                                    }}
                                    onChange={(e) =>
                                        setPlateNumber(e.target.value)
                                    }
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
                        </Row>

                        <Button
                            label='Submit'
                            className='btn btn-primary text-white mt-4'
                            isLoading={isSubmitting}
                            onClick={addDriver}
                        />
                    </Container>
                </AccordionCard>
            </div>

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Drivers
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label='Driver'
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

const mapStateToProps = ({ driversState }) => ({
    drivers: driversState.drivers,
});

const mapDispatchToProps = {
    fetchDrivers: driverActions.getAll,
    createDriver: driverActions.create,
    deleteDriver: driverActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
