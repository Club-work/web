import { useEffect, useState } from "react";
import {
  getPresidentMembers,
  addPresident,
  updatePresident,
  deletePresident,
} from "../config/api";

const AdminPresident = () => {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name:"", year:"", photo_url:"" });
  const [editId, setEditId] = useState(null);

  const load = async () => {
    const res = await getPresidentMembers();
    setList(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async () => {
    editId
      ? await updatePresident(editId, form)
      : await addPresident(form);

    setForm({ name:"", year:"", photo_url:"" });
    setEditId(null);
    load();
  };

  return (
    <div className="admin-box">
      <h2>Presidents</h2>

      <input placeholder="Name" value={form.name}
        onChange={e=>setForm({...form,name:e.target.value})} />

      <input placeholder="Year" value={form.year}
        onChange={e=>setForm({...form,year:e.target.value})} />

      <input placeholder="Photo URL" value={form.photo_url}
        onChange={e=>setForm({...form,photo_url:e.target.value})} />

      <button onClick={submit}>{editId?"Update":"Add"}</button>

    {list.map(p => (
  <div
    key={p.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px"
    }}
  >
    <span style={{ flex: 1 }}>
      {p.name} ({p.year})
    </span>

    <div className="action-buttons">
      <button
        onClick={() => {
          setEditId(p.id);
          setForm(p);
        }}
      >
        Edit
      </button>

      <button
        onClick={() => deletePresident(p.id).then(load)}
      >
        Delete
      </button>
    </div>
  </div>
))}
    </div>
  );
};

export default AdminPresident;
