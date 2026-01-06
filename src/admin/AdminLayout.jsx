import { Outlet } from "react-router-dom";
const AdminLayout = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />

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
