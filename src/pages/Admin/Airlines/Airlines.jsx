import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../../components/Accordion/Accordion';
import AddableInput from '../../../components/UI/Input/AddableInput';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Table from '../../../components/UI/Table/Table';
import Select from '../../../components/UI/Select/Select';
import ActionButtons from '../../../components/UI/Table/ActionButtons';
import ConfirmationBox from '../../../components/UI/AlertBox/ConfirmationBox';
import { ViewAirlineModal, EditAirlineModal } from './modals';
import { airlineActions } from '../../../store/actions/airlines';
import { countriesList } from '../../../components/UI/countries';

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
            label: 'Flights',
            path: 'flights',
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

            <h6 className='title-tertiary my-5'>List</h6>

            <Table
                className='table-sm theme-light bordered'
                columns={columns}
                data={airlines}
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
