
const metaURL = 'http://0.0.0.0:5500/works/n-pola/04-results/images/metadata.json';

document.addEventListener("DOMContentLoaded", function() {
    initImages();
});

function initImages() {
    const responsePromise = fetch(metaURL);
    responsePromise.then(function(response) {
        const dataPromise = response.json();
        dataPromise.then(function(data) {
            currentData = data;
            renderImages(data);
        });
    });
}

function renderImages(imagesList) {
    const imageListElement = document.querySelector('[data-js-images]');
    const images = imagesList.map(function(image) {
        return `
            <li class="image-item">
            <img src="/works/n-pola/04-results/${image.src}">
            </li>`;
    }).join('');
    imageListElement.innerHTML = images;
    console.log(images);
}
