"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import DOMPurify from 'dompurify';
import deleteServices from './ServiceDelete';

export default function ServicesTable({ onEditClick }) {
    const [servicesData, setServicesData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/servicesList`)
            .then(response => {
                const servicesList = response.data.list;
                const rows = servicesList.map((item, index) => ({
                    SN: index + 1,
                    Title: item.title,
                    Description: truncateText(DOMPurify.sanitize(item.description), 100),
                    Image: item.icon_img ? (
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.icon_img}`} 
                            alt={item.title} 
                            style={{ height: '100px', width: '100px' }} 
                        />
                    ) : 'No Image',
                    Action: (
                        <div>
                            <button 
                                className='btn btn-primary edit-btn' 
                                onClick={() => onEditClick(item.id)}
                            >
                                <i className="mdi mdi-book-edit-outline"></i>
                            </button>
                            <button 
                                className='btn btn-danger ml-2' 
                                onClick={() => handleDelete(item.id)}
                            >
                                <i className="mdi mdi-delete-outline"></i>
                            </button>
                        </div>
                    )
                }));

                const columns = [
                    { label: 'Sr.No', field: 'SN', sort: 'asc', width: 50 },
                    { label: 'Title', field: 'Title', sort: 'asc', width: 150 },
                    { label: 'Description', field: 'Description', sort: 'asc', width: 250 },
                    { label: 'Image', field: 'Image', width: 100 },
                    { label: 'Action', field: 'Action', width: 100 }
                ];

                setServicesData({ columns, rows });
            })
            .catch(error => {
                console.error('Error fetching services list:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteServices(id);
            setServicesData(prevData => ({
                ...prevData,
                rows: prevData.rows.filter(item => item.SN !== id)
            }));
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

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
                    <h4 className="card-title">Services Table</h4>
                    <div className="table-responsive pt-3">
                        {servicesData && servicesData.rows && servicesData.rows.length > 0 ? (
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                noBottomColumns={true}
                                data={servicesData}
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
