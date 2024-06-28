import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css'
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import Myaccount from './components/Myaccount';
import ContactUs from './components/Contactus';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {

  const [cart, setCart] = useState([]);  // Declare a state variable 'cart' to hold the items in the cart
  const [total, setTotal] = useState(0); // Declare a state variable 'total' to hold the total price of the items in the cart

  const addToCart = (item) => {   // Function to add items to the cart
       setCart( [...cart, item]);  // Add the new item to the current cart state
       setTotal(total + item.price); // Update the total price 
  };

  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/shop' element={ <Shop/>} />
          <Route path='/categories' element={ <Categories addToCart={addToCart}/>} />  // Pass addToCart function to Categories component
          <Route path='/checkout' element={ <Checkout cart={cart} total={total}/>} />  // Pass cart state to Checkout component
          <Route path='/myaccount' element={ <Myaccount/>} />
          <Route path='/contactus' element={ <ContactUs/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;
