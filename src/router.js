import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Counter from './routes/counter';
import UserPage from './routes/userPage'
import Table from './routes/table'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={Counter} />
        <Route path='/userpage' exact component={UserPage} />
        <Route path='/table' exact component={Table} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
