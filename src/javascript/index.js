import {
    HomeModule,
    AboutModule,
    MenuModule,
    OrderModule
} from "./PageLoadModule";

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li");
    const content = document.querySelector("#tab-content");
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
            tab.classList.add("active");
            if (index === 0) {                
                content.innerHTML = HomeModule.load();
            } else if (index === 1) {
                content.innerHTML = AboutModule.load();
            } else if (index === 2) {
                content.innerHTML = MenuModule.load();
            } else if (index === 3) {
                content.innerHTML = OrderModule.load();
            }
        })
    })
    content.innerHTML = HomeModule.load();
}
const runApp = () => {
    pageNavigation();
}
runApp()