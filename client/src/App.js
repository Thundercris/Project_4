import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import AboutUs from './components/common/AboutUs'




const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
