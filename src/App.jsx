import { Routes, Route } from "react-router-dom";

// Public components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";

// Admin components
import AdminAuth from "./admin/AdminAuth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEvents from "./admin/AdminEvents";
import AdminPresident from "./admin/AdminPresident";
import AdminMember from "./admin/AdminMember";

export default function App() {
  return (
    <>
      {/* ---------- PUBLIC LAYOUT ---------- */}
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* ---------- ADMIN ROUTES ---------- */}

        {/* LOGIN – NOT protected */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminAuth>
              <AdminDashboard />
            </AdminAuth>
          }
        />

        <Route
          path="/admin/events"
          element={
            <AdminAuth>
              <AdminEvents />
            </AdminAuth>
          }
        />

        <Route
          path="/admin/president"
          element={
            <AdminAuth>
              <AdminPresident />
            </AdminAuth>
          }
        />

        <Route
          path="/admin/member"
          element={
            <AdminAuth>
              <AdminMember />
            </AdminAuth>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
