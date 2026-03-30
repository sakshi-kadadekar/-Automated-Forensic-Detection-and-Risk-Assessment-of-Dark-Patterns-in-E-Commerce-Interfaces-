import { Camera, Code, Database, FileText } from 'lucide-react'; // Example icons

const Modules = () => {
  const modules = [
    {
      title: "1. Evidence Acquisition",
      icon: <Camera color="#2563eb" size={32} />,
      desc: "Uses Selenium/Playwright to browse the target URL, capturing DOM trees, screenshots, and network traffic logs autonomously."
    },
    {
      title: "2. Feature Extraction",
      icon: <Code color="#2563eb" size={32} />,
      desc: "Parses HTML to extract text nodes, button styles, and color contrast. Uses NLP to identify urgency or guilt-tripping language."
    },
    {
      title: "3. Detection Engine",
      icon: <Database color="#2563eb" size={32} />,
      desc: "A hybrid model using Rule-based logic (for visual hiding) and BERT-based classifiers (for linguistic manipulation). Calculates confidence scores."
    },
    {
      title: "4. Forensic Reporting",
      icon: <FileText color="#2563eb" size={32} />,
      desc: "Generates a timestamped, immutable PDF report containing screenshots, highlighted code snippets, and risk severity assessments."
    }
  ];

  return (
    <div>
      <h2>System Modules & Methodology</h2>
      <div className="grid-4">
        {modules.map((m, index) => (
          <div key={index} className="card">
            <div style={{marginBottom: '10px'}}>{m.icon}</div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;