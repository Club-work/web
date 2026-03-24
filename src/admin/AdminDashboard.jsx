import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-box">
      <h2>Admin Dashboard</h2>

      <Link to="/admin/events">Manage Events</Link><br/>
      <Link to="/admin/president">Manage Presidents</Link><br/>
      <Link to="/admin/member">Manage Members</Link><br/>

          </div>
  );
};

export default AdminDashboard;
