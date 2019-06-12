import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/storeConfig/configureStore'

import MainLayout from '../src/components/layouts/MainLayout'

import Home from './containers/Home'
import ComicDetail from '../src/components/ComicDetail'
import Register from '../src/components/Register'
import Login from '../src/components/Login'

function Routes() {
  return <>
    <Route exact path="/" component={Home}/>
    <Route path="/comic/:id" component={ComicDetail}/>
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
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
