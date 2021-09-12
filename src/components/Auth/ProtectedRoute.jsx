import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAdmin } from '../../utils/authentication';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!getAdmin())
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    );
                return Component ? <Component {...props} /> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;
