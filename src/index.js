import axios from "axios";

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages() {

    const params =  {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,

    }

    const res = await axios.get(`?key=${API_KEY}&q=cat&`, params);
    const i = res.data;
    const f = i.hits
    console.log();
}

getImages();





