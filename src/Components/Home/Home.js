import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchData from '../SearchData';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchData></SearchData>
            <Products></Products>
        </div>
    );
};

export default Home;