import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_FUNCTION_API,
});

export default instance;
