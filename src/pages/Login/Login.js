import React from 'react';

const Login = () => {
    return (
        <div className='bg-black min-h-screen'>
            <div className='container mx-auto w-3/4 md:w-1/2 lg:w-2/6 p-5 bg-emerald-200'>
                <h1 className='text-2xl text-center my-3 font-semibold'>Login form</h1>
                <form className='my-5'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button className="btn btn-primary rounded-0 w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;