import { useEffect, useState } from "react";
import {
  getMembersAdmin,
  addMember,
  updateMember,
  deleteMember
} from "../config/api";

const AdminMember = () => {
  const [members, setMembers] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    photo_url: "",
    president_id: ""
  });

  // 🔄 LOAD MEMBERS
  const loadMembers = async () => {
    try {
      const res = await getMembersAdmin();
      setMembers(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to load members");
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  // ➕ ADD / ✏️ UPDATE
  const submit = async () => {
    try {
      if (editId) {
        await updateMember(editId, form);
      } else {
        await addMember(form);
      }

      setForm({
        name: "",
        role: "",
        photo_url: "",
        president_id: ""
      });
      setEditId(null);
      loadMembers();
    } catch (err) {
      console.error(err);
      alert("❌ Member operation failed");
    }
  };

  // ✏️ EDIT
  const editMember = (m) => {
    setEditId(m.id);
    setForm({
      name: m.name,
      role: m.role,
      photo_url: m.photo_url,
      president_id: m.president_id
    });
  };

  // 🗑 DELETE
  const removeMember = async (id) => {
    if (!window.confirm("Delete this member?")) return;
    await deleteMember(id);
    loadMembers();
  };

  return (
    <div className="admin-box">
      <h2>Members</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <input
        placeholder="Photo URL"
        value={form.photo_url}
        onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
      />

      <input
        placeholder="President ID"
        value={form.president_id}
        onChange={(e) =>
          setForm({ ...form, president_id: e.target.value })
        }
      />

      <button onClick={submit}>
        {editId ? "Update Member" : "Add Member"}
      </button>

      <hr />

      {/* 👥 LIST */}
      {members.length === 0 && <p>No members found</p>}

      {members.map((m) => (
  <div
    key={m.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // 🔥 fix alignment
      marginBottom: "8px"
    }}
  >
    <span style={{ flex: 1 }}>
      <b>{m.name}</b> — {m.role} (President ID: {m.president_id})
    </span>

    <div className="action-buttons">
      <button onClick={() => editMember(m)}>Edit</button>
      <button onClick={() => removeMember(m.id)}>Delete</button>
    </div>
  </div>
))}
    </div>
  );
};

export default AdminMember;
