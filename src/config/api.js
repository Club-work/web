import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 🔐 Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

/* ---------------- AUTH ---------------- */
export const adminLogin = (data) =>
  API.post("/admin/login", data);

/* ---------------- EVENTS ---------------- */
// Public read
export const getEvents = () =>
  API.get("/events");

// Admin CRUD
export const addEvent = (data) =>
  API.post("/admin/events", data);

export const updateEvent = (id, data) =>
  API.put(`/admin/events/${id}`, data);

export const deleteEvent = (id) =>
  API.delete(`/admin/events/${id}`);

/* ---------------- PRESIDENT ---------------- */
export const addPresident = (data) =>
  API.post("/admin/president", data);

export const updatePresident = (id, data) =>
  API.put(`/admin/president/${id}`, data);

export const deletePresident = (id) =>
  API.delete(`/admin/president/${id}`);

/* ---------------- MEMBERS ---------------- */
export const addMember = (data) =>
  API.post("/admin/members", data);

export const updateMember = (id, data) =>
  API.put(`/admin/members/${id}`, data);

export const deleteMember = (id) =>
  API.delete(`/admin/members/${id}`);

/* ---------------- CONTACT ---------------- */
export const sendContactMessage = (data) =>
  API.post("/contact", data);

export default API;
