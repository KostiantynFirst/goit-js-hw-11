import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchForm = document.querySelector('.js-search-form');
const formInput = document.querySelector('.form-control')
const articleContainer = document.querySelector('.js-articles-container');
const searchBtn = document.querySelector('.btn-submit');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

let form = null;
let currentPage = 1;
let totalImages = 0;

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

searchForm.addEventListener('submit', onSearch);

formInput.addEventListener('input', (e) => {
  if (e.currentTarget.value === '') {
    searchBtn.disabled = false;
    return;
  }
})

async function onSearch (e) {
  e.preventDefault();

  form = (e.currentTarget.elements.searchQuery.value).trim();
  // localStorage.setItem('value', form);

  if (form === null || form === '') {
    Notify.info('Please type something in the search input.');
    return;
  }

  console.log(form);
  clearArticlesContainer();
  resetPage();
  fetchArticles(form, currentPage);

  searchBtn.disabled = true;
}


async function fetchArticles(form, currentPage) {
  try {
    const res = await axios.get(`?key=${API_KEY}&q=${form}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`);
    // console.log(res.data.hits);
    const photos = res.data.hits;

   
      if (photos.length === 0) { 
          Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
                    );
                clearArticlesContainer();
                loadMoreBtnOff(); 
                return;
          }

          loadMoreBtn.style.display = 'block';

    totalImages = res.data.totalHits;
     
    

    // clearArticlesContainer();
    renderGallery(photos);

    }

catch(error) {
    console.log(error);
}
}

function loadMoreBtnOff() {
  loadMoreBtn.style.display = 'none';
}

function clearArticlesContainer() {
  articleContainer.innerHTML = '';

}

function resetPage() {
  currentPage = 1;
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

loadMoreBtn.addEventListener('click', addCards);

 function addCards() {
  // form = localStorage.getItem('value');
  incrementPage();

  const maxPageNumber = totalImages / 40;
  const maxPageNumberRoundUp = Math.ceil(maxPageNumber);
  console.log('currentPage: ', currentPage);
  console.log('maxPageNumber: ', maxPageNumber);
  console.log('maxPageNumberRoundUp: ', maxPageNumberRoundUp);
  
  fetchArticles(form, currentPage);

  if (currentPage === maxPageNumberRoundUp) {
    loadMoreBtnOff(); 
    Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  
  }

  
 
 
  

}



