import { TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()

    axios.get('http://localhost:4000/fruits')
        .then((response) => setItems(response.data))

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            console.log(id);
            const url = `http://localhost:4000/fruit/${id}`
            axios({
                method: 'delete',
                url: url
            })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        toast('Deleted Successfully !!!')
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h1>Manage All Inventory fruits: {items.length}</h1>
            {
                items.map(i => <li key={i._id}>
                    {i.name}-----{i.supplierName}-----{i.quantity}---<TrashIcon className='w-8 d-inline text-danger' onClick={() => handleDeleteItem(i._id)}></TrashIcon>
                </li>)
            }
            <button onClick={() => navigate('/additem')} className="btn btn-dark rounded-0">Add New Item</button>
        </div>
    );
};

export default ManageInventory;