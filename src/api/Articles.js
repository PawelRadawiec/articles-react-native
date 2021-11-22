import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://be15-2a02-a312-c540-ef00-191b-4b0a-72ef-aa37.ngrok.io',
});

export default instance;
