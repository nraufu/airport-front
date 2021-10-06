import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/Spinner/Spinner';
import Select from '../../../components/UI/Select/Select';
import { departureActions } from '../../../store/actions/departures';
import { airlineActions } from '../../../store/actions/airlines';

function EditDeparture({
    airlines,
    departure,
    updateDeparture,
    fetchAirlines,
}) {
    const [airlineLogo, setAirlineLogo] = useState('');
    const [airlineName, setAirlineName] = useState('');
    const [flight, setFlight] = useState('');
    const [flightsList, setFlightsList] = useState([]);
    const [destination, setDestination] = useState('');
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
            setAirlineLogo(departure.airlineLogo);
            setAirlineName(departure.airlineName);
            setFlight(departure.flight);
            setFlightsList(findAirlineFlights(departure.airlineName));
            setDestination(departure.destination);
            setScheduled(departure.scheduled);
            setStatus(departure.status);
            setIsLoading(false);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [departure]);

    const onAirlineChange = (e) => {
        const selectedAirline = airlines.find(
            (airline) => airline.name === e.target.value
        );
        setAirlineLogo(selectedAirline.logoImgUri);
        setAirlineName(selectedAirline.name);
        setFlightsList(selectedAirline.flights);
    };

    const saveDeparture = async () => {
        setIsSubmitting(true);
        const result = await updateDeparture(departure._id, {
            airlineLogo,
            airlineName,
            flight,
            destination,
            scheduled,
            status,
        });

        if (result.status === 'Success') {
            toast.success('Departure updated successfully');
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

            <Col lg={12}>
                <Button
                    label='Update'
                    className='btn btn-primary text-white mt-4'
                    onClick={saveDeparture}
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
    updateDeparture: departureActions.update,
    fetchAirlines: airlineActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeparture);
