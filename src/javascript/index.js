import {
    PageModule
} from "./PageLoadModule";

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li");
    const content = document.querySelector("#tab-content");
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
                content.innerHTML = "";
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
    PageModule.body()
    pageNavigation();
    PageModule.home();
}

runApp()