import React, { Component } from 'react';

import ChatComponent from '../views/screens/chat/chat.component';
import Error404 from '../views/screens/404/Error404.error';
import { Route, Switch } from 'react-router-dom';

class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={ChatComponent} />
                <Route component={Error404} />
            </Switch>
        );
    }
}

export default MainRoutes;
