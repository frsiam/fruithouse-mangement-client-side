import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading || gitLoading) {
        return <Loading />
    }

    if (error || gitError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {gitError?.message}</p>;
    }

    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <div className='mt-3'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 mt-1'></div>
                <p className='text-center text-xl mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 mt-1'></div>
            </div>
            <h1 className='my-2'>{errorElement}</h1>
            <div className='d-flex justify-around'>
                <div className='my-2'>
                    <button onClick={() => signInWithGoogle()} className="btn bg-slate-200 btn-outline-dark rounded-0 font-semibold w-full">Google
                    </button>
                </div>
                <div className='my-2'>
                    <button onClick={() => signInWithGithub()} className="btn btn-dark rounded-0">Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;