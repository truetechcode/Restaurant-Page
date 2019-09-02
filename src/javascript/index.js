import {
    PageModule
} from "./PageLoadModule";
import {
    DropDownModule
} from './menuModule';

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li.nav-item");
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
            PageModule.clear();
            tabs.forEach(tab => {
                if (tab.classList.contains("active-nav-item")) {
                    tab.classList.remove("active-nav-item");
                }
            })
            tab.classList.add("active-nav-item");
            if (index === 0) {      
                PageModule.home();          
            } else if (index === 1) {
                PageModule.about();
            } else if (index === 2) {
                PageModule.menu();
            } else if (index === 3) {
                PageModule.order();
            }
        })
    })
}


const runApp = () => {
    PageModule.body();
    PageModule.home();    
    pageNavigation();
    DropDownModule.dropDownMenu();
}

runApp()