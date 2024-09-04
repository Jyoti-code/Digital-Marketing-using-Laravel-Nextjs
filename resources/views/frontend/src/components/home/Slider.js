"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const Slider = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bannerList`)
            .then((response) => {
                setList(response.data.list);
            })
            .catch((error) => {
                console.error("Error fetching product list:", error);
            });
    }, []);

    return (
        <div className="bg-white">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
            >
                {list.map((item, index) => (
                    <div key={index}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.background_img}`}
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="carousel-caption d-md-block">
                            <div className="row">
                                <div className="col-lg-6 align-self-center text-start animate__animated animate__backInUp">
                                    <h1 className="fs-12 fw-bolder text-start">
                                        {item.heading}
                                    </h1>
                                    <p className="text-dark d-none d-md-block text-start">
                                        {item.description}
                                    </p>
                                    {/* <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                                        <button className="btn btn-danger shadow fs-5 fw-bolder px-5 py-2">
                                            Buy Now
                                        </button>
                                        <button className="btn btn-outline-danger ms-4 shadow fs-5 fw-bolder px-5 py-2">
                                            Buy Now
                                        </button>
                                    </div> */}
                                </div>
                                <div className="col-lg-6 animate__animated animate__backInDown align-self-center d-none d-lg-block">
                                    <img
                                        className="w-100"
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.image}`}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
