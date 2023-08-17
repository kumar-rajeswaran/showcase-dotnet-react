import axios from "axios";
const token = ``;
export default axios.create({
  baseURL: `http://localhost:5140/api`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
