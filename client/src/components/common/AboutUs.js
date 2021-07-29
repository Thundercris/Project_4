import React from 'react'

const AboutUs = () => {

  return (
    <>
      <div className="profilecontainer mt-5">
        <div className="container marketing">
          <div className="row">
            <div className="col-md-4 mb-5 mt-5">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={'https://media-exp1.licdn.com/dms/image/C4D03AQFiyIEitSQtQQ/profile-displayphoto-shrink_800_800/0/1524929373768?e=1632960000&v=beta&t=wgdpG21vY2JFgiAyuQ0Cu59CQtvJsgZ96L6hv42dPMg'}></img>
              <h2 className="mb-1">Cristina Grande</h2>
              <p className="mb-2 fs-5">Junior full-stack developer</p>
              <p className="mb-2 fs-6">JavaScript | React | Node.js | Python | Django</p>
              <p><a className="btn btn-outline-success btn-outline-success-change" href="https://www.linkedin.com/in/cristinagrandeit/"  target="_blank" rel="noreferrer noopener">View details »</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs