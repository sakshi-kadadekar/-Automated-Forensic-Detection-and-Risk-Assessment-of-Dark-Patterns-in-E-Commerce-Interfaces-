
const Team = () => {
  return (
    <div>
      <h2>Project Team</h2>
      <div className="grid-4">
        {['Sakshi Kadadekar', 'Soumya Pandey', 'Veenu Sharma', 'Vedika Bhaskarwar'].map(name => (
            <div className="card" key={name} style={{textAlign: 'center'}}>
                <div style={{width:'80px', height:'80px', background:'#cbd5e1', borderRadius:'50%', margin:'0 auto 15px'}}></div>
                <h3>{name}</h3>
                <p>Project Member</p>
            </div>
        ))}
        
        <div className="card" style={{borderColor: '#ef4444', textAlign: 'center'}}>
             <div style={{width:'80px', height:'80px', background:'#fca5a5', borderRadius:'50%', margin:'0 auto 15px'}}></div>
             <h3>Mrs. Arpita Meet Vaidya</h3>
             <p>Project Supervisor</p>
        </div>
      </div>

      <div style={{marginTop: '50px', maxWidth: '600px', margin: '50px auto'}}>
        <h3>Contact Us</h3>
        <form style={{display:'flex', flexDirection:'column', gap:'15px'}}>
            <input type="text" placeholder="Your Name" className="form-control" style={{padding:'10px'}} />
            <input type="email" placeholder="Your Email" style={{padding:'10px'}} />
            <textarea rows="4" placeholder="Message" style={{padding:'10px'}}></textarea>
            <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Team;