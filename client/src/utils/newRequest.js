import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export default newRequest;
