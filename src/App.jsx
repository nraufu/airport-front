import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Schedules from './pages/schedules/Schedules';
import Footer from './parts/Footer/Footer';
import Services from './pages/services/Services';
import Covid from './pages/covid-19/Covid-19';
import Weather from './pages/weather/Weather';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/schedules' component={Schedules} />
                <Route path='/services' component={Services} />
                <Route path='/weather' component={Weather} />
                <Route path='/covid' component={Covid} />
            </Switch>
            <Footer />
        </Fragment>
    );
};

export default App;
