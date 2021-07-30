import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../../helpers/auth'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const Nav = () => {

  const history = useHistory()
  // const notify = () => toast.success('You have been successfully logged out!', { autoClose: 3000 })

  const { pathname } = useLocation()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  useEffect(() => {
    userIsAuthenticated()
  }, [pathname])

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex" href="#">VIBES</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <div className="ul-boxend d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link boldtext">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link boldtext">ADD PLACE</Link>
              </li>
              {!userIsAuthenticated() ?
                <li className="nav-item">
                  <Link to="/login" className="nav-link boldtext">LOGIN</Link>
                </li>
                :
                <li className="nav-item" id="sbtwr">
                  <div className="dropdown">
                    <a className="btn btn-outline-success btn-outline-success-change dropdown-toggle"href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Me</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="/Profile">My Profile</a></li>
                      <li><a className="dropdown-item" href="/NewPlace">Add New Place</a></li>
                      <li><span onClick={handleLogout} className="dropdown-item" id="cursor">LOG OUT</span></li>
                    </ul>
                  </div>
                </li>
              }
              {/* <div>
                <ToastContainer />
              </div> */}
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success btn-outline-success-change" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Nav