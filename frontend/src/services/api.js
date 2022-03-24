import axios from "axios";
const api = axios.create({
  baseURL:  "https://squad19mangut.herokuapp.com" 
});
export default api;