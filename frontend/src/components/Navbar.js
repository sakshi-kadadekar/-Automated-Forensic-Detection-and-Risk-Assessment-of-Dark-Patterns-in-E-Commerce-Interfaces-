import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2 style={{color: '#2563eb'}}>DarkPattern<span style={{color:'#1e293b'}}>Detector</span></h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/modules">Methodology</Link>
        <Link to="/analyzer">Analyzer</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/team">Team</Link>
      </div>
    </nav>
  );
};

export default Navbar;