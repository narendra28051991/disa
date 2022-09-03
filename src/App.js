import "@stripe/stripe-js";

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
// import Details from './pages/Details/Details';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import './App.css';
import Whatsapp from './pages/Whatsapp/Whatsapp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Games />
      {/* <Details /> */}
      <About />
      <Contact />
      <Whatsapp />
    </div>
  );
}

export default App;
