import axios from 'axios';

const url = 'http://localhost:9999/post';

 export const fetchPost = () => axios.get(url);
 