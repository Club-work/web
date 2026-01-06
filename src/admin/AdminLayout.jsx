import { Outlet } from "react-router-dom";
const AdminLayout = () => (
  <Routes>
    {/* this = /admin */}
    <Route index element={<AdminLogin />} />

    {/* this = /admin/dashboard */}
    <Route
      path="dashboard"
      element={
        <AdminAuth>
          <AdminDashboard />
        </AdminAuth>
      }
    />

    {/* this = /admin/events */}
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
