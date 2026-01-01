import axios from "axios";

// Base URL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 🔐 Admin token attach pannradhu
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

/* -------------------- AUTH -------------------- */
export const adminLogin = (data) => API.post("/admin/login", data);

/* -------------------- EVENTS -------------------- */
export const getEvents = () => API.get("/events");
export const addEvent = (data) => API.post("/events", data);
export const updateEvent = (id, data) => API.put(`/events/${id}`, data);
export const deleteEvent = (id) => API.delete(`/events/${id}`);

/* -------------------- PRESIDENT -------------------- */
export const getPresidents = () => API.get("/presidents");
export const addPresident = (data) => API.post("/presidents", data);
export const updatePresident = (id, data) => API.put(`/presidents/${id}`, data);
export const deletePresident = (id) => API.delete(`/presidents/${id}`);

/* -------------------- MEMBERS -------------------- */
export const getMembers = () => API.get("/members");
export const addMember = (data) => API.post("/members", data);
export const updateMember = (id, data) => API.put(`/members/${id}`, data);
export const deleteMember = (id) => API.delete(`/members/${id}`);

/* -------------------- CONTACT -------------------- */
export const sendContactMessage = (data) =>
  API.post("/contact", data);
