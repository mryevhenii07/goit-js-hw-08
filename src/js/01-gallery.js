// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const refs = {
  galleryEl: document.querySelector('.gallery'),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      
        class="gallery__image"
        src="${preview}"
      
        alt="${description}"
       
      />
    </a>
  </div>`;
  })
  .join('');
refs.galleryEl.insertAdjacentHTML('afterbegin', markupHtml);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
