import { PlusCircleIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:4000/myitems?email=${email}`;
            try {
                const { data } = await axios.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getMyItems();
    }, [user])
    // For delete my item
    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:4000/fruit/${id}`
            axios({
                method: 'delete',
                url: url
            })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remaining = myItems.filter(item => item._id !== id);
                        setMyItems(remaining);
                        toast('Deleted Successfully !!!')
                    }
                })
        }
    }
    return (
        <div className='container my-3 min-h-screen'>
            <h1 className='text-2xl text-center font-semibold'>Manage My items: {myItems.length}</h1>
            {/* <h1>Manage My items: {myItems.length}</h1>
            {
                myItems.map(i => <li key={i._id}>
                    {i.name}-----{i.supplierName}-----{i.quantity}---<TrashIcon className='w-8 d-inline text-danger' onClick={() => handleDeleteItem(i._id)}></TrashIcon>
                </li>)
            } */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4'>
                {
                    myItems.map(myItem => <ManageInventoryItem key={myItem._id} item={myItem} handleDeleteItem={handleDeleteItem} />)
                }
            </div>
            <div className='text-center'>
                <button onClick={() => navigate('/additem')} className="btn btn-dark rounded-0">Add New Item <PlusCircleIcon className='text-white w-5 d-inline'></PlusCircleIcon></button>
            </div>
        </div>
    );
};

export default MyItems;