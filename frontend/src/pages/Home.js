import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero">
      <h1>Automated Dark Pattern Detection</h1>
      <p>Protecting consumers by detecting manipulative user interfaces in E-Commerce using Forensic AI.</p>
      
      <div style={{marginTop: '20px'}}>
        <Link to="/analyzer">
            <button className="btn btn-primary" style={{marginRight: '15px', padding: '15px 30px', fontSize: '1.1rem'}}>Analyze Website</button>
        </Link>
        <Link to="/reports">
            <button className="btn" style={{background: '#e2e8f0', padding: '15px 30px', fontSize: '1.1rem'}}>View Reports</button>
        </Link>
      </div>
      
      {/* Decorative Modern Visual Placeholder */}
      <div style={{marginTop: '50px', padding: '20px', background: '#f1f5f9', borderRadius: '10px'}}>
        <p style={{fontStyle:'italic', color: '#94a3b8'}}>System Status: AI Models Ready | Playwright Active | Forensic Engine Online</p>
      </div>
    </div>
  );
};

export default Home;