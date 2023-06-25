import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className=' bg-indigo-400  mt-4 ms-2 me-2 p-2 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-600'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h1 className='text-3xl text-center font-bold'>
                {price.name}
            </h1>
            <p className='underline text-purple-700 font-bold '>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                />)
            }
            <button className='w-full mt-auto hover:bg-green-700 bg-green-500 p-1 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;