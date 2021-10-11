import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
    Input,
    Select,
    Button,
    Table,
    SearchBox,
    ActionButtons,
    ConfirmationBox,
} from '../../../components/UI';
import { airlineActions } from '../../../store/actions/airlines';
import { reportActions } from '../../../store/actions/reports';
import Pagination from '../../../components/Pagination/Pagination';
import { getPagedData } from '../../../utils/paginate';

const SendReports = ({
    airlines,
    fetchAirlines,
    reports,
    fetchReports,
    createReport,
    deleteReport,
}) => {
    const [airlineName, setAirlineName] = useState('');
    const [airlineEmail, setAirlineEmail] = useState('');
    const [airlineLogo, setAirlineLogo] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [sortColumn, setSortColumn] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchAirlines();
        fetchReports();
    }, [fetchAirlines, fetchReports]);

    const onAirlineChange = (e) => {
        const selectedAirline =
            airlines &&
            airlines.find((airline) => airline.name === e.target.value);
        if (selectedAirline) {
            setAirlineName(selectedAirline.name);
            setAirlineEmail(selectedAirline.email);
            setAirlineLogo(selectedAirline.logoImgUri);
        }
    };

    const fileType = ['application/pdf'];
    const onPdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload = (e) => {
                    setPdfFile(e.target.result);
                };
            } else {
                setPdfFile(null);
                alert('Please select a valid pdf file');
            }
        } else {
            console.log('no file selected');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (airlineName && airlineEmail && pdfFile) {
            const result = await createReport({
                airlineLogo,
                airlineEmail,
                pdf: pdfFile,
            });

            if (result.report) {
                toast.success('report sent Successfully');

                console.log(result.report.pdf);

                setAirlineName('');
                setAirlineEmail('');
                setPdfFile(null);
            } else {
                toast.error('Error sending report');
            }
        } else {
            toast.error('Please fill all fields');
        }
    };

    const { totalCount, pagedData } = getPagedData(
        currentPage,
        sortColumn,
        searchQuery,
        reports
    );

    const columns = [
        {
            label: 'Airline',
            path: 'airlineLogo',
            noSort: true,
            content: (item) => (
                <img src={item.airlineLogo} alt='logo' className='logo-image' />
            ),
        },
        {
            label: 'Airline Email',
            path: 'airlineEmail',
            content: (item) => (
                <a href={`mailto:${item.airlineEmail}`}>{item.airlineEmail}</a>
            ),
        },
        {
            label: 'Sent On',
            path: 'createdAt',
            content: (item) => (
                <span>
                    {`${new Date(item.createdAt).toLocaleDateString()}`}
                    {' at '}
                    <strong style={{ fontWeight: 600 }}>{`${new Date(
                        item.createdAt
                    ).getHours()}:${new Date(
                        item.createdAt
                    ).getMinutes()}`}</strong>
                </span>
            ),
        },
        {
            label: 'Sent Report',
            path: 'pdf',
            noSort: true,
            content: (item) => (
                <a
                    href={item.pdf}
                    className='text-primary'
                    download='airline-report.pdf'
                >
                    Download
                </a>
            ),
        },
        {
            label: 'action',
            path: 'actionCol',
            noSort: true,
            content: (item) => (
                <ActionButtons
                    onDelete={() =>
                        ConfirmationBox({
                            title: 'Confirm deletion',
                            message: `Are you sure you want to delete this Report ?`,
                            onYes: async () => {
                                const result = await deleteReport(item._id);
                                if (result.message) {
                                    toast.success(
                                        'Report deleted successfully'
                                    );
                                } else {
                                    toast.error('Something went wrong');
                                }
                            },
                        })
                    }
                    disable={['view', 'edit']}
                />
            ),
        },
    ];

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Send Reports</h1>
            </div>

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
                    <Input
                        elementType='input'
                        name='email'
                        valueType='Email'
                        value={airlineEmail}
                        elementConfig={{
                            type: 'text',
                            placeholder: 'Airline Email',
                        }}
                        onChange={(e) => setAirlineEmail(e.target.value)}
                    />
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <Input
                        elementType='pdf'
                        name='pdf'
                        valueType='Upload PDF file'
                        accept='application/pdf'
                        onChange={onPdfFileChange}
                    />
                </Col>
            </Row>

            <Button
                label='Send'
                icon='lnr lnr-location'
                className='btn btn-primary text-white mt-3'
                onClick={handleSubmit}
            />

            <div className='d-flex justify-content-between align-items-center table-header-count no-print'>
                <p className='count'>
                    Showing <span className='text-primary'>{totalCount}</span>{' '}
                    Sent Reports
                </p>

                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    label=''
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

const mapStateToProps = ({ airlinesState, reportsState }) => ({
    airlines: airlinesState.airlines,
    reports: reportsState.reports,
});

const mapDispatchToProps = {
    fetchAirlines: airlineActions.getAll,
    fetchReports: reportActions.getAll,
    createReport: reportActions.create,
    deleteReport: reportActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendReports);
