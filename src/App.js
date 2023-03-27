import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { initializeApp } from "firebase/app";

import CartProvider from "./components/Context/CartContext";
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCategory from './components/ItemCategory';
import Carrito from './components/Carrito/Carrito';

const firebaseConfig = {
  apiKey: "AIzaSyDkpF36F46sMMkM6PBb6ImkDVl_lBNAd98",
  authDomain: "react-coder-471b5.firebaseapp.com",
  projectId: "react-coder-471b5",
  storageBucket: "react-coder-471b5.appspot.com",
  messagingSenderId: "38153924747",
  appId: "1:38153924747:web:4023f2fec730f84dd6a48e"
};


const app = initializeApp(firebaseConfig);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Landing/>}></Route>
            <Route exact path='/products' element={<ItemListContainer/>}></Route>
            <Route exact path='/cart' element={<Carrito/>}></Route>
            <Route exact path='/item/:itemID' element={<ItemDetailContainer/>}></Route>
            <Route exact path='/category/:productID' element={<ItemCategory/>}></Route>
          </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
