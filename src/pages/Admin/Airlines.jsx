import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionCard from '../../components/Accordion/Accordion';
import AddableInput from '../../components/UI/Input/AddableInput';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Table from '../../components/UI/Table/Table';
import ActionButtons from '../../components/UI/Table/ActionButtons';
import ConfirmationBox from '../../components/UI/AlertBox/ConfirmationBox';

const Airlines = () => {
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [country, setCountry] = useState('');
    const [flights, setFlights] = useState([]);

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
                                placeholder='Airline Name'
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
                                placeholder='Logo Url'
                                onChange={(e) => setLogo(e.target.value)}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Input
                                elementType='input'
                                name='country'
                                valueType='Country'
                                value={country}
                                elementConfig={{
                                    type: 'text',
                                    placeholder: 'Country',
                                }}
                                placeholder='Country'
                                onChange={(e) => setCountry(e.target.value)}
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
                    />
                </Container>
            </AccordionCard>

            <span className='d-block my-5' />

            <Table
                className='table-sm'
                columns={[
                    {
                        label: 'Airline',
                        path: 'logoUrl',
                        content: (item) => (
                            <img
                                src={item.logoUrl}
                                alt='logo'
                                className='logo-image'
                            />
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
                                onView={() => item}
                                onEdit={() => item}
                                onDelete={() =>
                                    ConfirmationBox({
                                        title: 'Confirm deletion',
                                        message: `Are you sure you want to delete ${item.name} ?`,
                                        onYes: () => item,
                                    })
                                }
                                disable={[]} //buttons to disable
                            />
                        ),
                    },
                ]}
                data={[
                    {
                        id: 1,
                        logoUrl:
                            'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                        name: 'Airline 1',
                        country: 'USA',
                        flights: ['Flight 1', 'Flight 2'],
                    },
                ]}
            />
        </>
    );
};

export default Airlines;
