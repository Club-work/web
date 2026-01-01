import { useState } from "react";
import { addMember, updateMember, deleteMember } from "../config/api";

const AdminMember = () => {
  const [form, setForm] = useState({
    name:"", role:"", photo_url:"", president_id:""
  });
  const [editId, setEditId] = useState(null);

  const submit = async () => {
    editId
      ? await updateMember(editId, form)
      : await addMember(form);

    setForm({ name:"", role:"", photo_url:"", president_id:"" });
    setEditId(null);
  };

  return (
    <div className="admin-box">
      <h2>Members</h2>

      <input placeholder="Name"
        value={form.name}
        onChange={e=>setForm({...form,name:e.target.value})} />

      <input placeholder="Role"
        value={form.role}
        onChange={e=>setForm({...form,role:e.target.value})} />

      <input placeholder="Photo URL"
        value={form.photo_url}
        onChange={e=>setForm({...form,photo_url:e.target.value})} />

      <input placeholder="President ID"
        value={form.president_id}
        onChange={e=>setForm({...form,president_id:e.target.value})} />

      <button onClick={submit}>{editId?"Update":"Add"}</button>
    </div>
  );
};

export default AdminMember;
