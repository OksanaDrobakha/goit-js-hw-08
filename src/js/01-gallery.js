// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imgElements = galleryItems.reduce(
  (acum, { preview, original, description }) =>
    (acum += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`),
  ''
);

gallery.insertAdjacentHTML('beforeend', imgElements);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
