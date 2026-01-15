import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../config/api";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [generatedToken, setGeneratedToken] = useState("");
  const [enteredToken, setEnteredToken] = useState("");

  const nav = useNavigate();

  // STEP 1: verify username + password → generate token
  const generateToken = async () => {
    try {
      const res = await adminLogin({ username, password });

      setGeneratedToken(res.data.token);

      alert("✅ Token generated successfully");
    } catch {
      alert("❌ Invalid Admin Credentials");
    }
  };

  // STEP 2: verify pasted token → allow dashboard
  const confirmToken = () => {
    if (!generatedToken) {
      alert("Generate token first");
      return;
    }

    if (enteredToken !== generatedToken) {
      alert("❌ Token mismatch");
      return;
    }

    // 🔐 finally store token
    localStorage.setItem("adminToken", enteredToken);

    nav("/admin/dashboard");
  };

  return (
    <div className="admin-box">
      <h2>Admin Login</h2>

      {/* USERNAME */}
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* GENERATE TOKEN */}
      <button onClick={generateToken}>Verify & Generate Token</button>

      {/* SHOW GENERATED TOKEN */}
      {generatedToken && (
        <>
          <p style={{ marginTop: "10px" }}>🔐 Generated Token</p>
          <textarea
            readOnly
            value={generatedToken}
            style={{ width: "100%", height: "80px" }}
          />

          <p>Paste token below 👇</p>
          <input
            placeholder="Paste token here"
            value={enteredToken}
            onChange={(e) => setEnteredToken(e.target.value)}
          />

          <button onClick={confirmToken}>OK → Login</button>
        </>
      )}
    </div>
  );
};

export default AdminLogin;
