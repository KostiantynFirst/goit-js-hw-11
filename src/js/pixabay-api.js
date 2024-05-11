import axios from 'axios';

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchArticles(value) {
  try {
    const res = await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`);
    return res.data.hits;
  } catch (error) {
    throw error;
  }
}