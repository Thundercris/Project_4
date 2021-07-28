import React, { useState } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Register = () => {
  // const history = useHistory()
  const [formdata, setFormdata] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }, [])

  const notify = () => toast.success('Thank you for registering!', { autoClose: 3000 })

  const handleChange = (event) => {
    const newFormData = { ...formdata, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormdata(newFormData)
    setErrors(newErrors)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formdata)
      notify()

      // history.push('/login')
    } catch (err) {
      setErrors(err.response.data)
    }
  }


  return (
    <>
      <div>
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-3 mt-5">
            <form className="px-4 py-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Name</label>
                <input
                  onChange={handleChange}
                  type="first_name"
                  name="first_name"
                  className="form-control"
                  id="exampleDropdownFormEmail1.3"
                  placeholder="Jane"
                  value={formdata.first_name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Surname</label>
                <input
                  onChange={handleChange}
                  type="last_name"
                  name="last_name"
                  className="form-control"
                  id="exampleDropdownFormEmail1.4"
                  placeholder="Doe"
                  value={formdata.last_name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Username</label>
                <input
                  onChange={handleChange}
                  type="username"
                  name="username"
                  className="form-control"
                  id="exampleDropdownFormEmail1.2"
                  placeholder="jane.doe"
                  value={formdata.username} />
                {errors.username && <p className="text-danger">{errors.username.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control "
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                  value={formdata.email}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="********" value={formdata.password}
                />
                {errors.password && <p className="alert alert-danger" role="alert">{errors.password.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password Confirmation</label>
                <input onChange={handleChange} type="password" name="password_confirmation" className="form-control" id="exampleDropdownFormPassword1.1" placeholder="********" value={formdata.password_confirmation}
                />
                {errors.password_confirmation && <p className="alert alert-danger" role="alert">{errors.password_confirmation.message}</p>}
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-success btn-outline-success-change form-control">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register