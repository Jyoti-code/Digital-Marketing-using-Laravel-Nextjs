import React from "react";

export default function TextColor() {
    return (
        <>
            <div className="col-md-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Text colors</h4>
                        <p className="card-description">
                            {" "}
                            Use className <code>.text-primary</code>,{" "}
                            <code>.text-secondary</code> etc. for text in theme
                            colors{" "}
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-primary">.text-primary</p>
                                <p className="text-success">.text-success</p>
                                <p className="text-danger">.text-danger</p>
                                <p className="text-warning">.text-warning</p>
                                <p className="text-info">.text-info</p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-light bg-dark pl-1">
                                    .text-light
                                </p>
                                <p className="text-secondary">.text-secondary</p>
                                <p className="text-dark">.text-dark</p>
                                <p className="text-muted">.text-muted</p>
                                <p className="text-white bg-dark pl-1">
                                    .text-white
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Top aligned media</h4>
                        <div className="media">
                            <i className="ti-world icon-md text-info d-flex align-self-start me-3"></i>
                            <div className="media-body">
                                <p className="card-text">
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Center aligned media</h4>
                        <div className="media">
                            <i className="ti-world icon-md text-info d-flex align-self-center me-3"></i>
                            <div className="media-body">
                                <p className="card-text">
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bottom aligned media</h4>
                        <div className="media">
                            <i className="ti-world icon-md text-info d-flex align-self-end me-3"></i>
                            <div className="media-body">
                                <p className="card-text">
                                    Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Highlighted Text</h4>
                        <p className="card-description">
                            {" "}
                            Wrap the text in <code>&lt;mark&gt;</code> to
                            highlight text{" "}
                        </p>
                        <p>
                            {" "}
                            It is a long{" "}
                            <mark className="bg-warning text-white">
                                established
                            </mark>{" "}
                            fact that a reader will be distracted by the
                            readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List Unordered</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bold text</h4>
                        <p className="card-description">
                            {" "}
                            Use className<code>.fw-bold</code>
                        </p>
                        <p>
                            {" "}
                            It is a long{" "}
                            <span className="fw-bold">established fact</span> that a
                            reader will be distracted by the readable content of
                            a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less
                            normal distribution{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List Ordered</h4>
                        <ol>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-primary">Underline</h4>
                        <p className="card-description">
                            {" "}
                            Wrap in <code>&lt;u&gt;</code> tag for underline{" "}
                        </p>
                        <p>
                            <u>
                                lorem ipsum dolor sit amet, consectetur mod
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                            </u>
                        </p>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-danger">Lowercase</h4>
                        <p className="card-description">
                            {" "}
                            Use className <code>.text-lowercase</code>
                        </p>
                        <p className="text-lowercase">
                            {" "}
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-warning">Uppercase</h4>
                        <p className="card-description">
                            {" "}
                            Use className <code>.text-uppercase</code>
                        </p>
                        <p className="text-uppercase">
                            {" "}
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Mute</h4>
                        <p className="card-description">
                            {" "}
                            Use className <code>.text-muted</code>
                        </p>
                        <p className="text-muted">
                            {" "}
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-success">Strike</h4>
                        <p className="card-description">
                            {" "}
                            Wrap content in <code>&lt;del&gt;</code> tag{" "}
                        </p>
                        <p>
                            <del>
                                {" "}
                                lorem ipsum dolor sit amet, consectetur mod
                                tempor incididunt ut labore et dolore magna
                                aliqua.{" "}
                            </del>
                        </p>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-info">Capitalized</h4>
                        <p className="card-description">
                            {" "}
                            Use className <code>.text-capitalize</code>
                        </p>
                        <p className="text-capitalize">
                            {" "}
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                            Add className <code>.list-ticked</code> to{" "}
                            <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-ticked">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                            Add className <code>.list-arrow</code> to{" "}
                            <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-arrow">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                            Add className <code>.list-star</code> to{" "}
                            <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-star">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>Nulla volutpat aliquam velit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
