import { Routes, Route } from "react-router-dom";

// Public
import PublicLayout from "./Layout/PublicLayout";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Events from "./components/Events";
import Contact from "./components/Contact";

// Admin
import AdminLayout from "./admin/AdminLayout";
import AdminAuth from "./admin/AdminAuth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminEvents from "./admin/AdminEvents";
import AdminPresident from "./admin/AdminPresident";
import AdminMember from "./admin/AdminMember";

export default function App() {
  return (
    <Routes>

      {/* ---------- PUBLIC ROUTES ---------- */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* ---------- ADMIN ROUTES ---------- */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Login – NOT protected */}
        <Route path="login" element={<AdminLogin />} />

        {/* Protected routes */}
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
      </Route>

    </Routes>
  );
}