"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Services from './Services';
import ServicesEdit from './ServiceEdit';
import ServicesTable from './ServicesTable';

export default function ServicesMain() {
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
                                    <ServicesEdit id={editId} setIsEditing={setIsEditing} />
                                ) : (
                                    <Services />
                                )}
                                <ServicesTable onEditClick={handleEditClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
