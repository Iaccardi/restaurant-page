import {pageLoad} from './pageload';
import {mainContent} from './pageload';
import './styles/style.css'
import { loadHomepage } from './homepage';
import {loadAboutPage} from './about'
import {loadMenuPage} from './menu'

//Creates Tabs and Adds Event Listeners// 

export function createMenu() {
    let mainMenu = document.createElement('div');
    mainContent.appendChild(mainMenu);

    let homepageButton = document.createElement('button');
    homepageButton.textContent = 'Home';
    mainMenu.appendChild(homepageButton);
    homepageButton.addEventListener('click', loadHomepage);

    let aboutpageButton = document.createElement('button');
    aboutpageButton.textContent = 'About Us';
    mainMenu.appendChild(aboutpageButton);
    aboutpageButton.addEventListener('click', loadAboutPage);

    let menupageButton = document.createElement('button');
    menupageButton.textContent = 'Menu';
    mainMenu.appendChild(menupageButton);
    menupageButton.addEventListener('click', loadMenuPage);
}




createMenu();



loadHomepage();