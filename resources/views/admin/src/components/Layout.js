"use client";

import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Tabs from './ui-element/home/Tabs';
import Chart from './ui-element/home/Chart';
import Overview from './ui-element/home/Overview';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="with-welcome-text">
      <div className="container-scroller">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="container-fluid page-body-wrapper">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <Tabs />
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active">
                        <Chart />
                        <Overview />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
