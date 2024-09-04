import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Heading from "./Heading";
import Navbar from "@/components/navbar/Navbar";
import TextColor from "./TextColor";

export default function TypographyMain() {
    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <Heading />
                                <TextColor/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
