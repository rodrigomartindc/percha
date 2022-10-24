import './App.css';
import NavBar from "./Components/NavBar/Navbar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <header>
      <NavBar/>
      <ItemListContainer greeting="greeting"/>
      </header>
    </div>
  );
}

export default App;
