def analyze_email(email):
    score = 0
    reasons = []

    if any(c.isdigit() for c in email["from"]):
        score += 20
        reasons.append("Suspicious sender domain")

    if "urgent" in email["subject"].lower():
        score += 25
        reasons.append("Urgency language")

    if email["links"]:
        score += 30
        reasons.append("Embedded external links")

    for link in email["links"]:
        if "secure" in link and "http://" in link:
            score += 25
            reasons.append("Deceptive link formatting")

    classification = "Legitimate"
    if score >= 70:
        classification = "High Risk"
    elif score >= 40:
        classification = "Suspicious"

    return {
        "risk_score": score,
        "classification": classification,
        "reasons": reasons
    }
