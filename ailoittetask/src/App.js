import './App.css';
import Footer from './Footer';
import Herosection from './Herosection';
import Mainsection from './Mainsection';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Mainsection />
      <Footer />
    </div>
  );
}

export default App;
