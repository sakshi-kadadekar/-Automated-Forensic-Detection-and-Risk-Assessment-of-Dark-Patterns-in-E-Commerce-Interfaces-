from flask import Flask, jsonify, request
from flask_cors import CORS
import time
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for React

# --- SIMULATED AI/ML ENGINE ---
# In a real scenario, this would import PyTorch/BERT models and Selenium.
def simulate_analysis(url):
    time.sleep(2)  # Simulate processing time (scraping + inference)
    
    # Mock Risk Logic based on random seed
    base_score = random.randint(40, 95)
    
    patterns = [
        {"name": "Fake Urgency", "detected": True, "description": "Countdown timer found suggesting false deadline.", "severity": "High", "evidence": "Timer element #countdown-timer"},
        {"name": "Sneaky Opt-in", "detected": random.choice([True, False]), "description": "Pre-checked box for newsletter subscription.", "severity": "Medium", "evidence": "Checkbox .newsletter-signup checked by default"},
        {"name": "Hidden Costs", "detected": random.choice([True, False]), "description": "Unexpected fees added at checkout.", "severity": "High", "evidence": "+$12.99 Service Fee at step 4"},
        {"name": "Confirm Shaming", "detected": False, "description": "Manipulative language to reject an offer.", "severity": "Low", "evidence": "None"},
    ]
    
    detected_patterns = [p for p in patterns if p['detected']]
    
    return {
        "url": url,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "risk_score": base_score,
        "confidence_score": random.randint(85, 99),
        "patterns": detected_patterns,
        "screenshot_url": "https://via.placeholder.com/600x400?text=Analyzed+Interface+Snapshot" # Placeholder
    }

# Store history in memory for the 'Reports' page
history_db = []

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    url = data.get('url')
    
    if not url:
        return jsonify({"error": "URL is required"}), 400
        
    result = simulate_analysis(url)
    history_db.append(result)
    return jsonify(result)

@app.route('/reports', methods=['GET'])
def get_reports():
    return jsonify(history_db)

if __name__ == '__main__':
    app.run(debug=True, port=5000)