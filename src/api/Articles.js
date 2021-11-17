import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://22ae-2a02-a312-c540-ef00-6093-7cdf-842f-ddf7.ngrok.io',
});

export default instance;
