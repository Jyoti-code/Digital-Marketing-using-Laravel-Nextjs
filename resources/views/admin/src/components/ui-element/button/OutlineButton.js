import React from "react";

export default function OutlineButton() {
    return (
        <>
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h4 className="card-title">Outlined buttons</h4>
                                <p className="card-description">
                                    Add className <code>.btn-outline-{"{color}"}</code>{" "}
                                    for outline buttons
                                </p>
                                <div className="template-demo">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-fw"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-fw"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success btn-fw"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-fw"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning btn-fw"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info btn-fw"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-light btn-fw"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-fw"
                                    >
                                        Dark
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-fw"
                                    >
                                        Link
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h4 className="card-title">Inverse buttons</h4>
                                <p className="card-description">
                                    Add className{" "}
                                    <code>
                                        .btn-inverse-{"{color}"} for inverse buttons
                                    </code>
                                </p>
                                <div className="template-demo">
                                    <button
                                        type="button"
                                        className="btn btn-inverse-primary btn-fw"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-secondary btn-fw"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-success btn-fw"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-danger btn-fw"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-warning btn-fw"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-info btn-fw"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-light btn-fw"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-inverse-dark btn-fw"
                                    >
                                        Dark
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-fw"
                                    >
                                        Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
