import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../config/api";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) nav("/admin/dashboard");
  }, []);

  const login = async () => {
    try {
      const res = await adminLogin({ username, password });

      // 🔐 store token silently
      localStorage.setItem("adminToken", res.data.token);

      nav("/admin/dashboard");
    } catch {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="admin-box">
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};

export default AdminLogin;
