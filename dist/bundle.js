<<<<<<< HEAD
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const i=(()=>{let e,t={},n=document.querySelector("#content");t.body=()=>{let t=document.createElement("header"),i=document.createElement("h1"),a=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),l=document.createElement("li"),u=document.createElement("li");e=document.createElement("div");let c=document.createElement("p");r.classList.add("nav"),o.classList.add("nav-item","active-nav-item"),d.classList.add("nav-item"),l.classList.add("nav-item"),u.classList.add("nav-item"),c.classList.add("footer"),o.innerHTML="Home",d.innerHTML="About",l.innerHTML="Menu",u.innerHTML="Order",i.innerHTML="The Meal Restaurant App",t.appendChild(i),e.id="tab-content",r.appendChild(o),r.appendChild(d),r.appendChild(l),r.appendChild(u),a.appendChild(r),c.innerHTML="&copy; The Meal Restaurant",n.appendChild(t),n.appendChild(a),n.appendChild(e),n.appendChild(c)};let i=document.createElement("h3"),a=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),d=document.createElement("span");return t.home=()=>{let t=document.createElement("img");t.setAttribute("alt","dinner-set"),t.setAttribute("src","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),t.classList.add("banner-img"),e.appendChild(t)},t.about=()=>{a.classList.add("description"),i.innerHTML="About Us",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(i),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.menu=()=>{let t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("img"),o=document.createElement("img");a.classList.add("description"),t.id="menu-items",n.classList.add("menu-img"),r.classList.add("menu-img"),o.classList.add("menu-img"),i.innerHTML="Our Chef's Menu",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",d.innerHTML="You are welcome",n.setAttribute("alt","menu1-img"),r.setAttribute("alt","menu2-img"),o.setAttribute("alt","menu3-img"),n.setAttribute("src","https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"),r.setAttribute("src","https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),o.setAttribute("src","https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80"),e.appendChild(i),e.appendChild(a),e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o)},t.order=()=>{a.classList.add("description"),i.innerHTML="Place Your Order",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(i),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.clear=()=>{document.querySelector("#tab-content").innerHTML=""},t})();i.body(),i.home(),(()=>{const e=document.querySelectorAll("ul li");e.forEach((t,n)=>{t.addEventListener("click",a=>{i.clear(),e.forEach(e=>{e.classList.contains("active-nav-item")&&e.classList.remove("active-nav-item")}),t.classList.add("active-nav-item"),0===n?i.home():1===n?i.about():2===n?i.menu():3===n&&i.order()})})})()}]);
=======
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const i=(()=>{let e,t={},n=document.querySelector("#content");t.body=()=>{let t=document.createElement("header"),i=document.createElement("h1"),a=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),l=document.createElement("li"),u=document.createElement("li"),c=document.createElement("li"),s=document.createElement("ul"),m=document.createElement("li"),p=document.createElement("li"),h=document.createElement("li");e=document.createElement("div");let f=document.createElement("p");r.classList.add("nav"),o.classList.add("nav-item"),d.classList.add("nav-item"),l.classList.add("nav-item"),u.classList.add("nav-item"),s.classList.add("hide"),c.classList.add("drop-down"),f.classList.add("footer"),o.innerHTML="Home",d.innerHTML="About",l.innerHTML="Menu",u.innerHTML="Order",c.innerHTML="Drop",m.innerHTML="Drop 1",p.innerHTML="Drop 2",h.innerHTML="Drop 3",i.innerHTML="The Meal Restaurant App",t.appendChild(i),e.id="tab-content",r.appendChild(o),r.appendChild(d),r.appendChild(l),r.appendChild(u),r.appendChild(c),c.appendChild(s),s.appendChild(m),s.appendChild(p),s.appendChild(h),a.appendChild(r),f.innerHTML="&copy; The Meal Restaurant",n.appendChild(t),n.appendChild(a),n.appendChild(e),n.appendChild(f)};let i=document.createElement("h3"),a=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),d=document.createElement("span");return t.home=()=>{let t=document.createElement("img");t.setAttribute("alt","dinner-set"),t.setAttribute("src","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),t.classList.add("banner-img"),e.appendChild(t)},t.about=()=>{a.classList.add("description"),i.innerHTML="About Us",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(i),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.menu=()=>{let t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("img"),o=document.createElement("img");a.classList.add("description"),t.id="menu-items",n.classList.add("menu-img"),r.classList.add("menu-img"),o.classList.add("menu-img"),i.innerHTML="Our Chef's Menu",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",d.innerHTML="You are welcome",n.setAttribute("alt","menu1-img"),r.setAttribute("alt","menu2-img"),o.setAttribute("alt","menu3-img"),n.setAttribute("src","https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"),r.setAttribute("src","https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),o.setAttribute("src","https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80"),e.appendChild(i),e.appendChild(a),e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o)},t.order=()=>{a.classList.add("description"),i.innerHTML="Place Your Order",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(i),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.clear=()=>{document.querySelector("#tab-content").innerHTML=""},t})(),a=(()=>{const e={dropDownMenu:()=>{document.querySelectorAll("ul li.drop-down").forEach((e,t)=>{e.addEventListener("click",t=>{e.querySelector("ul").classList.toggle("hide")})})}};return e})();i.body(),i.home(),document.querySelectorAll("ul li.nav-item").forEach((e,t)=>{e.addEventListener("click",e=>{i.clear(),0===t?i.home():1===t?i.about():2===t?i.menu():3===t&&i.order()})}),a.dropDownMenu()}]);
>>>>>>> drop-down-menu
