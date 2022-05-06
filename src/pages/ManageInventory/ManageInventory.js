import { TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ManageInventory = () => {
    const [items, setItems] = useState([]);

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
        <div>
            <h1>This is manage Inventory page: {items.length}</h1>
            {
                items.map(i => <li key={i._id}>
                    {i.name}-----{i.supplierName}-----{i.quantity}---<TrashIcon className='w-8 d-inline text-danger' onClick={() => handleDeleteItem(i._id)}></TrashIcon>
                </li>)
            }
        </div>
    );
};

export default ManageInventory;