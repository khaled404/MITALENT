$(function(){var e=$(window),a=$("nav");function t(){12<e.scrollTop()?a.addClass("scrolled"):a.removeClass("scrolled")}$(".toggle, .list-two ul li").on("click",function(){$(".toggle").toggleClass("on"),$(".list-two").toggleClass("list-sow"),a.toggleClass("nav-list-sow"),$("body").toggleClass("overflow")}),$(".search").on("click",function(e){e.preventDefault(),$(".search-input").toggleClass("search-show")}),t(),e.on("scroll",function(){t()});new Swiper(".main-header .swiper-container",{loop:!0,effect:"flip",autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,a){return'<span class="'+a+'"> 0'+(e+1)+"</span>"}}}),mixitup(".actor .mixitup-container-1",{animation:{duration:246,nudge:!0,reverseOut:!1,effects:"fade translateZ(-100px)"}}),mixitup(".actor .mixitup-container-2",{animation:{duration:246,nudge:!0,reverseOut:!1,effects:"fade translateZ(-100px)"}});$(".actor ul li").on("click",function(){$(this).addClass("active").siblings("li").removeClass("active")}),$(".actor .main-btn").on("click",function(e){e.preventDefault(),$(".mix2").toggleClass("active"),$(this).toggleClass("newText")});new Swiper(".news-play .swiper-container",{spaceBetween:30,effect:"cube",cubeEffect:{shadow:!1,slideShadows:!1,shadowOffset:20,shadowScale:.94},loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".news-motivation .swiper-container",{spaceBetween:30,cubeEffect:{shadow:!1,slideShadows:!1,shadowOffset:20,shadowScale:.94},loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})});