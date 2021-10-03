import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { airlineActions } from '../../../store/actions/airlines';
import { Input, Button, AddableInput } from '../../../components/UI';
import { ContentBox } from '../../../components/Layouts';
import { Grid } from '../../../components/Grid';
import Spinner from '../../../components/Spinner/Spinner';

function EditAirline({ airline, updateAirline }) {
    const [name, setName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [headQuarterLocation, setHeadQuarterLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log(logoUrl);

    useEffect(() => {
        setIsLoading(true);

        if (airline) {
            setName(airline.name);
            setLogoUrl(airline.logoImgUri);
            setCountry(airline.country);
            setFlights(airline.flights);
            setHeadQuarterLocation(airline.headQuarterLocation);
            setPhone(airline.phone);
            setWebsite(airline.website);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [airline]);

    const saveAirline = async () => {
        setIsSubmitting(true);

        if (
            name === '' ||
            logoUrl === '' ||
            country === '' ||
            website === '' ||
            headQuarterLocation === '' ||
            phone === ''
        ) {
            toast.error('Please fill all fields');
            setIsSubmitting(false);
            return;
        }

        const result = await updateAirline(airline._id, {
            name,
            logoImg: logoUrl,
            country,
            flights,
            website,
            headQuarterLocation,
            phone,
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
            </Col>

            <Col lg={6}>
                <Input
                    elementType='image'
                    valueType='Logo image'
                    name='logo'
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => setLogoUrl(base64)}
                    value={logoUrl}
                />
            </Col>

            <Col lg={6}>
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
                <Input
                    elementType='input'
                    name='website'
                    valueType='Website'
                    value={website}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Website',
                    }}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </Col>

            <Col lg={6}>
                <Input
                    elementType='input'
                    name='headQuarterLocation'
                    valueType='Head Quarter Location'
                    value={headQuarterLocation}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Head Quarter Location',
                    }}
                    onChange={(e) => setHeadQuarterLocation(e.target.value)}
                />
            </Col>

            <Col lg={6}>
                <Input
                    elementType='input'
                    name='phone'
                    valueType='Phone'
                    value={phone}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Phone',
                    }}
                    onChange={(e) => setPhone(e.target.value)}
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

            <Grid.Col lg={6} className='mb-3'>
                <ContentBox title='Logo Image'>
                    <img src={logoUrl} className='img-fluid' alt='' />
                </ContentBox>
            </Grid.Col>

            <Col lg={12}>
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
