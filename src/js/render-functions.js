import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryLightbox;

function galleryItems(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  const imageItems = images.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
    <div class="card">
    <a href="${largeImageURL}" >
      <img src="${webformatURL}" alt="${tags}" /> </a>
      <div class="info">
<ul> 
           <li > <p class="info-name"> Likes: </p> <p>${likes}</p></li>
           <li ><p class="info-name"> Views: </p> <p>${views}</p></li>
          <li > <p class="info-name"> Comments: </p> <p>${comments}</p></li>
           <li ><p class="info-name"> Downloads: </p> <p>${downloads}</p></li>
      </ul>
          </div>
          </div>
`
  );

  gallery.insertAdjacentHTML('beforeend', imageItems.join(''));

  if (galleryLightbox) {
    galleryLightbox.refresh();
  } else {
    galleryLightbox = new SimpleLightbox('.gallery a', {});
  }
}

export { galleryItems };
