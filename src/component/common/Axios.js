import axios from "axios";
const instance = axios.create({baseURL: "http://192.168.0.235:5000/api"});
// const instance = axios.create({baseURL: 'https://websiteapi.softstorm.in/api'});
export default instance;

var token = localStorage.getItem("ssAdmin");
export const api = axios.create({
  baseURL: "http://192.168.0.235:5000/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: token,
  },
});
