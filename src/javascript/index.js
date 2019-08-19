import {HomeModule, AboutModule, MenuModule, OrderModule} from "./PageLoadModule";

const pageNavigation = () => {
    const tabs = document.querySelectorAll("ul li");
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', event => {
            if(index === 0){
                alert("Page 1")
            } else if (index === 1) {
                alert("Page 2")                
            } else if (index === 2) {
                alert("Page 3")                
            } else if (index === 3) {
                alert("Page 4")                
            }
        })
    })
}

pageNavigation();