import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/Spinner/Spinner';
import Select from '../../../components/UI/Select/Select';
import { arrivalActions } from '../../../store/actions/arrivals';
import { airlineActions } from '../../../store/actions/airlines';

function EditArrival({ airlines, arrival, updateArrival, fetchAirlines }) {
    const [airlineLogo, setAirlineLogo] = useState('');
    const [airlineName, setAirlineName] = useState('');
    const [airlineWebsite, setAirlineWebsite] = useState('');
    const [flight, setFlight] = useState('');
    const [flightsList, setFlightsList] = useState([]);
    const [origin, setOrigin] = useState('');
    const [scheduled, setScheduled] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const findAirlineFlights = (airlineName) => {
        const selectedAirline = airlines.find(
            (airline) => airline.name === airlineName
        );
        return selectedAirline.flights;
    };

    useEffect(() => {
        fetchAirlines();
    }, [fetchAirlines]);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setAirlineLogo(arrival.airlineLogo);
            setAirlineName(arrival.airlineName);
            setAirlineWebsite(arrival.airlineWebsite);
            setFlight(arrival.flight);
            setFlightsList(findAirlineFlights(arrival.airlineName));
            setOrigin(arrival.origin);
            setScheduled(arrival.scheduled);
            setStatus(arrival.status);
            setIsLoading(false);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arrival]);

    const onAirlineChange = (e) => {
        const selectedAirline = airlines.find(
            (airline) => airline.name === e.target.value
        );
        setAirlineLogo(selectedAirline.logoImgUri);
        setAirlineName(selectedAirline.name);
        setFlightsList(selectedAirline.flights);
    };

    const saveArrival = async () => {
        setIsSubmitting(true);
        const result = await updateArrival(arrival._id, {
            airlineLogo,
            airlineName,
            airlineWebsite,
            flight,
            origin,
            scheduled,
            status,
        });

        if (result.status === 'Success') {
            toast.success('Arrival updated successfully');
        } else {
            toast.error('Something Went Wrong');
        }

        setIsSubmitting(false);
    };

    return isLoading ? (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner />
        </div>
    ) : (
        <Row>
            <Col xs={12} md={6}>
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

            <Col xs={12} md={6}>
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

            <Col xs={12} md={6}>
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

            <Col xs={12} md={6}>
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

            <Col xs={12} md={6}>
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

            <Col md={12}>
                <Button
                    label='Update'
                    className='btn btn-primary text-white mt-4'
                    onClick={saveArrival}
                    isLoading={isSubmitting}
                />
            </Col>
        </Row>
    );
}

const mapStateToProps = ({ airlinesState }) => ({
    airlines: airlinesState.airlines,
});

const mapDispatchToProps = {
    updateArrival: arrivalActions.update,
    fetchAirlines: airlineActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArrival);
