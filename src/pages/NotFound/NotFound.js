import React from 'react';
import notfound from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <div className='container text-center w-50 curve'>
            <img className='w-100' src={notfound} alt="" />
            <h1 className='text-3xl'>Oops ! Your page is not Found</h1>
        </div>
    );
};

export default NotFound;