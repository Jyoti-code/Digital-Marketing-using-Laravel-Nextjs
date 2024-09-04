"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
                email: email,
                password: password,
            });
            // console.log(response.data);

            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', response.data.name);
                localStorage.setItem('id', response.data.user.id);
                
                router.push('/dashboard');
            } else {
                console.error('Invalid response format');
                // setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error.response ? error.response : error.message);
            // setErrorMessage('Error logging in. Please try again later.');
        }
    };

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                    <div className="brand-logo">
                                        <img
                                            src="assets/images/logo.svg"
                                            alt="logo"
                                        />
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 className="fw-light">
                                        Sign in to continue.
                                    </h6>
                                    <form className="pt-3" onSubmit={handleLogin}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="exampleInputEmail1"
                                                placeholder="Username"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button
                                                type="submit"
                                                className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                                            >
                                                SIGN IN
                                            </button>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />{" "}
                                                    Keep me signed in{" "}
                                                </label>
                                            </div>
                                            <a
                                                href="#"
                                                className="auth-link text-black"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="mb-2 d-grid gap-2">
                                            <button
                                                type="button"
                                                className="btn btn-block btn-facebook auth-form-btn"
                                            >
                                                <i className="ti-facebook me-2"></i>
                                                Connect using facebook{" "}
                                            </button>
                                        </div>
                                        <div className="text-center mt-4 fw-light">
                                            {" "}
                                            Don't have an account?{" "}
                                            <a
                                                href="register.html"
                                                className="text-primary"
                                            >
                                                Create
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
