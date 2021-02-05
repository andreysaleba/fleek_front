import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';

import './App.css';
import Login from './containers/login';
import APIKeys from './containers/apiKeys';
import { isUserAuthorized } from './redux/selectors/userDataSelectors';
import { checkJwtToken } from './redux/actions/userDataActions';

const App = () => {
  const isAuthorized = useSelector(isUserAuthorized);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkJwtToken());
  }, [dispatch]);

  if (!isAuthorized)
    return (
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    );

  return (
    <Switch>
      <Route exact path="/keys" component={APIKeys} />
    </Switch>
  );
};

export default App;
