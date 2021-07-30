import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import AboutUs from './components/common/AboutUs'
import Profile from './components/common/Profile'
import NewPlace from './components/common/NewPlace'




const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/newplace' component={NewPlace} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
