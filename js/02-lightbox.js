import {
    galleryItems
} from './gallery-items.js';

console.log(galleryItems);

const element = document.querySelector(".gallery");

const galleryElement = galleryItems
    .map(({
        preview,
        original,
        description
    }) => {
        return `<a class="gallery__item"="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}"/>
    </a>`;
    })
    .join("");

element.innerHTML = galleryElement;

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});