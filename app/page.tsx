"use client";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testBackend = async () => {
    setLoading(true);
    try {
      const apiUrl = "https://rayvice-backend.onrender.com";
      const res = await fetch(`${apiUrl}/api/health`);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700 }}>🚀 Rayvice is Running</h1>
      <button
        onClick={testBackend}
        disabled={loading}
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: 8,
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: 14,
          cursor: "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Testing..." : "Test Backend"}
      </button>
      {response && (
        <pre
          style={{
            background: "#f4f4f5",
            border: "1px solid #e4e4e7",
            borderRadius: 8,
            padding: "0.75rem 1rem",
            fontSize: 14,
            maxWidth: 480,
          }}
        >
          {response}
        </pre>
      )}
    </main>
  );
}
