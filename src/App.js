import "./App.scss";
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import data from "./helper/data"

const App = ()=>{
  return (
  <div className="App">
  <div><Navbar /></div>
  <div><Header/></div>
  <div><Cards veri={data}/></div>
    
    
    
    
  </div>
    );
};

export default App;
