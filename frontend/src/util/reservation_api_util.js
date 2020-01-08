import axios from "axios";

export const create = reservationData => {
 
  return axios.post("/api/reservation/create", reservationData);
};


//..................................check these on property Util ...................
export const fetchProperty = (id) => {
  return axios.get(`/api/properties/${id}`);
};