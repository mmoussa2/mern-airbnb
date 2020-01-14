import axios from "axios";

export const all = () => {
  return axios.get("/api/users/all");
};


