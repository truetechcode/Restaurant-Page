import {
    PageModule
} from "./PageLoadModule";
import { ValidationModule } from "./validationModule";

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li");
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
            PageModule.clear();
            if (index === 0) {      
                PageModule.home();          
            } else if (index === 1) {
                PageModule.about();
            } else if (index === 2) {
                PageModule.menu();
            } else if (index === 3) {
                PageModule.order();
                ValidationModule.inputs();
            }
        })
    })
}
const runApp = () => {
    PageModule.body()
    PageModule.home();    
    pageNavigation();
}

runApp()