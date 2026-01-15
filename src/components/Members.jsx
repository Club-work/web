import { useEffect, useState } from "react";
import {
  addMember,
  updateMember,
  deleteMember,
  getMembersAdmin
} from "../config/api";

const AdminMember = () => {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    photo_url: "",
    president_id: ""
  });
  const [editId, setEditId] = useState(null);

  // ✅ Load members (LIKE EVENTS)
  const loadMembers = async () => {
    const res = await getMembersAdmin();
    setMembers(res.data);
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const submit = async () => {
    if (editId) {
      await updateMember(editId, form);
    } else {
      await addMember(form);
    }

    setForm({ name: "", role: "", photo_url: "", president_id: "" });
    setEditId(null);
    loadMembers();
  };

  return (
    <div className="admin-box">
      <h2>Members</h2>

      {/* ---------- FORM ---------- */}
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Role"
        value={form.role}
        onChange={e => setForm({ ...form, role: e.target.value })}
      />

      <input
        placeholder="Photo URL"
        value={form.photo_url}
        onChange={e => setForm({ ...form, photo_url: e.target.value })}
      />

      <input
        placeholder="President ID"
        value={form.president_id}
        onChange={e => setForm({ ...form, president_id: e.target.value })}
      />

      <button onClick={submit}>
        {editId ? "Update Member" : "Add Member"}
      </button>

      {/* ---------- LIST ---------- */}
      <ul style={{ marginTop: "20px" }}>
        {members.map(m => (
          <li key={m.id}>
            <b>{m.name}</b> — {m.role}

            <button
              onClick={() => {
                setEditId(m.id);
                setForm(m);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                deleteMember(m.id).then(loadMembers);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMember;
