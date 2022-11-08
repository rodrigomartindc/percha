import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryid" element={<ItemListContainer />} />

          <Route path="/detalle/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>404: Error - Ruta no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
