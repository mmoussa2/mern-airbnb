import axios from "axios";

export const composeReservation = reservationData => {
  return axios.post("/api/reservations/create", reservationData);
};

export const fetchAllReservations = () =>{
  return axios.get("/api/reservations/all")
}


//..................................check these on property Util ...................
export const fetchProperty = (id) => {
  return axios.get(`/api/properties/${id}`);
};