import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Additem from '../../images/additem.png';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(false);

    const handleAddItem = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const supplierName = e.target.supplierName.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const email = user?.email;
        const description = e.target.desc.value;
        const img = e.target.imgageUrl.value;

        const fruit = { name, img, price, quantity, email, supplierName, description };

        // Data add to database 
        fetch('https://infinite-brook-76806.herokuapp.com/fruit', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fruit),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast('Item added succesffully !!')
                setConfirm(!confirm)
            })

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
                                <input name='name' type="text" id="form6Example1" className="form-control" placeholder='Item Name' required />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-outline">
                                <input name='supplierName' type="text" id="form6Example2" className="form-control" placeholder='Supplier Name' required />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input name='price' type="text" id="form6Example3" className="form-control" placeholder='Item Price' required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input name='quantity' type="text" id="form6Example4" className="form-control" placeholder='Quantity' required />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input name='email' type="email" value={user?.email} id="form6Example5" className="form-control" placeholder='Email' readOnly disabled />
                    </div>

                    {/* <!-- img url input --> */}
                    <div className="form-outline mb-4">
                        <input name='imgageUrl' type="text" id="form6Example6" className="form-control" placeholder='Image URL' required />
                    </div>

                    {/* <!-- description input --> */}
                    <div className="form-outline mb-4">
                        <textarea name='desc' className="form-control" id="form6Example7" rows="2" placeholder='Short Description' required></textarea>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-4">
                        <label className="form-check-label text-white" htmlFor="form6Example8"> Are you confirm that filling all input field ? </label>
                        <input onClick={() => setConfirm(!confirm)} className="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
                    </div>

                    {/* <!-- Submit button --> */}
                    <div className="text-center">
                        <button disabled={!confirm} className="btn btn-primary btn-block mb-4 rounded-0 w-50">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;