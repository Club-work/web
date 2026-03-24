import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../config/api";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  // 🔥 LOGOUT FIX (added)
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/"); // redirect to user page
  };

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    try {
      const res = await adminLogin({ username, password });
      setToken(res.data.token);
    } catch {
      alert("❌ Invalid admin credentials");
    }
  };

  const confirmLogin = () => {
    localStorage.setItem("adminToken", token);
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-box">
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Generate Token</button>

      {token && (
        <>
          <p>🔐 Generated Token</p>
          <textarea value={token} readOnly rows={4} />
          <button onClick={confirmLogin}>OK → Dashboard</button>
        </>
      )}

      {/* 🔴 LOGOUT BUTTON (added, nothing else changed) */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminLogin;