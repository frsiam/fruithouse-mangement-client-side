import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import login from '../../images/login.png';
import loginbg from '../../images/loginbg.png';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/blogs')
    }
    return (
        <div className='min-h-screen' style={{ backgroundImage: `url(${loginbg})` }}>
            <div className='container  mx-auto w-3/4 md:w-1/2 lg:w-2/6 py-5 px-4 md:p-5 bg-emerald-200'>
                <div className='text-center mx-auto'>
                    <img className='img-fluid rounded-circle mx-auto w-3/5 md:w-2/6' src={login} alt="" />
                    <h1 className='text-2xl font-semibold'>Login form</h1>
                </div>
                <form className='mt-5 mb-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmfor="exampleCheck1">Remember me</label>
                    </div>
                    <button className="btn bg-rose-600 font-semibold text-xl text-white rounded-0 w-full">Login</button>
                </form>
                <p>Not a Member ? <span onClick={() => navigate('/register')} className='text-primary cursor-pointer font-semibold'>Register</span></p>
            </div>
        </div>
    );
};

export default Login;