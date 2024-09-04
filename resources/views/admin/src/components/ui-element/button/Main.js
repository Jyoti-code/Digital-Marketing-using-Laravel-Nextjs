import React from "react";
import ColorButton from "./ColorButton";
import OutlineButton from "./OutlineButton";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import IconButton from "./IconButton";
import ButtonGroup from "./ButtonGroup";

export default function Main() {
    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <ColorButton />
                                <OutlineButton />
                                <IconButton/>
                                <ButtonGroup/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
