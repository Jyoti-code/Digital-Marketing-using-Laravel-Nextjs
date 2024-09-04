"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [list, setList] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryList`)
      .then(response => {
        setList(response.data.list);
      })
      .catch(error => {
        console.error('Error fetching category list:', error);
      });
  }, []);

  return (
    <>
      <div className="bg-white">
        <header className="shadow-md">
          <div className="hed-top text-white d-none d-sm-block border-bottom">
            <div className="container-xl">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <ul className="text-white leftlist ld fs-8">
                    <li className="float-start">
                      <i className="bi bi-envelope"></i> info@moderndigital.com
                    </li>
                    <li className="float-start">
                      <i className="bi bi-telephone"></i> +12 34567890
                    </li>
                    <li className="float-start">
                      <i className="bi bi-geo-alt"></i> Kamaraj Nagar, Coimbatore, Tamilnadu
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul className="text-white pt-1 float-end">
                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-facebook"></i></li>
                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-twitter"></i></li>
                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-instagram"></i></li>
                    <li className="float-start fs-8 p-3 py-2"><i className="bi bi-linkedin"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="menu-jk" className="nav-part bg-white">
            <div className="container-xl">
              <div className="row bg-white navcol p-3">
                <div className="col-lg-4">
                  <img className="max-230" src="assets/images/logo.png" alt="Logo" />
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    className="float-end d-lg-none pt-1 ps-3"
                    onClick={toggleMenu}
                  >
                    <i className="bi pt-1 fs-1 cp bi-list"></i>
                  </a>
                </div>
                <div id="menu" className={`col-lg-8 ${isMenuOpen ? '' : 'd-none'} d-lg-block`}>
                  <ul className="fw-bold float-end nacul fs-7">
                    {list.map((item, index) => (
                      <li key={index} className="float-start p-3 px-4">
                        <Link 
                          href={`/${encodeURIComponent(item.cat_name.toLowerCase())}`} 
                          className='nav-style'
                        >
                          {item.cat_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
