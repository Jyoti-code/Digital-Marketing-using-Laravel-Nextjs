"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicesList`)
            .then((response) => {
                setList(response.data.list);
            })
            .catch((error) => {
                console.error("Error fetching product list:", error);
            });
    }, []);

    return (
        <>
            <div className="container-fluid products bg-gray big-padding pt-3">
                <div className="container-xl">
                    <div className="section-title row">
                        <h2 className="fs-1 fw-bold ab-h2">Our Services</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor ipsum dolor
                            sit amet, consectetuer adipiscing elit consectetuer
                            adipiscing elit. Aenean commodo.
                        </p>
                    </div>
                    <div className="row mt-5">
                        {list.map((item, index) => (
                            <div key={index} className="col-lg-4 mb-4 col-md-6">
                                <div className="cover text-center shadow-md p-5 bg-white">
                                    <img
                                        className="w-125"
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.icon_img}`}
                                        alt={item.title}
                                    />
                                    <h2 className="fs-5 fw-bolder mt-4 mb-3">
                                        {item.title}
                                    </h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
