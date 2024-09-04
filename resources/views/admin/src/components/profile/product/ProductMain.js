"use client"
import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Product from './Product';
import ProductEdit from './ProductEdit';
import ProductTable from './ProductTable';

export default function ProductMain() {
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
                                    <ProductEdit id={editId} setIsEditing={setIsEditing} />
                                ) : (
                                    <Product />
                                )}
                                <ProductTable onEditClick={handleEditClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
