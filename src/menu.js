import {pageLoad} from './pageload';
import {mainContent} from './pageload';
import './styles/style.css'
import {pageTitle} from './pageload';
import { pageCopy } from './pageload';
import {pageImgDiv} from './pageload'
import {clearImg} from './clearimg';
import {pageImg} from './pageload'

pageImg.src = 'https://cdn1.vectorstock.com/i/1000x1000/67/95/breakfast-menu-template-for-restaurant-and-cafe-vector-30246795.jpg';

export let menuContent = 'Please find out menu below and let us know how we can assist you!';

export function loadMenuPage(){

    pageLoad('Menu', menuContent);
    
    
    clearImg(); 
    mainContent.appendChild(pageImgDiv);
    pageImgDiv.appendChild(pageImg);
    
    console.log(pageImg);
}