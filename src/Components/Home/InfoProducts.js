import React from "react";
import { useNavigate } from "react-router-dom";

const InfoProducts = ({product}) => {
    const {name, image, category, brand, size, price, year} = product;
    const navigate = useNavigate();

    const details = (id)=>{
        navigate(`/products/${id}`);
    }

  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>$ <span>{price}</span></p>
            <p>{size}</p>
            <p>{brand}</p>
            <p>{category}</p>
            <p>{year}</p>
            <div className="card-actions justify-end">
            <button onClick={()=> details(name)} className="btn btn-outline btn-accent">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProducts;
