import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://2ab4-2a02-a312-c540-ef00-11bc-a25e-1b88-58d5.ngrok.io',
});

export default instance;
