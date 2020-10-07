import 'regenerator-runtime'; /* for async await transpile */
import restaurants from '../DATA.json';
import '../styles/main.css';

let hamburgerMenu = document.querySelector('#hamburger');
let drawer = document.querySelector('#drawer');
let body = document.querySelector('body');
let listDataElement = document.querySelector('.lists');

function initData() {
    let listData = '';
    restaurants.forEach((data) => {
        listData += `
            <article class="card">
                <div class="card-img">
                    <span class="card-label">${data.city}</span>
                    <img src="${data.pictureId}" alt="${data.name}">
                </div>
                <div class="card-content">
                    <span class="rating">${data.rating} &#9733;</span>
                    <h3 class="card-title">${data.name}</h3>
                    <p class="card-desc">${data.description.substr(0, 150)}...</p>
                </div>
            </article>`;
    });

    listDataElement.innerHTML = listData;
}

function toggle(e) {
    e.stopPropagation();

    if (drawer.classList.contains('open')) {
        closeDrawer();
    } else {
        drawer.classList.add('open');
    }
}

function closeDrawer(e) {
    drawer.classList.remove('open');
}

hamburgerMenu.addEventListener('click', toggle);
body.addEventListener('click', closeDrawer);
drawer.addEventListener('click', (e) => e.stopPropagation());

initData();
