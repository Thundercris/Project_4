import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


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
              <li className="nav-item">
                <Link to="/login" className="nav-link boldtext">LOGIN</Link>
              </li>
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