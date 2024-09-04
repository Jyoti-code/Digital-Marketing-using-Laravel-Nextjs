import React from 'react'

export default function IconButton() {
  return (
    <>
                      <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="card-body">
                        <h4 className="card-title">Icon Buttons</h4>
                        <p className="card-description">Add className <code>.btn-icon</code> for buttons with only icons</p>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-primary btn-rounded btn-icon">
                            <i className="mdi mdi-home"></i>
                          </button>
                          <button type="button" className="btn btn-dark btn-rounded btn-icon">
                            <i className="mdi mdi-earth"></i>
                          </button>
                          <button type="button" className="btn btn-danger btn-rounded btn-icon">
                            <i className="mdi mdi-email"></i>
                          </button>
                          <button type="button" className="btn btn-info btn-rounded btn-icon">
                            <i className="mdi mdi-star"></i>
                          </button>
                          <button type="button" className="btn btn-success btn-rounded btn-icon">
                            <i className="mdi mdi-map-marker"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-inverse-primary btn-icon">
                            <i className="mdi mdi-home"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-dark btn-icon">
                            <i className="mdi mdi-earth"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-danger btn-icon">
                            <i className="mdi mdi-email"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-info btn-icon">
                            <i className="mdi mdi-star"></i>
                          </button>
                          <button type="button" className="btn btn-inverse-success btn-icon">
                            <i className="mdi mdi-map-marker"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-heart text-danger"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-music text-dark"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-star text-primary"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-chart-bar text-info"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-finance text-success"></i>
                          </button>
                        </div>
                        <div className="template-demo d-flex justify-content-between flex-nowrap">
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-heart"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-music"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-star"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-chart-bar"></i>
                          </button>
                          <button type="button" className="btn btn-outline-secondary btn-rounded btn-icon">
                            <i className="mdi mdi-finance"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body">
                        <h4 className="card-title">Button Size</h4>
                        <p className="card-description">Use className <code>.btn-{"{size}"}</code></p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-outline-secondary btn-lg">btn-lg</button>
                          <button type="button" className="btn btn-outline-secondary btn-md">btn-md</button>
                          <button type="button" className="btn btn-outline-secondary btn-sm">btn-sm</button>
                        </div>
                        <div className="template-demo mt-4">
                          <button type="button" className="btn btn-danger btn-lg">btn-lg</button>
                          <button type="button" className="btn btn-success btn-md">btn-md</button>
                          <button type="button" className="btn btn-primary btn-sm">btn-sm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Block buttons</h4>
                    <p className="card-description">Add className <code>d-grid gap-2</code> to parent div of button element</p>
                    <div className="template-demo d-grid gap-2">
                      <button type="button" className="btn btn-info btn-lg btn-block">Block buttons <i className="mdi mdi-menu float-end"></i>
                      </button>
                      <button type="button" className="btn btn-dark btn-lg btn-block">Block buttons</button>
                      <button type="button" className="btn btn-primary btn-lg btn-block">
                        <i className="mdi mdi-account"></i> Block buttons </button>
                      <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Block buttons</button>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
