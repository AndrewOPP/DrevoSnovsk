(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})();new Swiper(".swiper",{breakpoints:{0:{slidesPerView:2,spaceBetween:10},464:{slidesPerView:3,spaceBetween:10},984:{slidesPerView:4,spaceBetween:4},1248:{slidesPerView:4,spaceBetween:6}},loop:!0,autoplay:{delay:2e3,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}));
//# sourceMappingURL=aboutcompany.77c9354c.js.map