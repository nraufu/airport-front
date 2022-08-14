import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { driverActions } from '../../../store/actions/drivers';
import { Input, Button, Select } from '../../../components/UI';
import Spinner from '../../../components/Spinner/Spinner';

function EditDriver({ driver, updateDriver }) {
    const [fullNames, setFullNames] = useState('');
    const [phone, setPhone] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [carType, setCarType] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if (driver) {
            setFullNames(driver.fullNames);
            setPhone(driver.phone);
            setPlateNumber(driver.plateNumber);
            setCarType(driver.carType);
            setEmail(driver.email);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [driver]);

    const saveDriver = async () => {
        setIsSubmitting(true);

        if (
            fullNames === '' ||
            plateNumber === '' ||
            carType === '' ||
            phone === '' ||
            email === ''
        ) {
            toast.error('Please fill all fields');
            setIsSubmitting(false);
            return;
        }

        const result = await updateDriver(driver._id, {
            fullNames,
            plateNumber,
            carType,
            phone,
            email,
        });

        if (result.status === 'Success') {
            toast.success('Driver updated successfully');
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
                    name='fullNames'
                    valueType='fullNames'
                    value={fullNames}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Full Names',
                    }}
                    onChange={(e) => setFullNames(e.target.value)}
                />
            </Col>

            <Col lg={6}>
                <Input
                    elementType='input'
                    name='plateNumber'
                    valueType='plateNumber'
                    value={plateNumber}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Plate Number',
                    }}
                    onChange={(e) => setPlateNumber(e.target.value)}
                />
            </Col>

            <Col lg={6}>
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
                <Input
                    elementType='input'
                    name='email'
                    valueType='Email'
                    value={email}
                    elementConfig={{
                        type: 'text',
                        placeholder: 'Email',
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Col>

            <Col lg={12}>
                <Button
                    label='Update'
                    className='btn btn-primary text-white mt-4'
                    onClick={saveDriver}
                    isLoading={isSubmitting}
                />
            </Col>
        </Row>
    );
}

const mapDispatchToProps = {
    updateDriver: driverActions.update,
};

export default connect(null, mapDispatchToProps)(EditDriver);
