import React from 'react';

const Singleinventory = ({ inventory, desc }) => {
    const { name, img, quantity, price, description } = inventory;
    return (
        <div className='shadow-lg p-2'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <h1>Price: ${price}</h1>
                    <p>{desc}...</p>
                </div>
            </div>
        </div>
    );
};

export default Singleinventory;