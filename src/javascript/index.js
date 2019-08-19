import {HomeModule, AboutModule, MenuModule, OrderModule} from "./PageLoadModule";

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li");
    const content = document.querySelector("#tab-content");
    let page = "";
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
            if (index === 0){
                HomeModule.load();
            } else if (index === 1) {
                AboutModule.load();
            } else if (index === 2) {
                MenuModule.load();
            } else if (index === 3) {
                OrderModule.load();
            }
        })
    })
}

pageNavigation();