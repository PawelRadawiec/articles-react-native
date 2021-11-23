import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://960e-2a02-a312-c540-ef00-c161-d747-e105-bc2b.ngrok.io',
});

export default instance;
