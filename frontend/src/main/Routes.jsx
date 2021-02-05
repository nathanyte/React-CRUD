import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>