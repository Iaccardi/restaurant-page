import {pageImgDiv} from './pageload'
import { pageImg } from './pageload';


export function clearImg(){
while (pageImgDiv.firstChild) {
         //The list is LIVE so it will re-index each call
         pageImgDiv.removeChild(pageImgDiv.firstChild);
     }
    }