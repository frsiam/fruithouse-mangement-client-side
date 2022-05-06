import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateModal = () => {
    //upore params hishebe { id } dite hobe
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);

    const previousQuantity = item.quantity;

    const handleGetItem = (id) => {
        setQuantity(previousQuantity);
        const url = `http://localhost:4000/fruit/${id}`;

        axios({
            method: 'get',
            url: url
        })
            .then(res => setItem(res.data))

    }

    const handleUpdateItemQuantity = (e) => {
        const { quantity, ...rest } = item;
        const newQuantity = e.target.value;
        const updatedItem = { quantity: newQuantity, ...rest };
        console.log(updatedItem);
        setItem(updatedItem);
    }

    const handleUpdateItem = e => {
        e.preventDefault();
        console.log('updated')

        const updatedFruit = { name: item.name, img: item.img, price: item.price, quantity: item.quantity, email: item.email, supplierName: item.supplierName, description: item.description };

        // fetch er url dynamic vabe set korte hobe pore
        fetch(`http://localhost:4000/fruit/62746a0b4be59de5b2ad9e52`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFruit),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast('Item Restock Succesffully !!')
            })

        e.target.reset()
    }
    return (
        <div>
            {/* handleGetItem er vitore dynamically id set korte hobe id */}
            <button onClick={() => handleGetItem('62746a0b4be59de5b2ad9e52')} className="btn btn-dark rounded-0 font-medium" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Restock item</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Quantity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdateItem}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Previous Quantity</label>
                                    <input type="text" className="form-control" id="recipient-name" value={quantity} readOnly disabled />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Quantity</label>
                                    <input onChange={handleUpdateItemQuantity} name='quantity' type="text" className="form-control" id="recipient-name" />
                                </div>
                                <button type='submit' className="btn btn-primary" data-bs-dismiss="modal">Send message</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;