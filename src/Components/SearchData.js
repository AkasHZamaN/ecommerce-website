import React from "react";


const SearchData = ({ sd }) => {

  return (
    <div>
       <div className="font-medium">
       <img src={sd?.image} alt="" />
       <p>{sd?.name}</p>
       <p>{sd?.price}</p>
       <p>{sd?.category}</p>
       <p>{sd?.brand}</p>
       </div>
    </div>
  );
};

export default SearchData;
