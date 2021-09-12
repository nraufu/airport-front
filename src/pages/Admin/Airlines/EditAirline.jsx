import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { airlineActions } from '../../../store/actions/airlines';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import AddableInput from '../../../components/UI/Input/AddableInput';
import Spinner from '../../../components/Spinner/Spinner';

function EditAirline({ airline, updateAirline }) {
    const [name, setName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [country, setCountry] = useState('');
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setName(airline.name);
            setLogoUrl(airline.logoImgUri);
            setCountry(airline.country);
            setFlights(airline.flights);
            setIsLoading(false);
        }, 1000);
    }, [airline]);

    const saveAirline = async () => {
        setIsSubmitting(true);
        const result = await updateAirline(airline._id, {
            name,
            logoImg: logoUrl,
            country,
            flights,
        });

        if (result.status === 'Success') {
            toast.success('Airline updated successfully');
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
            <Col lg={6}>
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

                <Input
                    elementType='input'
                    name='logoUrl'
                    valueType='Logo Url'
                    value={logoUrl}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Logo Url',
                    }}
                    onChange={(e) => setLogoUrl(e.target.value)}
                />

                <Input
                    elementType='country'
                    name='country'
                    valueType='Country'
                    value={country}
                    elementConfig={{
                        type: 'select',
                        placeholder: 'Country',
                    }}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </Col>

            <Col lg={6}>
                <AddableInput
                    label='Flights'
                    placeholder='Enter Airline flights'
                    value={flights}
                    onChange={setFlights}
                />
            </Col>

            <Col lg={4}>
                <Button
                    label='Update'
                    className='btn btn-primary text-white mt-4'
                    onClick={saveAirline}
                    isLoading={isSubmitting}
                />
            </Col>
        </Row>
    );
}

const mapDispatchToProps = {
    updateAirline: airlineActions.update,
};

export default connect(null, mapDispatchToProps)(EditAirline);
