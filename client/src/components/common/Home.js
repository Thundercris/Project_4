import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'react-router-dom'

const Home = () => {
  const [count] = useState(0) 
  
  const [myData, setMyData] = useState(null)
  
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async ()  => {
      try {
        const { data } = await axios.get('api/places/')
        setMyData(data)
        console.log(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  },[count])
  // console.log(myData[0])


  return (
    <>
      {myData ?
        <>
          <div className="width: 100%">
            <div className="row align-items-center" id="containercarousel">
              <div className="col-sm-12 col-md-6">
                <div className="container-fluid">
                  <h1 className="align-items-center text-center blockquote mb-0">DISCOVER YOUR NEW FAVOURITE PLACE!</h1>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="container" id="containercarouselright">
                  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="10000">
                        <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/v1627476595/project%204/Home%20-carousel/image-from-rawpixel-id-2521482-original_mgmfcd.jpg'} className=" d-block w-100" alt="stories"/>
                        <div className="carousel-caption d-none d-md-block" id="corousetext">
                          <h5>Explore!</h5>
                          <p>Find a new place or add a new one to share with the community!</p>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/c_scale,w_1200/v1627467529/project%204/Home%20-carousel/image-from-rawpixel-id-437390-jpeg_jlpdja.jpg'} className=" d-block w-100" alt="stories"/>
                        <div className="carousel-caption d-none d-md-block" id="corousetext">
                          <h5>Enjoy your time out!</h5>
                          <p>With Friends!</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/c_scale,w_1200/v1627467492/project%204/Home%20-carousel/image-from-rawpixel-id-400551-jpeg_je1ox3.jpg'} className=" d-block w-100" alt="stories"/>
                        <div className="carousel-caption d-none d-md-block" id="corousetext">
                          <h5>Smile!</h5>
                          <p>The best is coming!</p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className="album py-5 bg-light">
            <div className="container">
              {/* DISPLAY ALL DATA BELOW */}
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {myData.map((item) => {
                  return ( 
                    <>
                      <div className="col">
                        <div className="card shadow-sm">
                          <img src={item.image} className="card-img-top figure-img" alt={item.name} />
                          <div className="card-body">
                            <p className="card-text fw-bolder">{item.name}</p>
                            <p className="card-text" id="pna">{item.address}</p>
                            <p className="card-text" id="pna">Phone number: {item.phone_number}</p>
                            <p className="card-text">{item.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <a className="btn btn-outline-success btn-outline-success-change" href={item.website} target="_blank" rel="noreferrer noopener">View</a>
                                <button type="button" className="btn btn-outline-success btn-outline-success-change" id="sbtw">Comment</button>
                              </div>
                              {/* <small className="text-muted">{item.category[0].name}</small> */}
                              {/* <small className="text-muted">{item.is_pet_allowed}</small> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
                )}
              </div>
            </div>
          </div> 
          {/* </div>
          </div> */}
        </>
        :
        <section>
          <h1>{hasError ? 'Something has gone wrong' : 'Loading...'}</h1>
        </section>
      }
    </>
  )
}
export default Home