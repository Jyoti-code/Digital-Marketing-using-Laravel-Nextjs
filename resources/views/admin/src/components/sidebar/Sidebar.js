"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ isSidebarOpen}) {
  const [collapsedSections, setCollapsedSections] = useState({
    profile: false,
    banner: false,
    about: false,
    service: false,
    testimonial: false,
    product: false,
    uiBasic: false,
  });

  const toggleCollapse = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <nav id="sidebar" className={isSidebarOpen ? 'sidebar sidebar-offcanvas toggled' : 'sidebar sidebar-offcanvas'}>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" href="/dashboard">
            <i className="mdi mdi-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item nav-category">Topbar</li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('profile')}
            aria-expanded={collapsedSections.profile ? 'true' : 'false'}
            aria-controls="profile"
          >
            <i className="menu-icon mdi mdi-floor-plan"></i>
            <span className="menu-title">Header</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.profile ? 'show' : ''}`} id="profile">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/header">Header</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('banner')}
            aria-expanded={collapsedSections.banner ? 'true' : 'false'}
            aria-controls="banner"
          >
            <i className="menu-icon mdi mdi-post"></i>
            <span className="menu-title">Banner</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.banner ? 'show' : ''}`} id="banner">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/banner">Banner</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item nav-category">Middle Part</li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('about')}
            aria-expanded={collapsedSections.about ? 'true' : 'false'}
            aria-controls="about"
          >
            <i className="menu-icon mdi mdi-table"></i>
            <span className="menu-title">About</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.about ? 'show' : ''}`} id="about">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/about">About</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('service')}
            aria-expanded={collapsedSections.service ? 'true' : 'false'}
            aria-controls="service"
          >
            <i className="menu-icon mdi mdi-account-wrench-outline"></i>
            <span className="menu-title">Services</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.service ? 'show' : ''}`} id="service">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/services">Services</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('testimonial')}
            aria-expanded={collapsedSections.testimonial ? 'true' : 'false'}
            aria-controls="testimonial"
          >
            <i className="menu-icon mdi mdi-group"></i>
            <span className="menu-title">Testimonial</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.testimonial ? 'show' : ''}`} id="testimonial">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/testimonial">Testimonial</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('product')}
            aria-expanded={collapsedSections.product ? 'true' : 'false'}
            aria-controls="product"
          >
            <i className="menu-icon mdi mdi-cart-check"></i>
            <span className="menu-title">Product</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.product ? 'show' : ''}`} id="product">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/profile/product">Product</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item nav-category">UI Elements</li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => toggleCollapse('uiBasic')}
            aria-expanded={collapsedSections.uiBasic ? 'true' : 'false'}
            aria-controls="ui-basic"
          >
            <i className="menu-icon mdi mdi-floor-plan"></i>
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className={`collapse ${collapsedSections.uiBasic ? 'show' : ''}`} id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/ui-element/header">Header</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ui-element/button">Buttons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ui-element/dropdown">Dropdowns</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ui-element/typography">Typography</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/form-element">Basic Elements</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/chart">ChartJs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/table">Basic table</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
