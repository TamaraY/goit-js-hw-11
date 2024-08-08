import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImageByQueryy } from './js/pixabay-api.js';
import { galleryItems } from './js/render-functions';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('input[name="query"]');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const userQuery = searchInput.value.trim();

  if (!userQuery) {
    return iziToast.show({
      position: 'center',
      backgroundColor: 'orange',
      message: 'Please fill in a search field.',
    });
  }

  loader.style.display = 'block';

  searchImageByQueryy(userQuery)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        return iziToast.show({
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: 'white',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'green',
        messageColor: 'white',
        message: `Found ${data.totalHits} results.`,
      });

      console.log(data.hits);
      galleryItems(data.hits);
      searchForm.reset();
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'red',
        message: 'Error during the request. Please try again later.',
      });
    });
});
