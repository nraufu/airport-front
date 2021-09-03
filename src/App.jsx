import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Schedules from './pages/Schedules/Schedules';
import Services from './pages/Services/Services';
import Covid from './pages/Covid-19/Covid-19';
import Weather from './pages/Weather/Weather';
import SignIn from './pages/Admin/SignIn';

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
