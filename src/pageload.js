

import './styles/style.css'

export let mainContent = document.getElementById('content');
export let pageTitle = document.createElement('h1');
export let pageCopy = document.createElement('p');
export let pageImgDiv = document.createElement('div');
export let pageImg = new Image();




export function pageLoad(page, content) {


    pageTitle.textContent = '';
    

    // while (pageImgDiv.firstChild) {
    //     //The list is LIVE so it will re-index each call
    //     pageImgDiv.removeChild(pageImgDiv.firstChild);
    // }
    
    //TITLE OF THE PAGE//
    pageTitle.textContent = page;
    mainContent.appendChild(pageTitle);

    //PARAGRAPH CONTENT OF THE PAGE//
    pageCopy.textContent = '';
    pageCopy.textContent = content;
    mainContent.appendChild(pageCopy);



}