"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/productList`)
            .then((response) => {
                setList(response.data.list);
            })
            .catch((error) => {
                console.error("Error fetching product list:", error);
            });
    }, []);

    return (
        <>
            <div
                id="testimonial"
                className="service bg-honey big-padding bg-gray container-fluid px-4 py-5"
            >
                <div className="container-xl">
                    <div className="section-title row mb-3">
                        <h2 className="fw-bolder">Our Products</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris ipsum sit nibh amet egestas tellus.
                        </p>
                    </div>
                    <div className="row">
                        {list.map((item, index) => (
                            <div key={index} className="col-xl-3 col-md-6 mb-4">
                                <div className="bg-white shadow-md">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.image}`}
                                        alt={item.course}
                                        className="img-fluid"
                                    />
                                    <div className="p-3 text-center">
                                        <h4 className="fs-6 fw-bold">
                                            {item.course}
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
