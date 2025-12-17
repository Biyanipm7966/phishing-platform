export async function fetchEmails() {
    const res = await fetch("http://localhost:8030/api/emails");
    return res.json();
  }
  