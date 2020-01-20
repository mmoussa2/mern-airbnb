import axios from "axios";

export const create =  commentData =>{
  return axios.post('/api/comments/create', commentData);
};

export const all = ()=>{
  return axios.get('/api/comments/all');
};


export const fetchComments = (propertyId) => {
  return axios.get(`/api/comments/${propertyId}`);
};