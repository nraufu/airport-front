import { useEffect, useState } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Schedules from './pages/Schedules/Schedules';
import Services from './pages/Services/Services';
import Covid from './pages/Covid-19/Covid-19';
import Weather from './pages/Weather/Weather';
import SignIn from './pages/Admin/SignIn';
import Dashboard from './pages/Admin/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { getAdmin } from './utils/authentication';
import Loading from './components/Loading/Loading';
import NotFound from './pages/NotFound/NotFound';
import News from './pages/News/News';
import ViewNews from './pages/News/ViewNews';

const App = ({ location }) => {
    const [admin, setAdmin] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 300, exit: 200 };

    useEffect(() => {
        const admin = getAdmin();
        setAdmin(admin);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    let App = (
        <>
            <ToastContainer bodyClassName='toastBody' />
            <Header isAuthenticated={admin} />

            <TransitionGroup component='main' className='page-main'>
                <CSSTransition
                    key={currentKey}
                    timeout={timeout}
                    classNames='fade'
                    appear
                >
                    <Switch location={location}>
                        <Route path='/schedules' component={Schedules} />
                        <Route path='/services' component={Services} />
                        <Route path='/weather' component={Weather} />
                        <Route path='/covid' component={Covid} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/news/:id' component={ViewNews} />
                        <Route path='/login' component={SignIn} />
                        <Route path='/not-found' component={NotFound} />
                        <ProtectedRoute
                            path='/dashboard'
                            component={Dashboard}
                        />
                        <Route exact path='/' component={Home} />
                        <Redirect to='/not-found' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    );

    if (isLoading) {
        App = <Loading />;
    }

    return App;
};

export default withRouter(App);
