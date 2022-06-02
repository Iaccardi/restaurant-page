import {pageLoad} from './pageload';
import {mainContent} from './pageload';
import './styles/style.css'
import {pageTitle} from './pageload';
import { pageCopy } from './pageload';
import { clearImg } from './clearimg';
import { pageImgDiv } from './pageload';


export let aboutContent = 'I am a new Web Developer who is constantly learning about HTML/CSS/Javascript and front end libraries. This Restaurant page is one of the projects I have been working on'
let aboutUsPic = new Image();
aboutUsPic.src = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
export function loadAboutPage(){

    pageLoad('About Us', aboutContent);

    clearImg();

    mainContent.appendChild(pageImgDiv);
    pageImgDiv.appendChild(aboutUsPic);
    


}