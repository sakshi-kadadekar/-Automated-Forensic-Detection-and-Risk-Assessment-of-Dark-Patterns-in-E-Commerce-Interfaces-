
const Limitations = () => {
  return (
    <div>
      <h2>Limitations & Future Scope</h2>
      
      <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '30px'}}>
        <div style={{flex: 1, background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'}}>
            <h3 style={{color: '#ef4444'}}>Current Limitations</h3>
            <ul>
                <li>Detection limited to predefined patterns (Urgency, Opt-ins).</li>
                <li>Highly dependent on specific HTML structures (class names/IDs).</li>
                <li>Cannot track real-time user session changes (dynamic DOM injection after load).</li>
            </ul>
        </div>

        <div style={{flex: 1, background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'}}>
            <h3 style={{color: '#2563eb'}}>Future Scope</h3>
            <ul>
                <li><strong>Browser Extension:</strong> Real-time auditing while users browse.</li>
                <li><strong>Mobile App Detection:</strong> Analyzing APKs for dark patterns.</li>
                <li><strong>LLM Integration:</strong> Using GPT-4 Vision for screenshot analysis.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Limitations;