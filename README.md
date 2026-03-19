🔍 Overview:
DarkPattern-Forensics is an automated system designed to detect and analyze deceptive UI/UX practices in e-commerce platforms. These practices, known as dark patterns, manipulate user behavior through tactics such as hidden costs, false urgency, and misleading design.

This project leverages BERT-based Natural Language Processing (NLP) and web automation to identify such patterns and generate a structured risk assessment, promoting transparency and user protection in digital commerce.

✨ Key Features:
🌐 Live Web Scraping
Extracts real-time DOM structure and textual data from e-commerce websites using Selenium/Playwright.

🤖 AI-Powered Detection:
Utilizes a fine-tuned BERT model to classify dark patterns such as:
Sneak-into-Basket, False Urgency, Hidden Costs, etc.

⚖️ Forensic Risk Assessment:
Assigns High, Medium, or Low risk levels based on the severity and psychological impact of detected patterns.

📊 Interactive Dashboard:
A React-based interface for visualizing detected patterns, supporting evidence, and risk insights.

🛠️ Tech Stack:
Frontend: React.js, Tailwind CSS, Lucide Icons
Backend: Flask (Python), RESTful APIs
Machine Learning: PyTorch, HuggingFace Transformers (BERT), Scikit-learn
Automation: Selenium WebDriver / Playwright

🚀 Getting Started:
Prerequisites:
Python 3.8+
Node.js & npm

Installation:
1. Clone the Repository:
git clone https://github.com/YOUR_USERNAME/DarkPattern-Forensics.git
cd DarkPattern-Forensics

3. Setup Backend (Flask):
cd backend
python -m venv venv

Activate virtual environment:
Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Install dependencies and run server:
pip install -r requirements.txt
python app.py

3. Setup Frontend (React):
cd ../frontend
npm install
npm start

📊 Methodology:
The system follows a structured four-stage forensic pipeline:

Extraction:
Collects UI elements and textual data from the target website.

Analysis:
Processes extracted content using a trained BERT classifier.

Assessment:
Evaluates the presence and severity of dark patterns to compute a risk score.

Reporting:
Presents findings through an interactive dashboard with visual insights.

📜 License:
This project is licensed under the MIT License. See the LICENSE file for details.

👩‍💻 Team:
Lead Developer: Sakshi Kadadekar
Team Members: Soumya Pandey, Veenu Sharma, Vedika Bhaskarwar
Supervisor: Mrs. Arpita Meet Vaidya


