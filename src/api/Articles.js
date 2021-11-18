import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3459-89-64-114-53.ngrok.io',
});

export default instance;
