import React from 'react';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <div>
            <Helmet><title>Bisto Boss </title></Helmet>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex md:flex">
                        <div className="text-center lg:text-left">
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary text-2xl font-bold">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Login;