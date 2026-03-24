import { useEffect, useState } from "react";
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent
} from "../config/api";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    categories: "",
    details: "",
    gform_link: "",
    registration_open: false
  });
  const [editId, setEditId] = useState(null);

  const load = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async () => {
    try {
      if (editId) {
        await updateEvent(editId, form);
      } else {
        await addEvent(form);
      }

      setForm({
        title: "",
        categories: "",
        details: "",
        gform_link: "",
        registration_open: false
      });
      setEditId(null);
      load();
    } catch (err) {
      alert("Event operation failed");
    }
  };

  return (
    <div className="admin-box">
      <h2>Events</h2>

      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Category"
        value={form.categories}
        onChange={e => setForm({ ...form, categories: e.target.value })}
      />

      <textarea
        placeholder="Details"
        value={form.details}
        onChange={e => setForm({ ...form, details: e.target.value })}
      />

      <input
        placeholder="Google Form Link"
        value={form.gform_link}
        onChange={e => setForm({ ...form, gform_link: e.target.value })}
      />

      <label>
        <input
          type="checkbox"
          checked={form.registration_open}
          onChange={e => setForm({ ...form, registration_open: e.target.checked })}
        />
        Registration Open
      </label>

      <button onClick={submit}>
        {editId ? "Update" : "Add"}
      </button>

     <ul>
  {events.map(e => (
    <li key={e.id}>
      <span>{e.title}</span>

      <div>
        <button
          onClick={() => {
            setEditId(e.id);
            setForm(e);
          }}
        >
          Edit
        </button>

        <button
          onClick={() => deleteEvent(e.id).then(load)}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default AdminEvents;
