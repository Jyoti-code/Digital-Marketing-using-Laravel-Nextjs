"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductEdit({ id, setIsEditing }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        id: "",
        course: "",
        description: "",
        image: null,
    });

    useEffect(() => {
        const productDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/productEdit/${id}`
                );
                setFormData({
                    id: response.data.productEdit.id,
                    course: response.data.productEdit.course,
                    description: response.data.productEdit.description,
                    image: null,
                });

                if (response.data.productEdit.image) {
                    setImagePreview(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${response.data.productEdit.image}`
                    );
                }
            } catch (error) {
                setErrorMessage("Failed to fetch product details");
            }
        };

        if (id) {
            productDetails();
        }
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            setFormData({ ...formData, image: file });
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("id", formData.id);
        formDataToSend.append("course", formData.course);
        formDataToSend.append("description", formData.description);
        if (formData.image) {
            formDataToSend.append("image", formData.image);
        }
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/productUpdate`,
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setSuccessMessage(response.data.message);
            setIsEditing(false);
        } catch (error) {
            setErrorMessage("An error occurred while updating the category.");
        }
    };

    return (
        <>
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
                        <form className="forms-sample" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="hidden"
                                            className="form-control"
                                            id="id"
                                            name="id"
                                            value={formData.id}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Course</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="course"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
                                        />
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Category Icon Preview"
                                                style={{
                                                    height: "100px",
                                                    width: "100px",
                                                    marginTop: "10px",
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                            >
                                Update Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
