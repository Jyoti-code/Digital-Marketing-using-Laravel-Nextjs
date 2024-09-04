"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Banner from './Banner';
import BannerEdit from './BannerEdit';
import BannerTable from './BannerTable';

export default function BannerMain() {
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleEditClick = (id) => {
        setIsEditing(true);
        setEditId(id);
    };

    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                {isEditing ? (
                                    <BannerEdit id={editId} setIsEditing={setIsEditing} />
                                ) : (
                                    <Banner />
                                )}
                                <BannerTable onEditClick={handleEditClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
