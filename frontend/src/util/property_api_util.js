import axios from "axios";

export const create = propertyData => {
  return axios.post("/api/properties/create", propertyData);
};