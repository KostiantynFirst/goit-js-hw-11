import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

let currentPage = 1;

const formInput = document.querySelector('.form-control');
const formBtn = document.querySelector('.btn');
const loadMoreBtn = document.querySelector('.button');
const articlesList = document.querySelector('.articles');

let searchQuery = null;

formInput.addEventListener('input', debounce (e => {
    searchQuery = e.target.value;
    localStorage.setItem('search-value', searchQuery.trim())
}, 250));


formBtn.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = localStorage.getItem('search-value');
    if (!searchInput) {
        Notify.info('Please type something in the search input.');
        return;
    }

    getImages(searchQuery, currentPage);
} )




const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = async (searchInput, currentPage) => {

    const params =  {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q: searchInput

    }

    try {
        const res = await axios.get(`?key=${API_KEY}?${params}&page=${currentPage}`);
        console.log(res.data.hits);
        const photos = res.data.hits;
        if (photos.length === 0) {
            Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.'
              );
              return;
        }

        loadMoreBtn.style.display = 'block';

        const createMarkupPage = photos.map(article => {
            return `
            <div class="photo-card">
              <div class ="thumb">
                <img class="img" src="${article.webformatURL}" alt="${article.tags}" loading="lazy" />
              </div>
              <div class="info">
                <p class="info-item">
                  <b>Likes</b>
                  ${article.likes}
                </p>
                <p class="info-item">
                  <b>Views</b>
                  ${article.views}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${article.comments}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${article.downloads}
                </p>
              </div>
            </div>
          `;
          })
          .join('');

    
          articlesList.insertAdjacentHTML('beforeend', createMarkupPage);
    }

    catch(error) {
        console.log(error);
    }

    
}







