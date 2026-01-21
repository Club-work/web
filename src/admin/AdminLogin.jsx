import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../config/api";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    try {
      setLoading(true);

      const res = await adminLogin({ username, password });

      // 🔐 SAVE TOKEN
      localStorage.setItem("adminToken", res.data.token);

      alert("✅ Admin login successful");

      // 🚀 REDIRECT
      navigate("/admin/dashboard");
    } catch (err) {
      alert("❌ Invalid admin credentials");
    } finally {
      setLoading(false);
    }
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

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default AdminLogin;
