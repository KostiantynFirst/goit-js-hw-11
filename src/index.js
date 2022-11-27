import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import debounce from 'lodash.debounce';

let currentPage = 1;
let searchQuery = null;

const searchForm = document.querySelector('.js-search-form');
const articleContainer = document.querySelector('.js-articles-container');
const searchBtn = document.querySelector('.btn');
const loadMoreBtn = document.querySelector('.button');


const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

searchForm.addEventListener('submit', onSearch)

 async function onSearch (e) {
  e.preventDefault();

  const form = (e.currentTarget.elements.searchQuery.value).trim();
  // const form = formValue.trim();

  if (form === null || form === '') {
    Notify.info('Please type something in the search input.');
    return;
  }

    try {
        const res = await axios.get(`?key=${API_KEY}&q=${form}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`);
        // console.log(res.data.hits);
        const photos = res.data.hits;

        if (photos.length === 0) {
              Notify.failure(
                  'Sorry, there are no images matching your search query. Please try again.'
                        );
                    return;
                  }

        clearArticlesContainer();
        renderGallery(photos);
        incrementPage();
        searchBtn.style.display = 'none';

          
        loadMoreBtn.style.display = 'block';

        loadMoreBtn.addEventListener('click', renderGallery(photos))
          

              }
    
    catch(error) {
        console.log(error);
    }

}

function clearArticlesContainer() {
  articleContainer.innerHTML = '';
}

function incrementPage() {
  currentPage += 1;
}

function renderGallery(images) {
  const createMarkupPage = images.map(article => {
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

        articleContainer.insertAdjacentHTML('beforeend', createMarkupPage);

}
 






