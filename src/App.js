import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/storeConfig/configureStore'

import MainLayout from '../src/components/layouts/MainLayout'

import Home from './store/containers/Home'
import ComicDetail from './store/containers/ComicDetail'
import ShoppingCart from './components/ShoppingCart'
import Register from './components/Register'
import Login from './components/Login'

function Routes() {
  return <>
    <Route exact path="/" component={Home}/>
    <Route path="/comic/:id" component={ComicDetail}/>
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/cart" component={ShoppingCart} />
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
