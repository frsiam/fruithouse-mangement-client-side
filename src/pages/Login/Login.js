import { EyeIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
    }
    return (
        <div className=' bg-black min-h-screen'>
            <div className='container  mx-auto w-3/4 md:w-1/2 lg:w-2/6 p-5 bg-emerald-200'>
                <h1 className='text-2xl text-center mt-5 mb-3 font-semibold'>Login form</h1>
                <form className='my-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control text-xl" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmfor="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control position-relative" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmfor="exampleCheck1">Check me out</label>
                    </div>
                    <button className="btn btn-primary rounded-0 w-full">Submit</button>
                </form>
                <p>Not a Member ? <span onClick={() => navigate('/register')} className='text-primary cursor-pointer'>Register</span></p>
            </div>
        </div>
    );
};

export default Login;