(()=>{"use strict";const e=function(e,s,i=!1,t="Desktop",o={}){const l=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-button-next"),n=e.querySelector(".swiper-button-prev"),{direction:a,slidesPerViewDesktop:p,slidesPerViewTablet:d,slidesPerViewMobile:w,slidesPerGroupDesktop:c,slidesPerGroupTablet:u,slidesPerGroupMobile:P,speed:z,delay:b,loop:V,autoplay:B,pauseOnMouseEnter:f,spaceBetweenDesktop:g,spaceBetweenTablet:k,spaceBetweenMobile:v,allowTouchMove:G,effect:M}=s,y={direction:a||"horizontal",loop:V||!1,speed:z||1e3,autoplay:B&&{pauseOnMouseEnter:f||!1,delay:b||3e3},allowTouchMove:G||!0,draggable:!0,effect:M||"slide",focusableElements:'a, button, input, textarea, select, details, [tabindex="0"]',pagination:{el:l,clickable:!0},navigation:{nextEl:r,prevEl:n},breakpoints:{320:{slidesPerView:w?.size||1,slidesPerGroup:P?.size||1,spaceBetween:v?.size||10},767:{slidesPerView:d?.size||2,slidesPerGroup:u?.size||1,spaceBetween:k?.size||10},1024:{slidesPerView:p?.size||3,slidesPerGroup:c?.size||1,spaceBetween:g?.size||10}},...o};if(i){const{gkitResponsiveValue:e}=window.gutenkit.helpers;y.breakpoints={320:{slidesPerView:e(s,"slidesPerView",t)?.size,slidesPerGroup:P?.size,spaceBetween:e(s,"spaceBetween",t)?.size},767:{slidesPerView:e(s,"slidesPerView",t)?.size,slidesPerGroup:u?.size,spaceBetween:e(s,"spaceBetween",t)?.size},1024:{slidesPerView:e(s,"slidesPerView",t).size,slidesPerGroup:c.size,spaceBetween:e(s,"spaceBetween",t)?.size}},y.allowTouchMove=!1}return new Swiper(e,y)};document.addEventListener("DOMContentLoaded",(()=>{const s=document.querySelectorAll(".gkit-testimonial-slider");if(void 0!==window?.Swiper&&s.length>0)for(let i of s){const s=JSON.parse(i.dataset.settings);e(i,s)}}))})();