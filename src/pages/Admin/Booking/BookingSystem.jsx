import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { getPagedData } from '../../../utils/paginate';
import Pagination from '../../../components/Pagination/Pagination';
import {
    PrintButton,
    Table,
    ActionButtons,
    ConfirmationBox,
    SearchBox,
    Select,
} from '../../../components/UI';
import { driverActions } from '../../../store/actions/drivers';
import { bookingActions } from '../../../store/actions/bookings';

const BookingSystem = ({
    bookings,
    fetchBookings,
    approveBooking,
    deleteBooking,
    rejectBooking,
    fetchDrivers,
    drivers,
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState({});
    const [selectedDriver, setSelectedDriver] = useState('');

    useEffect(() => {
        fetchBookings();
        fetchDrivers();
    }, [fetchBookings, fetchDrivers]);

    const driversOptions = (carType) => {
        return drivers.filter(driver => driver.carType.toLowerCase() === carType.toLowerCase()).map(item => ({
            value: item._id,
            label: item.fullNames,
        }));
    }

    const columns = [
        { label: 'Client', path: 'fullNames' },
        { label: 'Pick up', path: 'pickupAddress' },
        {
            label: 'Requested Car',
            path: 'carType',
            noSort: true,
        },
        { label: 'Date', path: 'date' },
        { label: 'Time', path: 'time' },
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
            label: 'Driver',
            path: 'driverCol',
            content: (item) => (
                <Select
                    inselectlabel='Driver'
                    isintable='true'
                    value={selectedDriver}
                    onChange={(e) => setSelectedDriver(e.target.value)}
                    options={driversOptions(item.carType)}
                />
            ),
        },
        {
            label: 'action',
            path: 'actionCol',
            noSort: true,
            content: (item) => (
                <ActionButtons
                    onApprove={() =>
                        ConfirmationBox({
                            title: 'Confirm booking',
                            message: `Are you sure you want to approve this booking ${item.fullNames} ?`,
                            onYes: async () => {
                                if (!selectedDriver) {
                                    toast.error('Please select a driver');
                                    return;
                                }
                                const result = await approveBooking(
                                    item._id,
                                    selectedDriver
                                );
                                if (result.message) {
                                    toast.success(
                                        'Booking approved successfully'
                                    );
                                    await deleteBooking(item._id);
                                } else {
                                    toast.error('Something went wrong');
                                }
                            },
                        })
                    }
                    onReject={() =>
                        ConfirmationBox({
                            title: 'Booking Rejection',
                            message: `Are you sure you want to reject this booking ${item.fullNames} ?`,
                            onYes: async () => {
                                const result = await rejectBooking(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Booking Rejected successfully'
                                    );
                                    await deleteBooking(item._id);
                                } else {
                                    toast.error('Something went wrong');
                                }
                            },
                        })
                    }
                    disable={['view', 'edit', 'delete']}
                />
            ),
        },
    ];

    const { totalCount, pagedData } = getPagedData(
        currentPage,
        sortColumn,
        searchQuery,
        bookings
    );

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Taxi Bookings</h1>
                <PrintButton className='btn btn-secondary ml-auto' />
            </div>

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Open Bookings
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label='Booking'
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

const mapStateToProps = ({ bookingsState, driversState }) => ({
    bookings: bookingsState.bookings,
    drivers: driversState.drivers,
});

const mapDispatchToProps = {
    fetchBookings: bookingActions.getAll,
    deleteBooking: bookingActions.remove,
    fetchDrivers: driverActions.getAll,
    approveBooking: bookingActions.approve,
    rejectBooking: bookingActions.reject,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingSystem);
