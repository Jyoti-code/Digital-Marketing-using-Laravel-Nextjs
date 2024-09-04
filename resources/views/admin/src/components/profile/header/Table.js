"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import deleteCategory from './HeaderDelete';

export default function Table({ onEditClick }) {
    const [categoryData, setCategoryData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryList`)
            .then(response => {
                const categories = response.data.list;
                const rows = categories.map((category, index) => ({
                    SN: index + 1,
                    'Category Name': category.cat_name,
                    Description: truncateText(category.descrption, 100), // Truncate the description
                    Icon: category.icon ? (
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${category.icon}`}
                            alt={category.cat_name}
                            style={{ height: '50px', width: '50px' }}
                        />
                    ) : 'No Icon',
                    Action: (
                        <div>
                            <button
                                className='btn btn-primary edit-btn'
                                onClick={() => onEditClick(category.id)}
                            >
                                <i className="mdi mdi-book-edit-outline"></i>
                            </button>
                            <button
                                className="btn btn-danger ml-2"
                                onClick={() => handleDelete(category.id)}
                            >
                                <i className="mdi mdi-delete-outline"></i>
                            </button>
                        </div>
                    )
                }));

                const columns = [
                    { label: 'Sr.No', field: 'SN', sort: 'asc', width: 50 },
                    { label: 'Category Name', field: 'Category Name', sort: 'asc', width: 150 },
                    { label: 'Description', field: 'Description', sort: 'asc', width: 250 },
                    { label: 'Icon', field: 'Icon', width: 100 },
                    { label: 'Action', field: 'Action', width: 100 }
                ];

                setCategoryData({ columns, rows });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
            setCategoryData(prevData => ({
                ...prevData,
                rows: prevData.rows.filter(item => item.id !== id)
            }));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card border-0 shadow-none">
                <div className="card-body">
                    <h4 className="card-title">Category table</h4>
                    <div className="table-responsive pt-3">
                        {categoryData && categoryData.rows && categoryData.rows.length > 0 ? (
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                noBottomColumns={true}
                                data={categoryData}
                            />
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
