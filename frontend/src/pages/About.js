
const About = () => {
  return (
    <div className="container">
      <h2>About DarkPatternDetector</h2>
      <p>
        <strong>Objective:</strong> An automated forensic tool designed to identify and document 
        deceptive UI/UX designs (Dark Patterns) that manipulate consumer behavior.
      </p>
      
      <hr />
      
      <h3>Core Methodology</h3>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '30px' }}>
        <h4>System Architecture & Data Flow</h4>
        {/* Placeholder for the Flow Diagram */}
        <div style={{ border: '2px dashed #cbd5e1', padding: '40px', borderRadius: '8px', background: '#f8fafc' }}>
           <p><strong>[Flow Diagram: URL → Selenium (Scraping) → BERT (NLP) → Flask API → React UI]</strong></p>
        </div>
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="card">
          <h4>Actor: User (Auditor)</h4>
          <ul>
            <li>Submits URLs for forensic audit</li>
            <li>Reviews detected pattern evidence</li>
            <li>Downloads timestamped PDF reports</li>
          </ul>
        </div>
        <div className="card">
          <h4>Actor: System/Admin</h4>
          <ul>
            <li>Manages BERT classification thresholds</li>
            <li>Maintains historical report database</li>
            <li>Updates Selenium stealth drivers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;