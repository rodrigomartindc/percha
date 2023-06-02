import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './storage/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout'


function App() {

  return (

    <div className="App">
    <CartContextProvider>
    
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:orderId" element={<Checkout />} />
          <Route path="*" element={<h1>404: Error - Ruta no encontrada</h1>} />
        </Routes>
      </BrowserRouter>

      </CartContextProvider>
      </div>
  );
}

export default App;
