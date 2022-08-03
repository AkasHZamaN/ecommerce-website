import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Home/Products';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:id' element={<SingleProduct></SingleProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
