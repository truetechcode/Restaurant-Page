!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(2),e.exports=i(1)},function(e,t,i){},function(e,t,i){"use strict";i.r(t);const n=(()=>{let e,t={},i=document.querySelector("#content");t.body=()=>{let t=document.createElement("header"),n=document.createElement("h1"),a=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),l=document.createElement("li"),u=document.createElement("li");e=document.createElement("div");let c=document.createElement("p");r.classList.add("nav"),o.classList.add("nav-item"),d.classList.add("nav-item"),l.classList.add("nav-item"),u.classList.add("nav-item"),c.classList.add("footer"),o.innerHTML="Home",d.innerHTML="About",l.innerHTML="Menu",u.innerHTML="Order",n.innerHTML="The Meal Restaurant App",t.appendChild(n),e.id="tab-content",r.appendChild(o),r.appendChild(d),r.appendChild(l),r.appendChild(u),a.appendChild(r),c.innerHTML="&copy; The Meal Restaurant",i.appendChild(t),i.appendChild(a),i.appendChild(e),i.appendChild(c)};let n=document.createElement("h3"),a=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),d=document.createElement("span");return t.home=()=>{let t=document.createElement("img");t.setAttribute("alt","dinner-set"),t.setAttribute("src","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),t.classList.add("banner-img"),e.appendChild(t);let i=document.createElement("img");i.setAttribute("alt","dinner-set"),i.setAttribute("src","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),i.classList.add("banner-img"),e.appendChild(i)},t.about=()=>{a.classList.add("description"),n.innerHTML="About Us",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(n),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.menu=()=>{let t=document.createElement("div"),i=document.createElement("img"),r=document.createElement("img"),o=document.createElement("img");a.classList.add("description"),t.id="menu-items",i.classList.add("menu-img"),r.classList.add("menu-img"),o.classList.add("menu-img"),n.innerHTML="Our Chef's Menu",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",d.innerHTML="You are welcome",i.setAttribute("alt","menu1-img"),r.setAttribute("alt","menu2-img"),o.setAttribute("alt","menu3-img"),i.setAttribute("src","https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"),r.setAttribute("src","https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),o.setAttribute("src","https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80"),e.appendChild(n),e.appendChild(a),e.appendChild(t),t.appendChild(i),t.appendChild(r),t.appendChild(o)},t.order=()=>{a.classList.add("description"),n.innerHTML="Place Your Order",a.appendChild(d),a.innerHTML="The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",o.innerHTML="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",d.innerHTML="You are welcome",e.appendChild(n),e.appendChild(a),e.appendChild(r),e.appendChild(o)},t.clear=()=>{document.querySelector("#tab-content").innerHTML=""},t})();n.body(),n.home(),document.querySelectorAll("ul li").forEach((e,t)=>{e.addEventListener("click",e=>{n.clear(),0===t?n.home():1===t?n.about():2===t?n.menu():3===t&&n.order()})}),document.querySelectorAll("img.banner-img").forEach((e,t)=>{(t=>{setTimeout(()=>{e.classList.contains("hide")?e.classList.remove("hide"):e.classList.add("hide")},3e3*t)})(t)})}]);