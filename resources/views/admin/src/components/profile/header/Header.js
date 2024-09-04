"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header() {
    const [formVisible, setFormVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [navbars, setNavbars] = useState({
        cat_name: "",
        descrption: "",
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNavbars({ ...navbars, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("cat_name", navbars.cat_name);
        formData.append("descrption", navbars.descrption);
        formData.append("icon", image);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/category`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setNavbars({
                cat_name: "",
                descrption: "",
            });
            setImage(null);
            setSuccessMessage(response.data.message);
            router.refresh();
        } catch (error) {
            setErrorMessage("Category not added");
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
                        Create Category
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
                                            <label>Category Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cat_name"
                                                name="cat_name"
                                                placeholder="Ex. About us"
                                                value={navbars.cat_name}
                                                onChange={handleInputChange}
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
                                                value={navbars.descrption}
                                                onChange={handleInputChange}
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
