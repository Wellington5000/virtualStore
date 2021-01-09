import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/index'
import Home from './components/home/home'
import Details from './components/details/details'
import Register from './components/register/register'
import Login from './components/login/login'
import Search from './components/search/search'
import ConfirmSale from './components/sale/confirmSale'
import ListSales from './components/listSales/listSales'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Provider store={store}>
              <Route exact path='/'> <Home /> </Route>
              <Route path='/details'> <Details /> </Route>
              <Route path='/register'> <Register /> </Route>
              <Route path='/login'> <Login /> </Route>
              <Route path='/search'> <Search /> </Route>
              <Route path='/confirmSale'> <ConfirmSale /> </Route>
              <Route path='/listSales'> <ListSales/> </Route>
            </Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
