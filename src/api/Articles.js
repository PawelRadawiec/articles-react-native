import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://cad6-89-64-114-32.ngrok.io',
});

export default instance;
