!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(2),e.exports=t(1)},function(e,n,t){},function(e,n,t){"use strict";t.r(n);const o=(()=>{let e={};const n=document.querySelector("#tab-content");let t="";return e.load=()=>{t='\n        <div class="tab-content">\n            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="dinner-set">\n            <p class="footer">\n            &copy; The Meal Restaurant\n            </p>\n        </div>',n.innerHTML=t},e})(),a=(()=>{let e={};const n=document.querySelector("#tab-content");let t="";return e.load=()=>{t='\n        <div class="tab-content">\n        <h3>\n                About Us\n        </h3>                            \n        <p class="description">\n                <span>\n                    You are welcome \n                </span>\n                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.\n            </p>\n            <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             \n        </p>\n    <p>\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n    </p>\n\n            <p class="footer">\n            &copy; The Meal Restaurant\n            </p>\n            </div>',n.innerHTML=t},e})(),i=(()=>{let e={};const n=document.querySelector("#tab-content");let t="";return e.load=()=>{t='\n        <div class="tab-content">\n        <h3>\n                Our Chef\'s Menu\n        </h3>                            \n        <p class="description">\n                <span>\n                    You are welcome \n                </span>\n                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.\n            </p>\n\n            <div id="menu-items">\n            <img class="menu-img" src="https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="menu1">\n            <img class="menu-img" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="menu2">\n            <img class="menu-img" src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80" alt="menu3">\n            </div>                                        \n            <p class="footer">\n            &copy; The Meal Restaurant\n            </p>\n            </div>',n.innerHTML=t},e})(),r=(()=>{let e={};const n=document.querySelector("#tab-content");let t="";return e.load=()=>{t='\n        <div class="tab-content">\n        <h3>\n                Place Your Order\n        </h3>                            \n            <p class="description">\n                <span>\n                    You are welcome \n                </span>\n                The Meal Restaurant is an exquisitely exciting place for everyone to take a meal away from home.\n            </p>\n            <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             \n        </p>\n    <p>\n            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n    </p>\n\n            <p class="footer">\n            &copy; The Meal Restaurant\n            </p>\n            </div>',n.innerHTML=t},e})();(()=>{const e=document.querySelectorAll("ul li");document.querySelector("#tab-content");e.forEach((e,n)=>{e.addEventListener("click",e=>{0===n?o.load():1===n?a.load():2===n?i.load():3===n&&r.load()})})})()}]);