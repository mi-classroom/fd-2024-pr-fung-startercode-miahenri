const worksURL = 'http://0.0.0.0:5500/works.json';
let currentData = null;

document.addEventListener('DOMContentLoaded', function() {
    initWorks();
});

function initWorks() {
    const responsePromise = fetch(worksURL);
    responsePromise.then(function(response) {
        const dataPromise = response.json();
        dataPromise.then(function(data) {
            currentData = data;
            renderWorks(data);
        });
    });
}

function renderWorks(worksList) {
    const workListElement = document.querySelector('[data-js-finished-works]');
    const works = worksList.map(function(work) {
        const dateString = work.date;
        const year = dateString.split('-')[0]; // "2024"
        console.log(year); // Ausgabe: 2024

        return `
            <li class="work-item">
            <img src="${work.image}">
            <div class="work-item-content">
            <h3>${work.title}</h3>
            <ul class="taglist">
              <li>${work.author}</li>
              <li>${work.type}</li>
              <li>${year}</li>
            </ul>
            </div>
          </li>
        `;
}).join('');
workListElement.innerHTML = works;
console.log(works);
}