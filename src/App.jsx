import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Schedules from './pages/schedules/Schedules';
import Services from './pages/services/Services';
import Covid from './pages/covid-19/Covid-19';
import Weather from './pages/weather/Weather';
import SignIn from './pages/admin/SignIn';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/schedules' component={Schedules} />
                <Route path='/services' component={Services} />
                <Route path='/weather' component={Weather} />
                <Route path='/covid' component={Covid} />
                <Route path='/login' component={SignIn} />
                <Route exact path='/' component={Home} />
            </Switch>
        </Fragment>
    );
};

export default App;
