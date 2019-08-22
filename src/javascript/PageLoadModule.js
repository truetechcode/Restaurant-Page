const PageModule = (() => {
    let mod = {}
    let contain = document.querySelector('#content')
    let container;
    mod.body = () => {
        let head = document.createElement('header');
        let h1 = document.createElement('h1');
        let nav = document.createElement('nav')
        let ul = document.createElement('ul')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3 = document.createElement('li')
        let li4 = document.createElement('li')
        container = document.createElement('div')
        let p = document.createElement('p')
        ul.classList.add('nav')
        li1.classList.add('nav-item')
        li2.classList.add('nav-item')
        li3.classList.add('nav-item')
        li4.classList.add('nav-item')
        p.classList.add('footer')

        li1.innerHTML =  'Home'
        li2.innerHTML =  'About'
        li3.innerHTML =  'Menu'
        li4.innerHTML =  'Order'

        h1.innerHTML =  'The Meal Restaurant App'
        head.appendChild(h1)
        container.id = "tab-content"
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        nav.appendChild(ul);        
        p.innerHTML =  '&copy; The Meal Restaurant'

        contain.appendChild(head);
        contain.appendChild(nav);
        contain.appendChild(container)
        contain.appendChild(p)
    }

    let header = document.createElement('h3')
    let para1 = document.createElement('p')
    let para2 = document.createElement('p')
    let para3 = document.createElement('p')
    let span = document.createElement('span')

    mod.home = () => {
        let panel = document.createElement('img')
        panel.setAttribute( "alt","dinner-set")
        panel.setAttribute("src", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")
        panel.classList.add('banner-img')
        container.appendChild(panel)
    }
    mod.about = () => {
        para1.classList.add('description')
        header.innerHTML =  'About Us'
        para1.appendChild(span)
        para1.innerHTML =  'The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.'
        para2.innerHTML =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        para3.innerHTML =  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        span.innerHTML =  'You are welcome'

        container.appendChild(header);
        container.appendChild(para1);
        container.appendChild(para2)
        container.appendChild(para3)
    }
    mod.menu = () => {
        let menudiv = document.createElement('div');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        para1.classList.add('description');
        menudiv.id = 'menu-items';
        img1.classList.add('menu-img');
        img2.classList.add('menu-img');
        img3.classList.add('menu-img');
        header.innerHTML =  "Our Chef's Menu"
        para1.appendChild(span)
        para1.innerHTML =  'The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.'
        span.innerHTML =  'You are welcome'
        img1.setAttribute('alt', 'menu1-img')
        img2.setAttribute('alt', 'menu2-img')
        img3.setAttribute('alt', 'menu3-img')
        img1.setAttribute('src', 'https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')
        img2.setAttribute('src', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
        img3.setAttribute('src', 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80')

        container.appendChild(header);
        container.appendChild(para1);
        container.appendChild(menudiv)
        menudiv.appendChild(img1)
        menudiv.appendChild(img2)
        menudiv.appendChild(img3)

    }
    mod.order = () => {
        para1.classList.add('description')
        header.innerHTML =  'Place Your Order'
        para1.appendChild(span)
        para1.innerHTML =  'The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.'
        para2.innerHTML =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        para3.innerHTML =  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        span.innerHTML =  'You are welcome'

        container.appendChild(header);
        container.appendChild(para1);
        container.appendChild(para2)
        container.appendChild(para3)
    }

    mod.clear = () => {
        const content = document.querySelector("#tab-content");
        content.innerHTML = "";
    }

    return mod;
})();

export {
    PageModule
}