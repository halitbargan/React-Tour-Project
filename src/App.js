import "./App.scss";
import Main from './components/Main/Main';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";


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
