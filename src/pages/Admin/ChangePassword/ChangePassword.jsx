import { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Input, Button } from '../../../components/UI';
import { passwordActions } from '../../../store/actions/passwords';

const ChangePassword = ({ updatePassword }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            oldPassword === '' ||
            newPassword === '' ||
            confirmPassword === ''
        ) {
            toast.error('Please fill all the fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("new passwords doesn't match");
            return;
        }

        if (newPassword === oldPassword) {
            toast.error('new password cannot be same as old password');
            return;
        }

        const result = await updatePassword({ oldPassword, newPassword });

        if (result.status === 'success') {
            toast.success(result.data.message);
        } else {
            toast.error('Wrong old password');
        }
    };

    return (
        <>
            <div className='container'>
                <Row>
                    <Col md={12}>
                        <Input
                            elementType='input'
                            name='oldpassword'
                            valueType='Old Password'
                            value={oldPassword}
                            elementConfig={{
                                type: 'password',
                                placeholder: 'Old Password',
                            }}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </Col>

                    <Col md={12}>
                        <Input
                            elementType='input'
                            name='newpassword'
                            valueType='New Password'
                            value={newPassword}
                            elementConfig={{
                                type: 'password',
                                placeholder: 'New Password',
                            }}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Col>

                    <Col md={12}>
                        <Input
                            elementType='input'
                            name='confirmpassword'
                            valueType='Confirm New Password'
                            value={confirmPassword}
                            elementConfig={{
                                type: 'password',
                                placeholder: 'Confirm Password',
                            }}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Col>
                </Row>

                <Button
                    label='Submit'
                    className='btn btn-primary text-white mt-4'
                    onClick={handleSubmit}
                />
            </div>
        </>
    );
};

const mapStateToProps = ({ passwordState }) => ({
    message: passwordState.message,
});

const mapDispatchToProps = {
    updatePassword: passwordActions.update,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
