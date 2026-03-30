import axios from 'axios';
import { useState } from 'react';

const Analyzer = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!url) return alert("Please enter a URL");
    setLoading(true);
    setResult(null);
    try {
      // Connects to Flask Backend
      const response = await axios.post('http://localhost:5000/analyze', { url });
      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing:", error);
      alert("Analysis failed. Ensure Backend is running.");
    }
    setLoading(false);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Forensic Analyzer</h2>
      <p>Enter an E-Commerce URL to scan for deceptive patterns.</p>
      
      <div className="analyzer-box">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="https://example-ecommerce.com" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading}>
            {loading ? 'Scanning...' : 'Start Analysis'}
          </button>
        </div>

        {result && (
          <div className="result-container animate-fade-in">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #eee', paddingBottom:'10px'}}>
               <h3>Analysis Results</h3>
               <span className={`risk-badge ${result.risk_score > 70 ? 'high' : 'medium'}`}>
                 Risk Score: {result.risk_score}/100
               </span>
            </div>
            
            <p><strong>Target:</strong> {result.url}</p>
            <p><strong>Confidence:</strong> {result.confidence_score}%</p>
            <p><strong>Timestamp:</strong> {result.timestamp}</p>

            <h4>Detected Patterns:</h4>
            {result.patterns.length === 0 ? <p>No dark patterns detected.</p> : (
               <div style={{display:'grid', gap:'10px'}}>
                 {result.patterns.map((pat, idx) => (
                   <div key={idx} style={{border:'1px solid #e2e8f0', padding:'15px', borderRadius:'6px', textAlign:'left'}}>
                     <div style={{display:'flex', justifyContent:'space-between'}}>
                        <strong>{pat.name}</strong>
                        <span style={{color: pat.severity === 'High' ? 'red' : 'orange'}}>{pat.severity} Risk</span>
                     </div>
                     <p style={{fontSize:'0.9rem', margin:'5px 0'}}>{pat.description}</p>
                     <div style={{background:'#f8fafc', padding:'8px', fontSize:'0.85rem', fontFamily:'monospace'}}>
                       Evidence: {pat.evidence}
                     </div>
                   </div>
                 ))}
               </div>
            )}
            
            <div style={{marginTop: '20px'}}>
                <h4>Visual Evidence:</h4>
                <img src={result.screenshot_url} alt="Evidence" style={{width: '100%', borderRadius: '8px'}} />
            </div>

            <button className="btn btn-primary" style={{marginTop: '20px', width:'100%'}} onClick={() => window.print()}>
                Download Forensic Report (PDF)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyzer;