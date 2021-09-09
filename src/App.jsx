import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Schedules from './pages/Schedules/Schedules';
import Services from './pages/Services/Services';
import Covid from './pages/Covid-19/Covid-19';
import Weather from './pages/Weather/Weather';
import SignIn from './pages/Admin/SignIn';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { getToken } from './utils/authentication';

const App = () => {
    const [token, setToken] = useState();

    useEffect(() => {
        const token = getToken();
        setToken(token);
    }, []);

    return (
        <>
            <ToastContainer bodyClassName='toastBody' />
            <Header isAuthenticated={token} />
            <Switch>
                <Route path='/schedules' component={Schedules} />
                <Route path='/services' component={Services} />
                <Route path='/weather' component={Weather} />
                <Route path='/covid' component={Covid} />
                <Route path='/login' component={SignIn} />
                <ProtectedRoute path='/dashboard' component={Dashboard} />
                <Route exact path='/' component={Home} />
            </Switch>
        </>
    );
};

export default App;
