import React from 'react';

const Blogs = () => {
    return (
        <div className='container px-4'>
            <div className='my-4'>
                <h2 className='text-3xl text-center my-3'>Difference between javascript and nodejs</h2>
                <table className="table table-bordered">
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
            {/* difference between node vs mongodb */}
            <div className='my-4'>
                <h2 className='text-3xl text-center my-3'>When we use between from Nodejs and Mongodb</h2>
                <table className="table table-bordered">
                    <thead className='table-info'>
                        <tr className='row'>
                            <th className='col-2'>S.No</th>
                            <th className='col-5 text-center'>When to use Nodejs?</th>
                            <th className='col-5 text-center'>When to use MongoDB?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='row'>
                            <th className="col-2">1.</th>
                            <td className="col-5 text-center">
                                Node.js can be used in database applications.
                            </td>
                            <td className="col-5 text-center">
                                MongoDB can be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">2.</th>
                            <td className="col-5 text-center">
                                Node.js, the open source JavaScript server environment, has the ability to connect to both SQL and NoSQL databases such as MySQL and MongoDB (respectively). In order to use these databases, the required modules need to be downloaded and installed by using the Node Package Manager (npm).
                            </td>
                            <td className="col-5 text-center">
                                MongoDB is a scalable, high-performance, open-source, document-oriented NoSQL database, which was developed by 10gen in the year 2007. It is written in C++ and it supports a variety of APIs in many programming languages.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* difference between sql vs nosql */}
            <div className='my-4'>
                <h2 className='text-3xl text-center my-3'>Difference between SQL and NoSQL</h2>
                <table className="table table-bordered">
                    <thead className='table-info'>
                        <tr className='row'>
                            <th className='col-2'>S.No</th>
                            <th className='col-5 text-center'>SQL</th>
                            <th className='col-5 text-center'>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='row'>
                            <th className="col-2">1.</th>
                            <td className="col-5 text-center">
                                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                            </td>
                            <td className="col-5 text-center">
                                Non-relational or distributed database system.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">2.</th>
                            <td className="col-5 text-center">
                                These databases have fixed or static or predefined schema
                            </td>
                            <td className="col-5 text-center">
                                They have dynamic schema
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">3.</th>
                            <td className="col-5 text-center">
                                These databases are not suited for hierarchical data storage.
                            </td>
                            <td className="col-5 text-center">
                                These databases are best suited for hierarchical data storage.
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">4.</th>
                            <td className="col-5 text-center">
                                These databases are best suited for complex queries
                            </td>
                            <td className="col-5 text-center">
                                These databases are not so good for complex queries
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">5.</th>
                            <td className="col-5 text-center">
                                Vertically Scalable
                            </td>
                            <td className="col-5 text-center">
                                Horizontally scalable
                            </td>
                        </tr>
                        <tr className='row'>
                            <th className="col-2">6.</th>
                            <td className="col-5 text-center">
                                Follows ACID property
                            </td>
                            <td className="col-5 text-center">
                                Follows CAP(consistency, availability, partition tolerance)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* difference between  */}
            <div className='container my-4'>
                <h1 className='text-3xl text-primary my-3'>What is JWT and how it is work ?</h1>
                <div className='bg-slate-100 p-3 mb-3'>
                    <h1 className='text-xl font-semibold'>What is JWT ?</h1>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
                <div className='bg-slate-50 p-3'>
                    <h1 className='text-xl font-semibold my-3'>How JWT is works ?</h1>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    <p>Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
                    <p>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;