import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hook/useProducts";

const Navbar = () => {
  const [products] = useProducts();
  const [newData, setNewData] = useState([]);

  const filterItems = () => {
    products.filter((pd) => setNewData(pd.category));
  };
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
                <li>
                    <Link to={'/products'}>{newData}</Link>
                </li>
            </ul>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <button class="btn btn-outline btn-accent">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
