import axios from 'axios';

const API = axios.create({ baseURL: "https://cloud.iexapis.com/v1" });

export const loadQuote = symbol => {
  return API.get(`/stock/${symbol}/quote`).then(result => result.data);
};

export const loadChart = (symbol, range) => {
  return API.get(`/stock/${symbol}/chart/${range}`).then(result => result.data);
};
