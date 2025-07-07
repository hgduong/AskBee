// API quản lí user
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const updateUserStatus = (username: string, status: string) =>
  axios.put(`${API_URL}/users/${username}/status`, { status });
