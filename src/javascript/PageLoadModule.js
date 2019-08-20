const HomeModule = (() => {
    let mod = {}
    let page = "";
    mod.load = () => {
        page = `
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="dinner-set">
            `;
        return page;
    }
    return mod;
})();

const AboutModule = (() => {
    let mod = {}
    let page = "";
    mod.load = () => {
        page = `
        <h3>
                About Us
        </h3>                            
        <p class="description">
                <span>
                    You are welcome 
                </span>
                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             
            </p>
        <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>`;
        return page;
    }
    return mod;
})();

const MenuModule = (() => {
    let mod = {}
    let page = "";
    mod.load = () => {
        page = `
        <h3>
                Our Chef's Menu
        </h3>                            
        <p class="description">
                <span>
                    You are welcome 
                </span>
                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.
            </p>

            <div id="menu-items">
            <img class="menu-img" src="https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="menu1">
            <img class="menu-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="menu2">
            <img class="menu-img" src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80" alt="menu3">
            </div>`;
            return page;
    }
    return mod;
})();

const OrderModule = (() => {
    let mod = {}
    let page = "";
    mod.load = () => {
        page = `
        <h3>
                Place Your Order
        </h3>                            
            <p class="description">
                <span>
                    You are welcome 
                </span>
                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             
            </p>
        <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>`;
        return page;
    }
    return mod;
})();

export {
    HomeModule,
    AboutModule,
    MenuModule,
    OrderModule
}