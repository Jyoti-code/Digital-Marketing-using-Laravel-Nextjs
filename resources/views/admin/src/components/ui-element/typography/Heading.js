import React from 'react'

export default function Heading() {
  return (
    <>
                      <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Headings</h4>
                    <p className="card-description"> Add tags <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or className <code>.h1</code> to <code>.h6</code>
                    </p>
                    <div className="template-demo">
                      <h1>h1. Heading</h1>
                      <h2>h2. Heading</h2>
                      <h3>h3. Heading</h3>
                      <h4>h4. Heading</h4>
                      <h5>h5. Heading</h5>
                      <h6>h6. Heading</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Headings with secondary text</h4>
                    <p className="card-description"> Add faded secondary text to headings </p>
                    <div className="template-demo">
                      <h1> h1. Heading <small className="text-muted"> Secondary text </small>
                      </h1>
                      <h2> h2. Heading <small className="text-muted"> Secondary text </small>
                      </h2>
                      <h3> h3. Heading <small className="text-muted"> Secondary text </small>
                      </h3>
                      <h4> h4. Heading <small className="text-muted"> Secondary text </small>
                      </h4>
                      <h5> h5. Heading <small className="text-muted"> Secondary text </small>
                      </h5>
                      <h6> h6. Heading <small className="text-muted"> Secondary text </small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Display headings</h4>
                    <p className="card-description"> Add className <code>.display1</code> to <code>.display-4</code>
                    </p>
                    <div className="template-demo">
                      <h1 className="display-1">Display 1</h1>
                      <h1 className="display-2">Display 2</h1>
                      <h1 className="display-3">Display 3</h1>
                      <h1 className="display-4">Display 4</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch">
                <div className="row">
                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Paragraph</h4>
                        <p className="card-description"> Write text in <code>&lt;p&gt;</code> tag </p>
                        <p> Lorem Ipsum is simply dummy text of the printing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley not only five centuries, </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Icon size</h4>
                        <p className="card-description"> Add className <code>.icon-lg</code>, <code>.icon-md</code>, <code>.icon-sm</code>
                        </p>
                        <div className="row">
                          <div className="col-md-4 d-flex align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <i className="ti-package icon-lg text-warning"></i>
                              <p className="mb-0 ms-1"> Icon-lg </p>
                            </div>
                          </div>
                          <div className="col-md-4 d-flex align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <i className="ti-package icon-md text-success"></i>
                              <p className="mb-0 ms-1"> Icon-md </p>
                            </div>
                          </div>
                          <div className="col-md-4 d-flex align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <i className="ti-package icon-sm text-danger"></i>
                              <p className="mb-0 ms-1"> Icon-sm </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Blockquotes</h4>
                    <p className="card-description"> Wrap content inside<code>&lt;blockquote className="blockquote"&gt;</code>
                    </p>
                    <blockquote className="blockquote">
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </blockquote>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote blockquote-primary">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Address</h4>
                    <p className="card-description"> Use <code>&lt;address&gt;</code> tag </p>
                    <div className="row">
                      <div className="col-md-6">
                        <address>
                          <p className="fw-bold">Star Admin2 inc.</p>
                          <p> 695 lsom Ave, </p>
                          <p> Suite 00 </p>
                          <p> San Francisco, CA 94107 </p>
                        </address>
                      </div>
                      <div className="col-md-6">
                        <address className="text-primary">
                          <p className="fw-bold"> E-mail </p>
                          <p className="mb-2"> johndoe@examplemeail.com </p>
                          <p className="fw-bold"> Web Address </p>
                          <p> www.starAdminPro.com </p>
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Lead</h4>
                    <p className="card-description"> Use className <code>.lead</code>
                    </p>
                    <p className="lead"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
                  </div>
                </div>
              </div>
    </>
  )
}
