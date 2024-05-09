import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const articleContainer = document.querySelector('.gallery');

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';


const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let form = (e.currentTarget.elements.searchQuery.value).trim();
   if (form === null || form === '') {
    iziToast.info({
    title: 'Please type something in the search input',
      position: 'topRight',
    });
   } else {
     fetchArticles(form)
     console.log(form);
     searchForm.reset();
  }

})

async function fetchArticles(value) {
 

    const res = await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`);
    console.log(res.data.hits);
    const photos = res.data.hits;
    
    if (photos.length === 0) {
        
      iziToast.error({
        title: 'Sorry, there are no images matching your search query',
        position: 'topRight',
      })
    } else {
      renderGallery(photos);
    }
  }


function renderGallery(images) {
  const createMarkupPage = images.map(article => {
    return `
    <div class="photo-card">
        <a class ="thumb" href="${article.largeImageURL}"><img class="img" src="${article.webformatURL}" alt="${article.tags}" loading="lazy" /> </a> 
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


