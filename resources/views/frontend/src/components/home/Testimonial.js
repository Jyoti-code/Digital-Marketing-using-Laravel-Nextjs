"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Testimonial() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonialList`)
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
                className="service bg-honey container-fluid px-4 py-5"
            >
                <div className="container">
                    <div className="section-title row mb-3">
                        <h2 className="fw-bolder">Testimonial</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris ipsum sit nibh amet egestas tellus.
                        </p>
                    </div>
                    <div className="row mt-5">
                        {list.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="serv-cove shadow-md rounded bg-white p-3">
                                    <div className="prf row mb-3">
                                        <div className="col-3">
                                            <img
                                                className="rounded-pill"
                                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.image}`}
                                                alt={item.profession}
                                            />
                                        </div>
                                        <div className="col-9 align-self-center">
                                            <h6 className="mb-0 fw-bolder">
                                                {item.name}
                                            </h6>
                                            <span>{item.profession}</span>
                                        </div>
                                    </div>

                                    <div className="det text-center">
                                        <p className="fs-7 fst-italic">
                                            {item.description}
                                        </p>
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
