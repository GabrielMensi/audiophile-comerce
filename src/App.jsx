import Home from './pages/Home'
//Data
import { products as productsList } from "./assets/products.json";
//React Router
import { Route, Routes } from 'react-router-dom'
//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage';
import CheckOut from './pages/CheckOut';

function App() {

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
