import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Fragment>
    );
};

export default App;
