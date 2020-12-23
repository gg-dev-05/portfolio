import Preloader from "./components/Preloader";
import Navbar from './components/Navbar'
import './App.css'



function App() {
  return (
    <div className="App">

      <div className="preloading">
        {/* <Preloader /> */}
      </div>

      <header>
        <Navbar />
      </header>






    </div>
  );
}

export default App;
