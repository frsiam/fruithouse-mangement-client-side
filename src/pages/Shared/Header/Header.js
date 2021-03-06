import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid py-2 mx-md-3">
                <Link className="navbar-brand border-2 rounded" to="/">
                    <span className='fs-4 fw-bolder text-uppercase'>
                        <span className='ms-1 border-y-2 text-green-400'>
                            Fruit
                        </span> <span className='text-orange-400 border-y-2 border-info me-1'>
                            house
                        </span>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info font-semibold" to="blogs">Blogs</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {
                            user && <Link className="text-teal-300 font-semibold me-2 hover:border-b-2 hover:text-orange-600" to="manageinventory">Manage Inventories</Link>
                        }
                        {
                            user && <Link className="text-teal-200 font-semibold me-2 hover:border-b-2 hover:text-orange-600" to="additem">Add Item</Link>
                        }
                        {
                            user && <Link className="text-teal-100 font-semibold me-4 hover:border-b-2 hover:text-orange-600" to="myitems">My Items</Link>
                        }
                        {user && <p className='text-xl fw-bold text-white'>{user.displayName}</p>}
                        {
                            user ?
                                <Link to='login' onClick={handleSignOut} className="btn btn-link text-decoration-none" type="submit">Logout</Link>
                                : <Link to='login' className='nav-link'>Login</Link>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;