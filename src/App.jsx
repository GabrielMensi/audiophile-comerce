//Data
import { products as productsList } from "./assets/products.json";
//React Router
import { Route, Routes } from 'react-router-dom'
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from './reducers/cart/cartSlice';
//Components
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage';
import CheckOut from './pages/CheckOut';
import { useEffect } from 'react';

function App() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) {
      dispatch(setCart(JSON.parse(data)));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (   
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/check-out" element={<CheckOut/>} />
        <Route path="/:category" element={<CategoryPage productsList={ productsList }/>} />
        <Route path='/:categoy/:product' element={<ProductPage productsList={ productsList }/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
