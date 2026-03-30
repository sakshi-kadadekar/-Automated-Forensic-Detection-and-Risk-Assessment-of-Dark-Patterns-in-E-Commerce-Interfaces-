import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Analyzer from './pages/Analyzer';
import Home from './pages/Home';
import Limitations from './pages/Limitations';
import Modules from './pages/Modules';
import Reports from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />
          <Route path="/limitations" element={<Limitations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;