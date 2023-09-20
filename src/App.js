import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Homenext from "./Components/Homenext";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Teams from "./Components/Teams";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Homenext/>
    <About/>
    <Services/>
    <Teams/>
    <Contact/>
    </div>
  );
}

export default App;
