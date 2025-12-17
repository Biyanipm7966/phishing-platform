from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sample_emails import EMAILS
from detector import analyze_email

app = FastAPI(title="Phishing Detection Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/emails")
def list_emails():
    enriched = []
    for e in EMAILS:
        analysis = analyze_email(e)
        enriched.append({**e, **analysis})
    return enriched
