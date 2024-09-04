"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HeaderEdit({ id, setIsEditing }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        id: "",
        cat_name: "",
        descrption: "",
        icon: null,
    });

    useEffect(() => {
        const categoryDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryEdit/${id}`
                );
                setFormData({
                    id: response.data.categoryEdit.id,
                    cat_name: response.data.categoryEdit.cat_name,
                    descrption: response.data.categoryEdit.descrption,
                    icon: null,
                });

                if (response.data.categoryEdit.icon) {
                    setImagePreview(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${response.data.categoryEdit.icon}`
                    );
                }
            } catch (error) {
                setErrorMessage("Failed to fetch category details");
            }
        };

        if (id) {
            categoryDetails();
        }
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "icon") {
            const file = e.target.files[0];
            setFormData({ ...formData, icon: file });
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
        formDataToSend.append("cat_name", formData.cat_name);
        formDataToSend.append("descrption", formData.descrption);
        if (formData.icon) {
            formDataToSend.append("icon", formData.icon);
        }

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryUpdate`,
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
                                        <label>Category Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cat_name"
                                            name="cat_name"
                                            placeholder="Ex. About us"
                                            value={formData.cat_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="descrption"
                                            name="descrption"
                                            placeholder="Description"
                                            value={formData.descrption}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Icon</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="icon"
                                            name="icon"
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
                                Update Category
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
