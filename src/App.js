import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'



function App() {
  return (
    <div className="App">



      <header>
        <Navbar />
      </header>
      <div className="empty-height" contentEditable>
      </div>
      <footer>
        <Footer />
      </footer>






    </div>
  );
}

export default App;
