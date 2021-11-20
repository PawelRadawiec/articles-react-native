import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://5bb0-2a02-a312-c540-ef00-dcfd-bff2-c2ff-ef4e.ngrok.io',
});

export default instance;
