"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function About() {
  const [list, setList] = useState([]); 

  useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/aboutList`)
          .then(response => { 
              setList(response.data.list);
          })
          .catch(error => {
              console.error('Error fetching product list:', error);
          });
  }, []);
  
  return (
    <>
      <section className="about-us big-padding container-fluid">
        <div className="container-xl">
          <div className="section-title">
            <h2 className="ab-h2 mb-2">About Us</h2>
            <p>
              Thinking of selling or letting your property. You may just be
              interested to see how much your property
            </p>
          </div>
          {list.map((item, index) => (
          <div key={index} className="row">

            <div className="col-md-6 p-4">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.about_img}`}
                  alt={item.title}/>
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="fs-13 fw-bold">
                {item.title}
              </h2>
              <h4 className="text-danger my-4 fs-5 fw-bold">
                Duis irure dolor lipsum is simply free text available.
              </h4>

              <p className="fs-6 mb-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </section>
    </>
  );
}
