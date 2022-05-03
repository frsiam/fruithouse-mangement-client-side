import { EyeIcon } from '@heroicons/react/solid';
import React from 'react';
import './module.Information.css'

const Information = () => {
    return (
        <div className="jumbotron">
            <div className="row w-100">
                <div className="col-md-3">
                    <div className="card border-info mx-sm-1 p-3">
                        <div className="card border-info shadow text-info p-3 my-card" >
                            {/* <span className="fa fa-car" aria-hidden="true"></span> */}
                        </div>
                        <div className="text-info text-center mt-3"><h4>Cars</h4></div>
                        <div className="text-info text-center mt-2"><h1>234</h1></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-success mx-sm-1 p-3">
                        <div className="card border-success shadow text-success p-3 my-card">
                            <span className="fa fa-eye" aria-hidden="true"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <div className="text-success text-center mt-3"><h4>Eyes</h4></div>
                        <div className="text-success text-center mt-2"><h1>9332</h1></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-danger mx-sm-1 p-3">
                        <div className="card border-danger shadow text-danger p-3 my-card" >
                            <span className="fa fa-heart" aria-hidden="true"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-danger text-center mt-3"><h4>Hearts</h4></div>
                        <div className="text-danger text-center mt-2"><h1>346</h1></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-warning mx-sm-1 p-3">
                        <div className="card border-warning shadow text-warning p-3 my-card" >
                            <span className="fa fa-inbox" aria-hidden="true"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                            </svg>
                        </div>
                        <div className="text-warning text-center mt-3"><h4>Inbox</h4></div>
                        <div className="text-warning text-center mt-2"><h1>346</h1></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;