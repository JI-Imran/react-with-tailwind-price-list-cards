import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center pb-1'>
            <CheckCircleIcon className="h-6 w-6 text-purple-600" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;