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
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"#"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>Settings</Link>
              </li>
              <li>
                <Link to={"#"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
