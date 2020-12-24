import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/index'
import Home from './components/home/home'
import Details from './components/details/details'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Provider store={store}>
              <Route exact path='/'> <Home /> </Route>
              <Route path='/details'> <Details /> </Route>
            </Provider>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
