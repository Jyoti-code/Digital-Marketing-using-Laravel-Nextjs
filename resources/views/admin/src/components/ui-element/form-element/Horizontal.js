import React from "react";

export default function Horizontal() {
    return (
        <>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Input size</h4>
                        <p className="card-description">
                            {" "}
                            Add classNamees like <code>
                                .form-control-lg
                            </code> and <code>.form-control-sm</code>.{" "}
                        </p>
                        <div className="form-group">
                            <label>Large input</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Username"
                                aria-label="Username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Default input</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Small input</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Username"
                                aria-label="Username"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Select size</h4>
                        <p className="card-description">
                            {" "}
                            Add classNamees like <code>
                                .form-select-lg
                            </code> and <code>.form-select-sm</code>.{" "}
                        </p>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">
                                Large select
                            </label>
                            <select
                                className="form-select form-select-lg"
                                id="exampleFormControlSelect1"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect2">
                                Default select
                            </label>
                            <select
                                className="form-select"
                                id="exampleFormControlSelect2"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect3">
                                Small select
                            </label>
                            <select
                                className="form-select form-select-sm"
                                id="exampleFormControlSelect3"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Basic input groups</h4>
                        <p className="card-description">
                            {" "}
                            Basic bootstrap input groups{" "}
                        </p>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-primary text-white">
                                        $
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">0.00</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button
                                        className="btn btn-outline-primary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                        <div
                                            
                                            className="dropdown-divider"
                                        ></div>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with dropdown button"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Find in facebook"
                                    aria-label="Recipient's username"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-facebook"
                                        type="button"
                                        style={{ height: "44px" }}
                                    >
                                        <i className="ti-facebook"></i>
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
                        <h4 className="card-title">Checkbox Controls</h4>
                        <p className="card-description">
                            Checkbox and radio controls (default appearance is
                            in primary color)
                        </p>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />{" "}
                                                Default{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Checked{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    disabled
                                                />{" "}
                                                Disabled{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    disabled
                                                    checked
                                                />{" "}
                                                Disabled checked{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="optionsRadios"
                                                    id="optionsRadios1"
                                                    value=""
                                                />{" "}
                                                Default{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="optionsRadios"
                                                    id="optionsRadios2"
                                                    value="option2"
                                                    checked
                                                />{" "}
                                                Selected{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="optionsRadios2"
                                                    id="optionsRadios3"
                                                    value="option3"
                                                    disabled
                                                />{" "}
                                                Disabled{" "}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="optionsRadio2"
                                                    id="optionsRadios4"
                                                    value="option4"
                                                    disabled
                                                    checked
                                                />{" "}
                                                Selected and disabled{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-body">
                        <p className="card-description">
                            Add className <code>.form-check-{"{color}"}</code> for
                            checkbox and radio controls in theme colors
                        </p>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Primary{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-success">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Success{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-info">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Info{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-danger">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Danger{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-warning">
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked
                                                />{" "}
                                                Warning{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="form-check form-check-primary">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="ExampleRadio1"
                                                    id="ExampleRadio1"
                                                    checked
                                                />{" "}
                                                Primary{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-success">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="ExampleRadio2"
                                                    id="ExampleRadio2"
                                                    checked
                                                />{" "}
                                                Success{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-info">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="ExampleRadio3"
                                                    id="ExampleRadio3"
                                                    checked
                                                />{" "}
                                                Info{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-danger">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="ExampleRadio4"
                                                    id="ExampleRadio4"
                                                    checked
                                                />{" "}
                                                Danger{" "}
                                            </label>
                                        </div>
                                        <div className="form-check form-check-warning">
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="ExampleRadio5"
                                                    id="ExampleRadio5"
                                                    checked
                                                />{" "}
                                                Warning{" "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Inline forms</h4>
                        <p className="card-description">
                            {" "}
                            Use the <code>.form-inline</code> className to display a
                            series of labels, form controls, and buttons on a
                            single horizontal row{" "}
                        </p>
                        <form className="form-inline">
                            <label className="sr-only" for="inlineFormInputName2">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="Jane Doe"
                            />
                            <label
                                className="sr-only"
                                for="inlineFormInputGroupUsername2"
                            >
                                Username
                            </label>
                            <div className="input-group mb-2 mr-sm-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inlineFormInputGroupUsername2"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-check mx-sm-2">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked
                                    />{" "}
                                    Remember me{" "}
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Horizontal Two column</h4>
                        <form className="form-sample">
                            <p className="card-description"> Personal info </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            First Name
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Last Name
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Gender
                                        </label>
                                        <div className="col-sm-9">
                                            <select className="form-select">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Date of Birth
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                className="form-control"
                                                placeholder="dd/mm/yyyy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Category
                                        </label>
                                        <div className="col-sm-9">
                                            <select className="form-select">
                                                <option>Category1</option>
                                                <option>Category2</option>
                                                <option>Category3</option>
                                                <option>Category4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Membership
                                        </label>
                                        <div className="col-sm-4">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input"
                                                        name="membershipRadios"
                                                        id="membershipRadios1"
                                                        value=""
                                                        checked
                                                    />{" "}
                                                    Free{" "}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input"
                                                        name="membershipRadios"
                                                        id="membershipRadios2"
                                                        value="option2"
                                                    />{" "}
                                                    Professional{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="card-description"> Address </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Address 1
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            State
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Address 2
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Postcode
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            City
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">
                                            Country
                                        </label>
                                        <div className="col-sm-9">
                                            <select className="form-select">
                                                <option>America</option>
                                                <option>Italy</option>
                                                <option>Russia</option>
                                                <option>Britain</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Select 2</h4>
                        <div className="form-group">
                            <label>Single select box using select 2</label>
                            <select className="js-example-basic-single w-100">
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                                <option value="AM">America</option>
                                <option value="CA">Canada</option>
                                <option value="RU">Russia</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Multiple select using select 2</label>
                            <select
                                className="js-example-basic-multiple w-100"
                                multiple="multiple"
                            >
                                <option value="AL">Alabama</option>
                                <option value="WY">Wyoming</option>
                                <option value="AM">America</option>
                                <option value="CA">Canada</option>
                                <option value="RU">Russia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Typeahead</h4>
                        <p className="card-description">
                            {" "}
                            A simple suggestion engine{" "}
                        </p>
                        <div className="form-group row">
                            <div className="col">
                                <label>Basic</label>
                                <div id="the-basics">
                                    <input
                                        className="typeahead"
                                        type="text"
                                        placeholder="States of USA"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <label>Bloodhound</label>
                                <div id="bloodhound">
                                    <input
                                        className="typeahead"
                                        type="text"
                                        placeholder="States of USA"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
