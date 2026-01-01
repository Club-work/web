import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Members from "./components/Members.jsx";
import Events from "./components/Events.jsx";
import Contact from "./components/Contact.jsx";

// Admin components
import AdminAuth from "./admin/AdminAuth.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminEvents from "./admin/AdminEvents.jsx";
import AdminPresident from "./admin/AdminPresident.jsx";
import AdminMember from "./admin/AdminMember.jsx";

/* ---------- Public Layout ---------- */
const PublicLayout = () => (
  <>
    <Navbar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </>
);

/* ---------- Admin Layout ---------- */
const AdminLayout = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
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
);

/* ---------- App ---------- */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
