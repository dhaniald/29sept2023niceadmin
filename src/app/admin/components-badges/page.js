import React from 'react'

export default function page() {
  return (
    <> 
   <div>
  <main id="main" classname="main">
    <div classname="pagetitle">
      <h1>Badges</h1>
      <nav>
        <ol classname="breadcrumb">
          <li classname="breadcrumb-item"><a href="index.html">Home</a></li>
          <li classname="breadcrumb-item">Components</li>
          <li classname="breadcrumb-item active">Badges</li>
        </ol>
      </nav>
    </div>{'{'}/* End Page Title */{'}'}
    <section classname="section">
      <div classname="row">
        <div classname="col-lg-6">
          <div classname="card">
            <div classname="card-body">
              <h5 classname="card-title">Default Badges</h5>
              <span classname="badge bg-primary">Primary</span>
              <span classname="badge bg-secondary">Secondary</span>
              <span classname="badge bg-success">Success</span>
              <span classname="badge bg-danger">Danger</span>
              <span classname="badge bg-warning text-dark">Warning</span>
              <span classname="badge bg-info text-dark">Info</span>
              <span classname="badge bg-light text-dark">Light</span>
              <span classname="badge bg-dark">Dark</span>
            </div>
          </div>{'{'}/* End Default Badges */{'}'}
          <div classname="card">
            <div classname="card-body">
              <h5 classname="card-title">Pill Badges</h5>
              <span classname="badge rounded-pill bg-primary">Primary</span>
              <span classname="badge rounded-pill bg-secondary">Secondary</span>
              <span classname="badge rounded-pill bg-success">Success</span>
              <span classname="badge rounded-pill bg-danger">Danger</span>
              <span classname="badge rounded-pill bg-warning text-dark">Warning</span>
              <span classname="badge rounded-pill bg-info text-dark">Info</span>
              <span classname="badge rounded-pill bg-light text-dark">Light</span>
              <span classname="badge rounded-pill bg-dark">Dark</span>
            </div>
          </div>{'{'}/* End Pill Badges */{'}'}
          <div classname="card">
            <div classname="card-body">
              <h5 classname="card-title">Icon Badges</h5>
              <span classname="badge bg-primary"><i classname="bi bi-star me-1"> Primary</i></span><i classname="bi bi-star me-1">
                <span classname="badge bg-secondary"><i classname="bi bi-collection me-1"> Secondary</i></span><i classname="bi bi-collection me-1">
                  <span classname="badge bg-success"><i classname="bi bi-check-circle me-1"> Success</i></span><i classname="bi bi-check-circle me-1">
                    <span classname="badge bg-danger"><i classname="bi bi-exclamation-octagon me-1"> Danger</i></span><i classname="bi bi-exclamation-octagon me-1">
                      <span classname="badge bg-warning text-dark"><i classname="bi bi-exclamation-triangle me-1"> Warning</i></span><i classname="bi bi-exclamation-triangle me-1">
                        <span classname="badge bg-info text-dark"><i classname="bi bi-info-circle me-1"> Info</i></span><i classname="bi bi-info-circle me-1">
                          <span classname="badge bg-light text-dark"><i classname="bi bi-star me-1"> Light</i></span><i classname="bi bi-star me-1">
                            <span classname="badge bg-dark"><i classname="bi bi-folder me-1"> Dark</i></span><i classname="bi bi-folder me-1">
                            </i></i></i></i></i></i></i></i></div><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">
                      </i></i></i></i></i></i></div><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">{'{'}/* End Icon Badges */{'}'}
                    </i></i></i></i></i></i></div><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">
                    <div classname="col-lg-6">
                      <div classname="card">
                        <div classname="card-body">
                          <h5 classname="card-title">Border Badges</h5>
                          <span classname="badge border-primary border-1 text-primary">Primary</span>
                          <span classname="badge border-secondary border-1 text-secondary">Secondary</span>
                          <span classname="badge border-success border-1 text-success">Success</span>
                          <span classname="badge border-danger border-1 text-danger">Danger</span>
                          <span classname="badge border-warning border-1 text-warning">Warning</span>
                          <span classname="badge border-info border-1 text-info">Info</span>
                          <span classname="badge border-light border-1 text-black-50">Light</span>
                          <span classname="badge border-dark border-1 text-dark">Dark</span>
                        </div>
                      </div>{'{'}/* End Border Badges */{'}'}
                      <div classname="card">
                        <div classname="card-body">
                          <h5 classname="card-title">Button Badges</h5>
                          <button type="button" classname="btn btn-primary mb-2">
                            Primary <span classname="badge bg-white text-primary">4</span>
                          </button>
                          <button type="button" classname="btn btn-secondary mb-2">
                            Secondary <span classname="badge bg-white text-secondary">4</span>
                          </button>
                          <button type="button" classname="btn btn-success mb-2">
                            Success <span classname="badge bg-white text-success">4</span>
                          </button>
                          <button type="button" classname="btn btn-danger mb-2">
                            Danger <span classname="badge bg-white text-danger">4</span>
                          </button>
                          <button type="button" classname="btn btn-warning mb-2">
                            Warning <span classname="badge bg-white text-warning">4</span>
                          </button>
                          <button type="button" classname="btn btn-info mb-2">
                            Info <span classname="badge bg-white text-info">4</span>
                          </button>
                          <button type="button" classname="btn btn-light mb-2">
                            Light <span classname="badge bg-secondary text-light">4</span>
                          </button>
                          <button type="button" classname="btn btn-dark mb-2">
                            Dark <span classname="badge bg-white text-dark">4</span>
                          </button>
                        </div>
                      </div>{'{'}/* End Button Badges */{'}'}
                      <div classname="card">
                        <div classname="card-body">
                          <h5 classname="card-title">Heading Badges</h5>
                          <h1>Example h1 heading <span classname="badge bg-primary">Primary</span></h1>
                          <h2>Example h2 heading <span classname="badge bg-secondary">Secondary</span></h2>
                          <h3>Example h3 heading <span classname="badge bg-success">Success</span></h3>
                          <h4>Example h4 heading <span classname="badge bg-danger">Danger</span></h4>
                          <h5>Example h5 heading <span classname="badge bg-warning">Warning</span></h5>
                          <h6>Example h6 heading <span classname="badge bg-info">Info</span></h6>
                        </div>
                      </div>{'{'}/* End Heading Badges */{'}'}
                    </div>
                  </i></i></i></i></i></i></div><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">
                </i></i></i></i></i></i></section><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">
              </i></i></i></i></i></i></main><i classname="bi bi-check-circle me-1"><i classname="bi bi-exclamation-octagon me-1"><i classname="bi bi-exclamation-triangle me-1"><i classname="bi bi-info-circle me-1"><i classname="bi bi-star me-1"><i classname="bi bi-folder me-1">
            </i></i></i></i></i></i></div>

</>
  )
}
