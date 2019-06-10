import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'
import ComicDetail from '../src/components/ComicDetail'
import Register from '../src/components/Register'
import Login from '../src/components/Login'
import MainLayout from '../src/components/layouts/MainLayout'

function Routes() {
  return <>
    <Route exact path="/" component={Home}/>
    <Route path="/comic/:id" component={ComicDetail}/>
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    </>
}

function App() {
  return <Router>
        <MainLayout>
          <Routes/>
        </MainLayout>
    </Router>
  
}
export default App;
