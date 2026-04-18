# Phishing Platform

An educational web application that detects phishing emails using pattern-based analysis. A React dashboard displays risk scores and classification results for emails analyzed by a FastAPI backend.

## Features

- Pattern-based phishing detection (suspicious domains, urgency language, deceptive links)
- Risk scoring system with three classification levels: Legitimate, Suspicious, High Risk
- Color-coded dashboard showing email analysis results and detection reasons
- REST API returning enriched email data with per-email analysis

## Tech Stack

- **Frontend:** React 19, Vite, JavaScript
- **Backend:** FastAPI, Python 3, Uvicorn

## Project Structure

```
phishing-platform/
├── frontend/           # React + Vite web app
│   └── src/
│       ├── App.jsx     # Dashboard UI
│       └── api.js      # Backend API client
└── backend/
    ├── main.py         # FastAPI app and /api/emails route
    ├── detector.py     # Email analysis and scoring logic
    ├── sample_emails.py # Sample email dataset
    └── requirements.txt
```

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.8+

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8030
```

The API will be available at `http://localhost:8030`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## API

**`GET /api/emails`** — Returns all emails with analysis results.

```json
[
  {
    "id": "E-001",
    "from": "security@paypaI.com",
    "subject": "Urgent: Account Suspended",
    "risk_score": 100,
    "classification": "High Risk",
    "reasons": ["Suspicious sender domain", "Urgency language", "Embedded external links"]
  }
]
```

## Detection Rules

| Indicator | Score |
|-----------|-------|
| Suspicious sender domain (contains digits) | +20 |
| Urgency language in subject | +25 |
| Embedded external links | +30 |
| Deceptive link formatting | +25 |

**Classification thresholds:** ≥70 = High Risk, ≥40 = Suspicious, <40 = Legitimate

## Configuration

- Backend port and CORS origin are set in `backend/main.py` (default: port `8030`, origin `http://localhost:5173`)
- Backend URL for the frontend is set in `frontend/src/api.js`

## Disclaimer

This is an educational demonstration project using static sample data and simple pattern matching. It is not intended for production use as a security tool.
