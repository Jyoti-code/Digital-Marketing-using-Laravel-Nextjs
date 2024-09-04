"use client";

import React, { useState } from "react";
import axios from "axios";
// import DescriptionEditor from "@/components/DescriptionEditor";

export default function Product() {
    const [formVisible, setFormVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        course: "",
        description: "",
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleDescriptionChange = (data) => {
    //     setFormData({ ...formData, description: data });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("course", formData.course);
        data.append("description", formData.description);
        data.append("image", image);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/productStore`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setFormData({
                course: "",
                description: "",
            });
            setImage(null);
            setSuccessMessage(response.data.message);
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage(
                    "An unknown error occurred while updating the category."
                );
            }
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
                        Create Product
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
                                            <label>Course</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="course"
                                                name="course"
                                                placeholder="Course"
                                                value={formData.course}
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
                                        {/* <DescriptionEditor
                                            value={formData.description}
                                            onChange={handleDescriptionChange}
                                        /> */}
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
