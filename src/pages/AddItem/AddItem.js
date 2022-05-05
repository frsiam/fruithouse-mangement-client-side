import React from 'react';
import Additem from '../../images/additem.png';

const AddItem = () => {

    const handleAddItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const supplierName = e.target.supplierName.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const email = e.target.email.value;
        const description = e.target.desc.value;
        const img = e.target.imgageUrl.value;

        const fruit = { name, img, price, quantity, email, supplierName, description };



        e.target.reset()
    }


    return (
        <div className='min-h-screen' style={{ backgroundImage: `url(${Additem})` }}>
            <div className='container max-w-lg bg-slate-700 min-h-screen pt-10'>
                <form className='px-3' onSubmit={handleAddItem}>
                    <h1 className='text-2xl text-white
                    font-serif font-semibold text-center py-3 mb-2'>Please add your item</h1>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input name='name' type="text" id="form6Example1" className="form-control" placeholder='Item Name' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input name='supplierName' type="text" id="form6Example2" className="form-control" placeholder='Supplier Name' />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input name='price' type="text" id="form6Example3" className="form-control" placeholder='Item Price' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input name='quantity' type="text" id="form6Example4" className="form-control" placeholder='Quantity' />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input name='email' type="email" id="form6Example5" className="form-control" placeholder='Email' />
                    </div>

                    {/* <!-- Number input --> */}
                    <div className="form-outline mb-4">
                        <input name='imgageUrl' type="text" id="form6Example6" className="form-control" placeholder='Image URL' />
                    </div>

                    {/* <!-- Message input --> */}
                    <div className="form-outline mb-4">
                        <textarea name='desc' className="form-control" id="form6Example7" rows="2" placeholder='Short Description'></textarea>
                    </div>

                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                        <label className="form-check-label" for="form6Example8"> Create an account? </label>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                    </div> */}

                    {/* <!-- Submit button --> */}
                    <div className="text-center">
                        <button className="btn btn-primary btn-block mb-4 rounded-0 w-50">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;