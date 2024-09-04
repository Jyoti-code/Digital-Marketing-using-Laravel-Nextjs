import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Table from './Table';

export default function TableMain() {
  return (
    <>
        <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                    <Table/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
