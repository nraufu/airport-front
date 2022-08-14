import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import moment from 'moment';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/taxiBanner.webp';
import { Button } from '../../components/UI';
import { bookingActions } from '../../store/actions/bookings';

const TaxiBooking = ({ createBooking }) => {
    const [fullNames, setfullNames] = useState('');
    const [phone, setPhone] = useState('');
    const [carType, setCarType] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        console.log('data', {
            fullNames,
            phone,
            carType,
            email,
            date,
            time,
            pickupAddress,
        });

        if (
            fullNames === '' ||
            date === '' ||
            pickupAddress === '' ||
            phone === '' ||
            email === '' ||
            time === ''
        ) {
            toast.error('Please fill all the fields');
            setIsSubmitting(false);
            return;
        }

        if(carType === '') {
            toast.error('Please select car type');
            setIsSubmitting(false);
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            toast.error('Please enter a valid phone number');
            setIsSubmitting(false);
            return;
        }

        if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                email
            )
        ) {
            toast.error('Please enter a valid email');
            setIsSubmitting(false);
            return;
        }

        const result = await createBooking({
            fullNames,
            phone,
            carType,
            date,
            time,
            pickupAddress,
            email,
        });

        if (result.booking) {
            toast.success('Airline created successfully');
            setfullNames('');
            setPhone('');
            setCarType('');
            setDate('');
            setTime('');
            setPickupAddress('');
            setEmail('');

            setIsSubmitting(false);
            return;
        } else {
            toast.error('Something Went Wrong');
            setIsSubmitting(false);
        }
    };

    const onChangeDate = (e) => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setDate(newDate);
    };

    return (
        <>
            <Banner title='Book Taxi' bannerImg={bannerImg} />
            <section className='spacing-sm'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-lg-6 mx-auto'>
                            <div className='reservation-form'>
                                <h1 className='mb-5 text-center'>
                                    Taxi Reservation Form
                                </h1>

                                <div className='reservation-form__input'>
                                    <label for='names' className='form-label'>
                                        Full Names
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Full Names'
                                        id='fullNames'
                                        value={fullNames}
                                        onChange={(e) =>
                                            setfullNames(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label for='phone' className='form-label'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='phone'
                                        className='form-control'
                                        placeholder='Enter Phone Number'
                                        id='phone'
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label for='email' className='form-label'>
                                        Email
                                    </label>

                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='Enter Email'
                                        id='email'
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label
                                        for='pickupAddress'
                                        className='form-label'
                                    >
                                        Pickup Address
                                    </label>

                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Pickup Address'
                                        id='pickupAddress'
                                        value={pickupAddress}
                                        onChange={(e) =>
                                            setPickupAddress(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label for='date' className='form-label'>
                                        Date
                                    </label>
                                    <input
                                        type='date'
                                        className='form-control'
                                        placeholder='Enter Date'
                                        id='date'
                                        onChange={(e) => onChangeDate(e)}
                                        value={date}
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label for='time' className='form-label'>
                                        Time
                                    </label>
                                    <input
                                        type='time'
                                        className='form-control'
                                        placeholder='Enter Time'
                                        id='time'
                                        value={time}
                                        onChange={(e) =>
                                            setTime(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='reservation-form__input'>
                                    <label for='taxiSize' className='form-label'>
                                        Taxi Car Type
                                    </label>

                                    <select className='form-select' id='taxiSize' onChange={(e) => setCarType(e.target.value)}>
                                        <option selected>
                                            Select Taxi Type
                                        </option>
                                        <option value='normal'>Normal</option>
                                        <option value='Van'>Van</option>
                                        <option value='Bus'>Bus</option>
                                    </select>
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    isLoading={isSubmitting}
                                    label='Submit'
                                    className='btn btn-primary text-white mt-4'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapDispatchToProps = {
    createBooking: bookingActions.create,
};

export default connect(null, mapDispatchToProps)(TaxiBooking);
