import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { renderGallery } from "./js/render-functions"; 
import { fetchArticles } from "./js/pixabay-api";

const articleContainer = document.querySelector('.gallery');

const loaderHtml = '<div id="loader" class="loader"></div>';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleFormSubmit);
  
  function handleFormSubmit(e) { 
  e.preventDefault();

  let form = (e.currentTarget.elements.searchQuery.value).trim();
   if (form === null || form === '') {
    iziToast.info({
    title: 'Please type something in the search input',
      position: 'topRight',
    });
   } else {
     main(form)
     console.log(form);
     searchForm.reset();
     clearArticlesContainer();
  }

}

async function main(value) {
 
  try {

    const photos = await fetchArticles(value);
    
    if (photos.length === 0) {
        
      iziToast.error({
        title: 'Sorry, there are no images matching your search query',
        position: 'topRight',
      })
    } else {
        renderGallery(articleContainer, photos);
      }
      
  
  let lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
      
  } catch (error) {
    console.log(error)
  }

}


function clearArticlesContainer() {
  articleContainer.innerHTML = '';

}



