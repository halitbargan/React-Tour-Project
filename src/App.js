import "./App.scss";
import Main from './components/Main/Main';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import  { data }  from "./helper/data"

const App = ()=>{
  return (
  <div className="App">
    <Navbar />
    <Header/>
    <Main />
    
    
    
    
  </div>
    );
};

export default App;
