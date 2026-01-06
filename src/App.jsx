import { Routes, Route } from "react-router-dom";

// Public
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";

// Admin
import AdminAuth from "./admin/AdminAuth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEvents from "./admin/AdminEvents";
import AdminPresident from "./admin/AdminPresident";
import AdminMember from "./admin/AdminMember";

/* ---------- Public Layout ---------- */
const PublicLayout = () => (
  <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="members" element={<Members />} />
      <Route path="events" element={<Events />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
);

/* ---------- Admin Layout ---------- */
const AdminLayout = () => (
  <Routes>
    {/* LOGIN – NOT PROTECTED */}
    <Route path="login" element={<AdminLogin />} />

    {/* PROTECTED ROUTES */}
    <Route
      path="dashboard"
      element={
        <AdminAuth>
          <AdminDashboard />
        </AdminAuth>
      }
    />

    <Route
      path="events"
      element={
        <AdminAuth>
          <AdminEvents />
        </AdminAuth>
      }
    />

    <Route
      path="president"
      element={
        <AdminAuth>
          <AdminPresident />
        </AdminAuth>
      }
    />

    <Route
      path="member"
      element={
        <AdminAuth>
          <AdminMember />
        </AdminAuth>
      }
    />
  </Routes>
);

/* ---------- App ---------- */
export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/*" element={<PublicLayout />} />
    </Routes>
  );
}
