import axios from "axios";

export const create = searchData => {
  return axios.post("/api/searches/create", searchData);
};

export const all = () => {
  return axios.get("/api/searches/all");
};