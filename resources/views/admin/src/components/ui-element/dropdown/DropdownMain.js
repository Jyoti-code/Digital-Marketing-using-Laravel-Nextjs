import React from "react";
import DropdownMenu from "./DropdownMenu";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import DropdownButton from "./DropdownButton";

export default function DropdownMain() {
    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <DropdownMenu />
                                <DropdownButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
