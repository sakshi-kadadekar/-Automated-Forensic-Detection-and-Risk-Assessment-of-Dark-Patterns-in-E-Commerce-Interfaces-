import axios from 'axios';
import { useEffect, useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch history from backend
    axios.get('http://localhost:5000/reports')
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Analysis History Reports</h2>
      {reports.length === 0 ? <p>No reports generated yet. Go to Analyzer.</p> : (
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Website URL</th>
              <th>Risk Score</th>
              <th>Patterns Found</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((rep, idx) => (
              <tr key={idx}>
                <td>{rep.timestamp}</td>
                <td>{rep.url}</td>
                <td>
                    <span className={`risk-badge ${rep.risk_score > 70 ? 'high' : 'medium'}`}>
                        {rep.risk_score}
                    </span>
                </td>
                <td>{rep.patterns.length}</td>
                <td><button className="btn" style={{fontSize:'0.8rem', padding:'5px 10px'}}>View PDF</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reports;