import {pageLoad} from './pageload';
import {mainContent} from './pageload';
import './styles/style.css'
import {pageTitle} from './pageload';
import { pageCopy } from './pageload';
import { clearImg } from './clearimg';
import { pageImg } from './pageload';
import {pageImgDiv} from './pageload';


let homepageImg = new Image();
homepageImg.src = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export let homeContent = 'Welcome to my restaurant page. This was created using Webpack and Javascript only. The project did not allow any hard coding of HTML and everything was rendered using modules and javascript'

export function loadHomepage(){

    pageLoad("My Restaurant", homeContent);

    clearImg();

    let homePicContent = document.createElement('div');
    mainContent.appendChild(homePicContent);
    homePicContent.appendChild(pageImgDiv);
    pageImgDiv.appendChild(homepageImg);

    homePicContent.classList.add('homeContentDiv')



}