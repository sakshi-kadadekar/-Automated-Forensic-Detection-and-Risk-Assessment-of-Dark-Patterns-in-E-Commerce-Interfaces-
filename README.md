# DarkPattern-Forensics

An AI-driven forensic analysis platform that detects and evaluates deceptive user interface practices in e-commerce websites using Natural Language Processing, machine learning, and web automation.

---

## Overview

Dark patterns are manipulative design techniques used to influence user decisions through misleading interfaces, hidden information, and psychological pressure. DarkPattern-Forensics automates the identification of such practices by combining web scraping, NLP-based classification, and forensic risk assessment.

The system analyzes website content, identifies deceptive patterns, and generates risk reports that promote transparency, ethical design, and consumer protection.

---

## Features

* Automated website analysis
* Live content extraction using browser automation
* BERT-based dark pattern classification
* Detection of deceptive UX strategies
* Risk severity assessment
* Interactive analytics dashboard
* Evidence-based reporting system

---

## Dark Patterns Detected

* Sneak Into Basket
* False Urgency
* Hidden Costs
* Confirm Shaming
* Scarcity Tactics
* Misleading Interface Design
* Forced Action

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Lucide Icons

### Backend

* Flask
* REST APIs

### Machine Learning

* PyTorch
* Hugging Face Transformers
* BERT
* Scikit-Learn

### Automation

* Selenium
* Playwright

---

## Architecture

```text
DarkPattern-Forensics/
├── frontend/
├── backend/
├── ml-models/
├── reports/
├── datasets/
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/DarkPattern-Forensics.git
cd DarkPattern-Forensics
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend

npm install
npm start
```

---

## Methodology

### 1. Data Extraction

Website content and UI elements are collected using browser automation tools.

### 2. Pattern Analysis

Extracted text is processed through a fine-tuned BERT model.

### 3. Risk Assessment

Detected dark patterns are evaluated and assigned severity scores.

### 4. Reporting

Findings are visualized through an interactive dashboard and forensic reports.

---

## Future Enhancements

* Multi-language detection support
* Browser extension integration
* Explainable AI reporting
* Large-scale website auditing
* Regulatory compliance assessment

---

## Team

Lead Developer:
Sakshi Kadadekar

Team Members:

* Soumya Pandey
* Veenu Sharma
* Vedika Bhaskarwar

Project Supervisor:
Mrs. Arpita Meet Vaidya

---

## Author

Sakshi Kadadekar

GitHub: https://github.com/sakshi-kadadekar

LinkedIn: https://www.linkedin.com/in/sakshi-kadadekar-231311365

---

## License

MIT License
