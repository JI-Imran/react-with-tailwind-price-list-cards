import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div>
            <h1 className='text-6xl bg-purple-500 font-bold text-center p-4'>Awesome Affordable Price</h1>
            <div className='grid md:grid-cols-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    />)
                }
            </div>
        </div>
    );
};

export default PriceList;