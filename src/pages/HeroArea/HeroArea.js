import React from 'react';

const HeroArea = () => {
    return (
        <div className='container row mx-auto'>
            <div className="col-12 col-md-7 order-2 order-md-1">
                <img className='img-fluid w-100 h-75' src="https://i.ibb.co/BLhW22q/hero.jpg" alt="" />
            </div>
            <div className="col-12 col-md-5 order-1 order-md-2">
                <h1>This is hero area</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae maxime veritatis tempore consequuntur, dignissimos sint nisi maiores, culpa, explicabo ducimus dolores distinctio? Nostrum, odit cupiditate tempora fugiat hic nemo corporis</p>
            </div>
        </div>
    );
};

export default HeroArea;