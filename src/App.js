import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store/storeConfig/configureStore'

import MainLayout from '../src/components/Layouts/MainLayout'

import Home from './store/containers/Home'
import ComicDetail from './store/containers/ComicDetail'
import ShoppingCart from './components/Cart/ShoppingCart'
import SignUp from './store/containers/SignUp'
import Login from './components/Auth/Login'

function Routes() {
  return <>
    <Route exact path="/" component={Home}/>
    <Route path="/comic/:id" component={ComicDetail}/>
    <Route exact path="/signUp" component={SignUp} />
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
