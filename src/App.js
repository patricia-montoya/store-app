import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './views/Home'
import ComicDetail from '../src/components/ComicDetail'

function Routes() {
  return <>
    <Route exact path='/' component={Home}/>
    <Route path='/comic/:id' component={ComicDetail}/>
    </>
}

function App() {
  return <Router>
      <Routes/>
  </Router>
}
export default App;
