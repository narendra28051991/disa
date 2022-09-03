import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Contact from './pages/Contact/Contact';

import Whatsapp from './pages/Whatsapp/Whatsapp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Games />
      <Contact />
      <Whatsapp />
    </div>
  );
}

export default App;
