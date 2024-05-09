import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';


const searchForm = document.querySelector('.js-search-form');
const formInput = document.querySelector('.form-control')

searchForm.addEventListener('submit', onSearch);

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