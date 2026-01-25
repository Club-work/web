import { Routes, Route } from "react-router-dom";

/* ---------- PUBLIC ---------- */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";

/* ---------- ADMIN ---------- */
import AdminAuth from "./admin/AdminAuth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEvents from "./admin/AdminEvents";
import AdminPresident from "./admin/AdminPresident";
import AdminMember from "./admin/AdminMember";

/* ---------- PUBLIC LAYOUT ---------- */
function PublicLayout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

/* ---------- ADMIN LAYOUT ---------- */
function AdminLayout() {
  return (
    <Routes>
      {/* LOGIN – NO AUTH */}
      <Route path="/login" element={<AdminLogin />} />

      {/* PROTECTED */}
      <Route
        path="/dashboard"
        element={
          <AdminAuth>
            <AdminDashboard />
          </AdminAuth>
        }
      />

      <Route
        path="/events"
        element={
          <AdminAuth>
            <AdminEvents />
          </AdminAuth>
        }
      />

      <Route
        path="/president"
        element={
          <AdminAuth>
            <AdminPresident />
          </AdminAuth>
        }
      />

      <Route
        path="/member"
        element={
          <AdminAuth>
            <AdminMember />
          </AdminAuth>
        }
      />
    </Routes>
  );
}

/* ---------- ROOT ---------- */
export default function App() {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}
      <Route path="/*" element={<PublicLayout />} />

      {/* ADMIN PANEL */}
      <Route path="/admin/*" element={<AdminLayout />} />
    </Routes>
  );
}
