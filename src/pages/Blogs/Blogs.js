import React from 'react';

const Blogs = () => {
    return (
        <div className='container px-4'>
            <div className='my-4'>
                <h2 className='text-3xl text-center my-3'>Difference between javascript and nodejs</h2>
                <table class="table table-bordered">
                    <thead className='table-info'>
                        <tr className='row'>
                            <th className='col-2'>S.No</th>
                            <th className='col-5 text-center'>Javascript</th>
                            <th className='col-5 text-center'>nodejs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='row'>
                            <th className="col-2">1.</th>
                            <td className="col-5 text-center">
                                Javascript is a programming language that is used for writing scripts on the website.
                            </td>
                            <td className="col-5 text-center">
                                NodeJS is a Javascript runtime environment.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">2.</th>
                            <td className="col-5 text-center">
                                Javascript can only be run in the browsers.
                            </td>
                            <td className="col-5 text-center">
                                We can run Javascript outside the browser with the help of NodeJS.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">3.</th>
                            <td className="col-5 text-center">
                                It is basically used on the client-side.
                            </td>
                            <td className="col-5 text-center">
                                It is mostly used on the server-side.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">4.</th>
                            <td className="col-5 text-center">
                                Javascript is capable enough to add HTML and play with the DOM.
                            </td>
                            <td className="col-5 text-center">
                                Nodejs does not have capability to add HTML tags.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">5.</th>
                            <td className="col-5 text-center">
                                Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                            </td>
                            <td className="col-5 text-center">
                                V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">6.</th>
                            <td className="col-5 text-center">
                                It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.
                            </td>
                            <td className="col-5 text-center">
                                Nodejs is written in C, C++ and Javascript.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Blogs;