import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/storeConfig/configureStore'

import MainLayout from './store/containers/MainLayout'

import Home from './store/containers/Home'
import ComicDetail from './store/containers/ComicDetail'
import Auth from './store/containers/Auth'
import Logout from './store/containers/Logout'

function Routes() {
  return <>
    <Route exact path="/" component={Home}/>
    <Route path="/comic/:id" component={ComicDetail}/>
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/logout" component={Logout} />
    </>
}

const store = configureStore();

function App() {
  return   <Provider store={store}>
        <Router>
            <MainLayout>
              <Routes/>
            </MainLayout>
        </Router>
  </Provider>

}
export default App;
