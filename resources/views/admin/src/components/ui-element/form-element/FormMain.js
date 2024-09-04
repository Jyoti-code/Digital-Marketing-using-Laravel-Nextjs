import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import BasicForm from "./BasicForm";
import Horizontal from "./Horizontal";

export default function FormMain() {
    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <BasicForm />
                                <Horizontal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
