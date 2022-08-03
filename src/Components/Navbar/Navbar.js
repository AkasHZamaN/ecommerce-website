import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hook/useProducts";
import SearchData from "../SearchData";

const Navbar = () => {
  const [products] = useProducts();
  const [newData, setNewData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const filterItems = () => {
    const pdDetails = products.filter((pd) => pd.category === 'shoes');
    setNewData(pdDetails.map(m => m.category));
  };

  const handleSearch = (e) => {
    e.preventDefault()
    const search = e.target.searchText.value;
    
    const data = products.filter((pd)=> pd.brand === search)
    setSearchData(data)
  }

  return (
    <div>
      <div className="navbar bg-neutral">
        <div className="flex-1">
        <div className="text-white">
            <Link to={'/'}>Home</Link>
            </div>
          <div className="dropdown">
            <label onClick={filterItems} tabIndex="2" className="btn m-1">
              Category
            </label>
            <ul
              tabIndex="2"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                {
                    newData.map((cat, index) => <li key={index + 1}> <Link to={'/products'}>{cat}</Link></li>)
                }
                
            </ul>
          </div>
        </div>
        <form onSubmit={handleSearch} className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              name="searchText"
              placeholder="Search Brand Name"
              className="input input-bordered"
            />
          </div>
          <button type="submit" className="btn btn-outline btn-accent">Search</button>
        </form>

      </div>
      <h1 className="text-center font-medium mt-6">Search Result of brand product will be show below</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
            {
                searchData.map(sd=> <SearchData key={sd.name} sd={sd}></SearchData>)
            }
        </div>
    </div>
  );
};

export default Navbar;
