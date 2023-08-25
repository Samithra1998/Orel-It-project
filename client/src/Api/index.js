import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signin = (userData) => API.post("/users/signin", userData);
export const signup = (userData) => API.post("/users/signup", userData);

export const fetchCountries = () => axios.get('https://restcountries.com/v3.1/all')
export const fetchCountryDetails = (id) => axios.get(`https://restcountries.com/v3.1/alpha/${id}`)