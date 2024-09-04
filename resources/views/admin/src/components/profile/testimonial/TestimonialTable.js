import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import DOMPurify from 'dompurify';
import deleteTestimonial from './TestimonialDelete';

export default function TestimonialTable({ onEditClick }) {
    const [testimonialData, setTestimonialData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonialList`)
            .then(response => {
                const testimonialList = response.data.list;
                const rows = testimonialList.map((item, index) => ({
                    SN: index + 1,
                    Name: item.name,
                    Profession: item.profession,
                    Description: truncateText(DOMPurify.sanitize(item.description), 100),
                    Image: item.image ? (
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.image}`} 
                            alt={item.name} 
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
                    { label: 'Name', field: 'Name', sort: 'asc', width: 150 },
                    { label: 'Profession', field: 'Profession', sort: 'asc', width: 150 },
                    { label: 'Description', field: 'Description', sort: 'asc', width: 250 },
                    { label: 'Image', field: 'Image', width: 100 },
                    { label: 'Action', field: 'Action', width: 100 }
                ];

                setTestimonialData({ columns, rows });
            })
            .catch(error => {
                console.error('Error fetching testimonial list:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTestimonial(id);
            setTestimonialData(prevData => ({
                ...prevData,
                rows: prevData.rows.filter(item => item.SN !== id)
            }));
        } catch (error) {
            console.error('Error deleting testimonial:', error);
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
                    <h4 className="card-title">Testimonials Table</h4>
                    <div className="table-responsive pt-3">
                        {testimonialData && testimonialData.rows && testimonialData.rows.length > 0 ? (
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                noBottomColumns={true}
                                data={testimonialData}
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
