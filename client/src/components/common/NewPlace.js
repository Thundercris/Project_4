import axios from 'axios'
import React, { useState } from 'react'
import { getTokenFromLocalStorage } from './PlacesAuth'
import { useHistory } from 'react-router-dom'

const NewPlace = () => {
  
  const [formdata, setFormdata] = useState({
    name: '',
    address: '',
    phone_number: '',
    website: '',
    image: '',
    // is_pets_allowed: '',
    description: '',
    // category: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    phone_number: '',
    website: '',
    image: '',
    // is_pets_allowed: '',
    description: '',
    // category: '',
  }, [])

  const handleChange = (event) => {
    const newFormData = { ...formdata, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormdata(newFormData)
    setErrors(newErrors)
  }

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/places/', formdata,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/')
    } catch (err) {
      setErrors(err.response.data)
    }
  }

  return (
    <>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-3 mt-5">
            <form className="px-4 py-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Name</label>
                <input
                  onChange={handleChange}
                  type="name"
                  name="name"
                  className="form-control"
                  id="exampleDropdownFormEmail1.3"
                  placeholder="Name"
                  value={formdata.name}
                />
                {errors.description && <p className="text-danger">{errors.description.name}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Address</label>
                <input
                  onChange={handleChange}
                  type="address"
                  name="address"
                  className="form-control"
                  id="exampleDropdownFormEmail1.4"
                  placeholder="Address"
                  value={formdata.address}
                />
                {errors.description && <p className="text-danger">{errors.description.address}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Phone number</label>
                <input
                  onChange={handleChange}
                  type="phone_number"
                  name="phone_number"
                  className="form-control"
                  id="exampleDropdownFormEmail1.2"
                  placeholder="+440000000000"
                  value={formdata.phone_number}
                />
                {errors.description && <p className="text-danger">{errors.description.phone_number}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Website</label>
                <input
                  onChange={handleChange}
                  type="website"
                  name="website"
                  className="form-control "
                  id="exampleDropdownFormEmail1"
                  placeholder="www.website.com"
                  value={formdata.website}
                />
                {errors.description && <p className="text-danger">{errors.description.website}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Image</label>
                <input
                  onChange={handleChange}
                  type="text" 
                  name="image" 
                  className="form-control" 
                  id="exampleDropdownFormPassword1" 
                  placeholder="Paste here the image url" 
                  value={formdata.image}
                />
                {errors.description && <p className="text-danger">{errors.description.image}</p>}
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Pet Allowed</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected onChange={handleChange} value={formdata.is_pets_allowed}>Select one</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Unknow</option>
                </select>
              </div> */}
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Description</label>
                <input 
                  onChange={handleChange}
                  type="description" 
                  name="description" 
                  className="form-control" 
                  id="exampleDropdownFormPassword1.1" 
                  placeholder="Write here the description" 
                  value={formdata.description}
                />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Category</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected onChange={handleChange} value={formdata.category}>Select one</option>
                  <option value="1">Restaurant</option>
                  <option value="2">Pub</option>
                  <option value="3">Park</option>
                </select>
              </div> */}
              <button type="submit" className="btn btn-outline-success btn-outline-success-change form-control">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPlace