"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({  toggleSidebar }) {
  const [dropdowns, setDropdowns] = useState({
    messageDropdown: false,
    notificationDropdown: false,
    countDropdown: false,
    userDropdown: false,
  });
  const router = useRouter();

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    router.push('/');
  };

  return (
    <>
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={toggleSidebar}>
              <span className="icon-menu"></span>
            </button>
          </div>
          <div>
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="/assets/images/logo.svg" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="/assets/images/logo-mini.svg" alt="logo" />
            </a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav">
            <li className="nav-item fw-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">
                Good Morning, <span className="text-black fw-bold">John Doe</span>
              </h1>
              <h3 className="welcome-sub-text">Your performance summary this week</h3>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown d-none d-lg-block">
              <a
                className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                id="messageDropdown"
                href="#"
                onClick={() => toggleDropdown('messageDropdown')}
                aria-expanded={dropdowns.messageDropdown ? 'true' : 'false'}
              >
                Select Category
              </a>
              {dropdowns.messageDropdown && (
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0 show" aria-labelledby="messageDropdown">
                  {/* Dropdown items here */}
                </div>
              )}
            </li>

            {/* Other nav items here */}

            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a
                className="nav-link"
                id="UserDropdown"
                href="#"
                onClick={() => toggleDropdown('userDropdown')}
                aria-expanded={dropdowns.userDropdown ? 'true' : 'false'}
              >
                <img className="img-xs rounded-circle" src="/assets/images/faces/face8.jpg" alt="Profile image" />
              </a>
              {dropdowns.userDropdown && (
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown show" aria-labelledby="UserDropdown">
                  <div className="dropdown-header text-center">
                    <img className="img-md rounded-circle" src="/assets/images/faces/face8.jpg" alt="Profile image" />
                    <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
                    <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                  </div>
                  <a className="dropdown-item">
                    <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile
                    <span className="badge badge-pill badge-danger">1</span>
                  </a>
                  <a className="dropdown-item">
                    <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity
                  </a>
                  <a className="dropdown-item" onClick={handleLogout}>
                    <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out
                  </a>
                </div>
              )}
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleSidebar}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
