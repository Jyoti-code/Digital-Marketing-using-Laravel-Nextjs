"use client";

import React, { useState } from "react";
import axios from "axios";
// import DescriptionEditor from "@/components/DescriptionEditor";

export default function Testimonial() {
    const [formVisible, setFormVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [navbars, setNavbars] = useState({
        name: "",
        profession: "",
        description: "",
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNavbars({ ...navbars, [name]: value });
    };
    // const handleDescriptionChange = (data) => {
    //     setNavbars({ ...formData, description: data });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", navbars.name);
        formData.append("profession", navbars.profession);
        formData.append("description", navbars.description);
        formData.append("image", image);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonialStore`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setNavbars({
                name: "",
                profession: "",
                description: "",
            });
            setImage(null);
            setSuccessMessage(response.data.message);
        } catch (error) {
            setErrorMessage("Testimonial not added");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <button
                        onClick={() => setFormVisible(!formVisible)}
                        className="btn btn-primary px-4 py-2"
                    >
                        Create Testimonial
                    </button>
                </div>
            </div>

            {formVisible && (
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="col-md-12">
                            {successMessage && (
                                <div
                                    className="alert alert-success mt-3 alert-dismissible fade show"
                                    
                                >
                                    {successMessage}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setSuccessMessage(null)}
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}
                            {errorMessage && (
                                <div
                                    className="alert alert-danger mt-3 alert-dismissible fade show"
                                    
                                >
                                    {errorMessage}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setErrorMessage(null)}
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}
                        </div>

                        <div className="card-body">
                            <form
                                className="forms-sample"
                                onSubmit={handleSubmit}
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                value={navbars.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Profession</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="profession"
                                                name="profession"
                                                placeholder="Profession"
                                                value={navbars.profession}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                placeholder="Description"
                                                value={navbars.description}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Icon</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                name="image"
                                                onChange={handleImageChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary me-2"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
