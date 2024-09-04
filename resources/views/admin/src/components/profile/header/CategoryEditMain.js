import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import HeaderEdit from './HeaderEdit';

export default function CategoryEditMain() {
  return (
    <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                            <HeaderEdit/>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
