import {
    PageModule
} from "./PageLoadModule";

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
            }
        })
    })
}

const imageSlider = () => {
    const slides = document.querySelectorAll('img.banner-img');
    slides.forEach((slide, i) => {
        ((i)=>{
            setTimeout(() => {
                if (slide.classList.contains('hide')){
                    slide.classList.remove('hide')
                }else{
                    slide.classList.add('hide')
                }
            }, 3000*i);        
        })(i)        
    })
}

const runApp = () => {
    PageModule.body();
    PageModule.home();    
    pageNavigation();
    imageSlider()
}

runApp()