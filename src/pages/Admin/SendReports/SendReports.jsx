import { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Input, Select, Button } from '../../../components/UI';
import { airlineActions } from '../../../store/actions/airlines';

const SendReports = ({ airlines, fetchAirlines }) => {
    const [airlineName, setAirlineName] = useState('');
    const [airlineEmail, setAirlineEmail] = useState('');

    useEffect(() => {
        fetchAirlines();
    }, [fetchAirlines]);

    const onAirlineChange = (e) => {
        const selectedAirline =
            airlines &&
            airlines.find((airline) => airline.name === e.target.value);
        if (selectedAirline) {
            setAirlineName(selectedAirline.name);
            setAirlineEmail(selectedAirline.email);
        }
    };

    const fileInput = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected file - ${fileInput.current.files[0].name}`);
    };

    return (
        <>
            <div className='d-flex justify-content-between align-items-center title-secondary'>
                <h1 className='mb-0'>Send Reports</h1>
            </div>

            <div className='container'>
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
                            ref={fileInput}
                            accept='application/pdf'
                        />
                    </Col>
                </Row>

                <Button
                    label='Send'
                    icon='lnr lnr-location'
                    className='btn btn-primary text-white mt-3'
                    onClick={handleSubmit}
                />
            </div>
        </>
    );
};

const mapStateToProps = ({ airlinesState }) => ({
    airlines: airlinesState.airlines,
});

const mapDispatchToProps = {
    fetchAirlines: airlineActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendReports);
