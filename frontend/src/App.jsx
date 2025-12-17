import { useEffect, useState } from "react";
import { fetchEmails } from "./api";

function badge(c) {
  if (c === "High Risk") return "🔴 High Risk";
  if (c === "Suspicious") return "🟠 Suspicious";
  return "🟢 Legitimate";
}

export default function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails().then(setEmails);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Phishing Detection Dashboard</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>Subject</th>
            <th>Risk</th>
            <th>Score</th>
            <th>Reasons</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.from}</td>
              <td>{e.subject}</td>
              <td>{badge(e.classification)}</td>
              <td>{e.risk_score}</td>
              <td>
                <ul>
                  {e.reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
