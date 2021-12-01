import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://9fdf-2a02-a312-c540-ef00-f9c2-965e-7d57-255c.ngrok.io',
});

export default instance;
