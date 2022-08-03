import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams()
    return (
        <div className='text-center font-bold my-12'>
            <h1>{id}</h1>
        </div>
    );
};

export default SingleProduct;