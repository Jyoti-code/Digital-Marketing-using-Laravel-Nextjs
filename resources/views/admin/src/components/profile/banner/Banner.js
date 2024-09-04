"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Banner() {
    const [formVisible, setFormVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [background, setBackground] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        heading: "",
        description: "",
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleBackgroundChange = (e) => {
        setBackground(e.target.files[0]);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("heading", formData.heading);
        data.append("description", formData.description);
        data.append("image", image);
        data.append("background_img", background);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/banner`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setFormData({
                heading: "",
                description: "",
            });
            setImage(null);
            setBackground(null);
            setSuccessMessage(response.data.message);
        } catch (error) {
            setErrorMessage("Banner not added");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <button
                        onClick={() => setFormVisible(!formVisible)}
                        className="btn btn-primary py-2 px-4"
                    >
                        Create Banner
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
                                            <label>Heading</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="heading"
                                                name="heading"
                                                placeholder="Heading"
                                                value={formData.heading}
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
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                name="image"
                                                onChange={handleImageChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Background Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="background_img"
                                                name="background_img"
                                                onChange={
                                                    handleBackgroundChange
                                                }
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
