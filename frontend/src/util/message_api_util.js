import axios from "axios";

export const create = messageData => {
  return axios.post("/api/messages/create", messageData);
};

export const all = () => {
  return axios.get("/api/messages/all");
};


