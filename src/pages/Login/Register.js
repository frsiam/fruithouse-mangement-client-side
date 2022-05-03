import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-black min-h-screen'>
            <div className='container mx-auto w-3/4 md:w-1/2 lg:w-2/6 p-4 bg-emerald-200'>
                <h1 className='text-2xl text-center  mt-5 font-semibold'>Please Register</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmfor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmfor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmfor="exampleCheck1">Check me out</label>
                    </div>
                    <button className="btn btn-primary rounded-0 w-full">Submit</button>
                </form>
                <p>Already Member ? <span onClick={() => navigate('/login')} className='text-primary cursor-pointer'>Please Login</span></p>
            </div>
        </div>
    );
};

export default Register;