import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://4f80-94-75-72-154.ngrok.io',
});

export default instance;
