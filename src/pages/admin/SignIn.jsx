import { useState } from 'react';
import { updateObject, checkValidity } from '../../shared/utility';
import Spinner from './../../components/spinner/Spinner';
import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import logo from '../../assets/images/logo.png';

const SignIn = () => {
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
    const [formIsValid, setFormIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const loginHandler = (event) => {
        event.preventDefault();
        const { username, password } = loginForm;
        if (username.valid && password.valid) {
            setIsLoading(true);
            console.log(username.value, password.value);
            setTimeout(() => {
                setIsLoading(false);
            }, 5000);
        }
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

export default SignIn;
