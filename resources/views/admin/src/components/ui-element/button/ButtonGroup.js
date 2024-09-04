import React from 'react'

export default function ButtonGroup() {
  return (
    <>
                      <div className="col-12 grid-margin">
                <div className="card">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Button groups</h4>
                        <p className="card-description">Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code></p>
                        <div className="template-demo">
                          <div className="btn-group"  aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">1</button>
                            <button type="button" className="btn btn-outline-secondary">2</button>
                            <button type="button" className="btn btn-outline-secondary">3</button>
                          </div>
                          <div className="btn-group"  aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-heart"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-calendar"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-clock"></i>
                            </button>
                          </div>
                        </div>
                        <div className="template-demo">
                          <div className="btn-group"  aria-label="Basic example">
                            <button type="button" className="btn btn-primary">1</button>
                            <button type="button" className="btn btn-primary">2</button>
                            <button type="button" className="btn btn-primary">3</button>
                          </div>
                          <div className="btn-group"  aria-label="Basic example">
                            <button type="button" className="btn btn-primary">
                              <i className="mdi mdi-heart"></i>
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="mdi mdi-calendar"></i>
                            </button>
                            <button type="button" className="btn btn-primary">
                              <i className="mdi mdi-clock"></i>
                            </button>
                          </div>
                        </div>
                        <div className="template-demo mt-4">
                          <div className="btn-group-vertical"  aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-upload"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-arrow-split-horizontal"></i>
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                              <i className="mdi mdi-download"></i>
                            </button>
                          </div>
                          <div className="btn-group-vertical"  aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">Default</button>
                            <div className="btn-group">
                              <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item">Go back</a>
                                <a className="dropdown-item">Delete</a>
                                <a className="dropdown-item">Swap</a>
                              </div>
                            </div>
                            <button type="button" className="btn btn-outline-secondary">Default</button>
                          </div>
                          <div className="btn-group-vertical"  aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary">Top</button>
                            <button type="button" className="btn btn-outline-secondary">Middle</button>
                            <button type="button" className="btn btn-outline-secondary">Bottom</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h4 className="card-title">Button with text and icon</h4>
                        <p className="card-description">Wrap icon and text inside <code>.btn-icon-text</code> and use <code>.btn-icon-prepend</code> or <code>.btn-icon-append</code> for icon tags </p>
                        <div className="template-demo">
                          <button type="button" className="btn btn-primary btn-icon-text">
                            <i className="mdi mdi-file btn-icon-prepend"></i> Submit </button>
                          <button type="button" className="btn btn-dark btn-icon-text"> Edit <i className="mdi mdi-file btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-success btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Warning </button>
                        </div>
                        <div className="template-demo">
                          <button type="button" className="btn btn-danger btn-icon-text">
                            <i className="mdi mdi-upload btn-icon-prepend"></i> Upload </button>
                          <button type="button" className="btn btn-info btn-icon-text"> Print <i className="mdi mdi-printer btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-warning btn-icon-text">
                            <i className="mdi mdi-reload btn-icon-prepend"></i> Reset </button>
                        </div>
                        <div className="template-demo mt-2">
                          <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="mdi mdi-file btn-icon-prepend"></i> Submit </button>
                          <button type="button" className="btn btn-outline-secondary btn-icon-text"> Edit <i className="mdi mdi-file btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-outline-success btn-icon-text">
                            <i className="mdi mdi-alert btn-icon-prepend"></i> Warning </button>
                        </div>
                        <div className="template-demo">
                          <button type="button" className="btn btn-outline-danger btn-icon-text">
                            <i className="mdi mdi-upload btn-icon-prepend"></i> Upload </button>
                          <button type="button" className="btn btn-outline-info btn-icon-text"> Print <i className="mdi mdi-printer btn-icon-append"></i>
                          </button>
                          <button type="button" className="btn btn-outline-warning btn-icon-text">
                            <i className="mdi mdi-reload btn-icon-prepend"></i> Reset </button>
                        </div>
                        <div className="template-demo mt-2">
                          <button className="btn btn-outline-dark btn-icon-text">
                            <i className="mdi mdi-apple btn-icon-prepend"></i>
                            <span className="d-inline-block text-left">
                              <small className="fw-light d-block">Available on the</small> App Store </span>
                          </button>
                          <button className="btn btn-outline-dark btn-icon-text">
                            <i className="mdi mdi-android btn-icon-prepend"></i>
                            <span className="d-inline-block text-left">
                              <small className="fw-light d-block">Get it on the</small> Google Play </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Social Icon Buttons</h4>
                    <p className="card-description">Add className <code>.btn-social-icon</code></p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-outline-facebook"><i className="mdi mdi-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-youtube"><i className="mdi mdi-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-twitter"><i className="mdi mdi-twitter"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-dribbble"><i className="mdi mdi-earth"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="mdi mdi-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-outline-google"><i className="mdi mdi-google"></i></button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-facebook"><i className="mdi mdi-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-youtube"><i className="mdi mdi-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-twitter"><i className="mdi mdi-twitter"></i></button>
                      <button type="button" className="btn btn-social-icon btn-dribbble"><i className="mdi mdi-earth"></i></button>
                      <button type="button" className="btn btn-social-icon btn-linkedin"><i className="mdi mdi-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-google"><i className="mdi mdi-google"></i></button>
                    </div>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i className="mdi mdi-facebook"></i></button>
                      <button type="button" className="btn btn-social-icon btn-youtube btn-rounded"><i className="mdi mdi-youtube"></i></button>
                      <button type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i className="mdi mdi-twitter"></i></button>
                      <button type="button" className="btn btn-social-icon btn-dribbble btn-rounded"><i className="mdi mdi-earth"></i></button>
                      <button type="button" className="btn btn-social-icon btn-linkedin btn-rounded"><i className="mdi mdi-linkedin"></i></button>
                      <button type="button" className="btn btn-social-icon btn-google btn-rounded"><i className="mdi mdi-google"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Social button with text</h4>
                    <p className="card-description">Add className <code>.btn-social-icon-text</code></p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-social-icon-text btn-facebook"><i className="mdi mdi-facebook"></i>Facebook</button>
                      <button type="button" className="btn btn-social-icon-text btn-youtube"><i className="mdi mdi-youtube"></i>Youtube</button>
                      <button type="button" className="btn btn-social-icon-text btn-twitter"><i className="mdi mdi-twitter"></i>Twitter</button>
                      <button type="button" className="btn btn-social-icon-text btn-dribbble"><i className="mdi mdi-earth"></i>Dribbble</button>
                      <button type="button" className="btn btn-social-icon-text btn-linkedin"><i className="mdi mdi-linkedin"></i>Linkedin</button>
                      <button type="button" className="btn btn-social-icon-text btn-google"><i className="mdi mdi-google"></i>Google</button>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
