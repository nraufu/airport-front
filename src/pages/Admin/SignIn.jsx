import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateObject, checkValidity } from '../../shared/utility';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import logo from '../../assets/images/logo.png';
import { login } from '../../store/actions/login';
import { toast } from 'react-toastify';

const SignIn = ({ onLogin }) => {
    const [loginForm, setLoginForm] = useState({
        username: {
            elementType: 'input',
            elementConfig: { type: 'text', placeholder: 'Your Name' },
            value: '',
            valueType: 'Username',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        password: {
            elementType: 'input',
            elementConfig: { type: 'password', placeholder: 'Your Password' },
            value: '',
            valueType: 'Password',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
    });
    const [formIsValid, setFormIsValid] = useState();
    const [isLoading, setIsLoading] = useState();

    //cleanup states
    useEffect(() => {
        setFormIsValid(false);
        setIsLoading(false);
        return () => {
            setFormIsValid();
            setIsLoading();
        };
    }, []);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(loginForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                loginForm[inputIdentifier].validation
            ),
            touched: true,
        });
        const updatedLoginForm = updateObject(loginForm, {
            [inputIdentifier]: updatedFormElement,
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid =
                updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        setLoginForm(updatedLoginForm);
        setFormIsValid(formIsValid);
    };

    const formElementsArray = [];
    for (const key in loginForm) {
        formElementsArray.push({
            id: key,
            config: loginForm[key],
        });
    }

    const loginHandler = async () => {
        const { username, password } = loginForm;

        setIsLoading(true);

        const result = await onLogin({
            username: username.value,
            password: password.value,
        });

        if (result.message) {
            toast.success('Logged In Successfully');
            window.location.href = '/dashboard';
        } else {
            toast.error('Email or password is Incorrect');
        }

        setIsLoading(false);
    };

    let form = (
        <form onSubmit={loginHandler}>
            {formElementsArray.map((formElement) => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    valueType={formElement.config.valueType}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    onChange={(event) =>
                        inputChangedHandler(event, formElement.id)
                    }
                />
            ))}
            <Button
                clicked={loginHandler}
                disabled={!formIsValid}
                label='Submit'
                className='btn btn-primary text-white mt-4'
            />
        </form>
    );

    if (isLoading) {
        form = <Spinner />;
    }

    return (
        <div className='login-form'>
            <img src={logo} className='logo-img' alt='logo' />
            <div className='position-relative'>{form}</div>
        </div>
    );
};

const mapDispatchToProps = {
    onLogin: login,
};

export default connect(null, mapDispatchToProps)(SignIn);
