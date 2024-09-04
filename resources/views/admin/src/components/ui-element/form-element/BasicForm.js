import React from "react";

export default function BasicForm() {
    return (
        <>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Default form</h4>
                        <p className="card-description"> Basic form layout </p>
                        <form className="forms-sample">
                            <div className="form-group">
                                <label for="exampleInputUsername1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername1"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputConfirmPassword1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputConfirmPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-check form-check-flat form-check-primary">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                    />{" "}
                                    Remember me{" "}
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Horizontal Form</h4>
                        <p className="card-description"> Horizontal form layout </p>
                        <form className="forms-sample">
                            <div className="form-group row">
                                <label
                                    for="exampleInputUsername2"
                                    className="col-sm-3 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputUsername2"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="exampleInputEmail2"
                                    className="col-sm-3 col-form-label"
                                >
                                    Email
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="exampleInputMobile"
                                    className="col-sm-3 col-form-label"
                                >
                                    Mobile
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputMobile"
                                        placeholder="Mobile number"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="exampleInputPassword2"
                                    className="col-sm-3 col-form-label"
                                >
                                    Password
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword2"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    for="exampleInputConfirmPassword2"
                                    className="col-sm-3 col-form-label"
                                >
                                    Re Password
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputConfirmPassword2"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="form-check form-check-flat form-check-primary">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                    />{" "}
                                    Remember me{" "}
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Material Form</h4>
                        <p className="card-description"> default layout </p>
                        <form className="forms-sample material-form">
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Username
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Email address
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Password
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Confirm Password
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <textarea required="required"></textarea>
                                <label for="textarea" className="control-label">
                                    Message
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" checked="checked" />
                                    <i className="helper"></i>Remember me{" "}
                                </label>
                            </div>
                            <div className="button-container">
                                <button
                                    type="button"
                                    className="button btn btn-primary"
                                >
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Material Form</h4>
                        <p className="card-description"> Bordered layout </p>
                        <form className="forms-sample material-form bordered">
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Username
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Email address
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Password
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" required="required" />
                                <label for="input" className="control-label">
                                    Confirm Password
                                </label>
                                <i className="bar"></i>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" checked="checked" />
                                    <i className="helper"></i>Remember me{" "}
                                </label>
                            </div>
                            <div className="button-container">
                                <button
                                    type="button"
                                    className="button btn btn-primary"
                                >
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Basic form elements</h4>
                        <p className="card-description"> Basic form elements </p>
                        <form className="forms-sample">
                            <div className="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName1"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail3">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail3"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword4">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword4"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleSelectGender">Gender</label>
                                <select
                                    className="form-select"
                                    id="exampleSelectGender"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>File upload</label>
                                <input
                                    type="file"
                                    name="img[]"
                                    className="file-upload-default"
                                />
                                <div className="input-group col-xs-12">
                                    <input
                                        type="text"
                                        className="form-control file-upload-info"
                                        disabled
                                        placeholder="Upload Image"
                                    />
                                    <span className="input-group-append">
                                        <button
                                            className="file-upload-browse btn btn-primary"
                                            type="button"
                                        >
                                            Upload
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputCity1">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputCity1"
                                    placeholder="Location"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleTextarea1">Textarea</label>
                                <textarea
                                    className="form-control"
                                    id="exampleTextarea1"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
