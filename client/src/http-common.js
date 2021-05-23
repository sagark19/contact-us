import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/contact-us",
  headers: {
    "Content-type": "application/json"
  }
});