import React from 'react';
import useProducts from '../../hook/useProducts';
import InfoProducts from './InfoProducts';

const Products = () => {
    const [products] = useProducts();

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-6'>
                {
                    products.map(product => <InfoProducts
                    key={product.name}
                    product={product}
                    ></InfoProducts>)
                }
            </div>
        </div>
    );
};

export default Products;