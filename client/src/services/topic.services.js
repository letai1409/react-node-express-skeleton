import { API_ENDPOINT_V1 } from '../settings';
import axios from 'axios';

export const getTopics = () => {
  return axios
    .get(API_ENDPOINT_V1 + 'topics')
    .then(res => res.data)
    .then(res => res.data);
};

