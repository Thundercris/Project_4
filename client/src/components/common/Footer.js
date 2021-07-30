import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {


  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <div className="d-flex justify-content-lg-start">
          <p className="mb-1">Get connected with us on social networks:</p>
          <div className="ml-5" id="sbtw">
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <p className="mb-0">New to Vibes? Visit the page to know more: <a href="/AboutUs">About us!</a></p>
        </div>
        <div className="text-center p-4" styles="background-color: rgba(0, 0, 0, 0.05);">
          <p>© {new Date().getFullYear()} Copyright:
            <a className="text-reset fw-bold" href="#"> VIBES-DevelopmentTeam</a></p>
        </div>
      </div>
    </footer>
  )
}
export default Footer