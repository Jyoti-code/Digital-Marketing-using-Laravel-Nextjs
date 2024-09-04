"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Testimonial from './Testimonial';
import TestimonialEdit from './TestimonialEdit';
import TestimonialTable from './TestimonialTable';

export default function TestimonialMain() {
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
                                    <TestimonialEdit id={editId} setIsEditing={setIsEditing} />
                                ) : (
                                    <Testimonial />
                                )}
                                <TestimonialTable onEditClick={handleEditClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
