import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY  = '31511712-b53d42f48d96ff6235f6befd4';
axios.defaults.baseURL = 'https://pixabay.com/api/';


const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let form = (e.currentTarget.elements.searchQuery.value).trim();
   if (form === null || form === '') {
    iziToast.info({
    title: 'Please type something in the search input',
    // message: 'Welcome!',
    });
   } else {
     fetchArticles(form)
     console.log(form);
  }

})


async function fetchArticles(value) {
  try {
      const res = await axios.get(`?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`);
      console.log(res.data.hits);
    const photos = res.data.hits;
    
        if (photos.length === 0) {
        
      iziToast.error({
        title: 'Sorry, there are no images matching your search query. Please try again.',
        message: 'Illegal operation',
      });
        }
    
  } catch (error) {
    console.log(error);
  }
}



fetchArticles();


// const searchForm = document.querySelector('.js-search-form');
// // const formInput = document.querySelector('.form-control')

// searchForm.addEventListener('submit', onSearch);

// async function onSearch (e) {
//   e.preventDefault();

//   form = (e.currentTarget.elements.searchQuery.value).trim();
//   // localStorage.setItem('value', form);

//   if (form === null || form === '') {
//     iziToast.info({
//     title: 'Please type something in the search input',
//     // message: 'Welcome!',
//     });
//   }

//   console.log(form);
//   // clearArticlesContainer();
//   // resetPage();
//   fetchArticles(form);

//   searchBtn.disabled = true;
// }

// async function fetchArticles(form) {
//   try {
//     const res = await axios.get(`?key=${API_KEY}&q=${form}&image_type=photo&orientation=horizontal&safesearch=true`);
//     console.log(res.data.hits);
//     const photos = res.data.hits;

       
//     if (photos.length === 0) {
        
//       iziToast.error({
//         title: 'Sorry, there are no images matching your search query. Please try again.',
//         message: 'Illegal operation',
//       });
//     }

//                 // clearArticlesContainer();
//         return;
//   }
//   catch(error) {
//     console.log(error);
// }
// }