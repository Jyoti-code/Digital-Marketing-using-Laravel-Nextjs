"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import deleteBanner from './BannerDelete';

export default function BannerTable({ onEditClick }) {
    const [bannerData, setBannerData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bannerList`)
            .then(response => {
                const banners = response.data.list;
                const rows = banners.map((banner, index) => ({
                    SN: index + 1,
                    Heading: banner.heading,
                    Description: truncateText(banner.description, 100),
                    Image: banner.image ? (
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${banner.image}`} 
                            alt={banner.heading} 
                            style={{ height: '100px', width: '100px' }} 
                        />
                    ) : 'No Image',
                    Action: (
                        <div>
                            <button 
                                className='btn btn-primary edit-btn' 
                                onClick={() => onEditClick(banner.id)}
                            >
                                <i className="mdi mdi-book-edit-outline"></i>
                            </button>
                            <button 
                                className='btn btn-danger ml-2' 
                                onClick={() => handleDelete(banner.id)}
                            >
                                <i className="mdi mdi-delete-outline"></i>
                            </button>
                        </div>
                    )
                }));

                const columns = [
                    { label: 'Sr.No', field: 'SN', sort: 'asc', width: 50 },
                    { label: 'Heading', field: 'Heading', sort: 'asc', width: 150 },
                    { label: 'Description', field: 'Description', sort: 'asc', width: 250 },
                    { label: 'Image', field: 'Image', width: 100 },
                    { label: 'Action', field: 'Action', width: 100 }
                ];

                setBannerData({ columns, rows });
            })
            .catch(error => {
                console.error('Error fetching banners:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteBanner(id);
            setBannerData(prevData => ({
                ...prevData,
                rows: prevData.rows.filter(item => item.SN !== id)
            }));
        } catch (error) {
            console.error('Error deleting banner:', error);
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
                    <h4 className="card-title">Banner table</h4>
                    <div className="table-responsive pt-3">
                        {bannerData && bannerData.rows && bannerData.rows.length > 0 ? (
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                noBottomColumns={true}
                                data={bannerData}
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
