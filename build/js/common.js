$(function(){function e(e){for(var o=$(".header-nav__link"),n=0;n<o.length;n++)if($(o[n]).attr("id")!=$(e).attr("id")){var i=$(o[n]).next();i.removeClass("open").fadeOut(),$(o[n]).removeClass("open")}}function o(e){if($(window).width()>992){$(".megamenu").width($(window).width());var o=$(e).offset().left;$(".megamenu").css("left","-"+o+"px")}else $(".megamenu").css("left","0px"),$(".megamenu").css("width","auto")}function n(e){i(slideIndex=e)}function i(e){var o,n=$(".slide"),i=$(".dot");for(e>n.length?slideIndex=1:e<1&&(slideIndex=n.length),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<i.length;o++)i[o].className=i[o].className.replace("active"," ");n[slideIndex-1].style.display="block",i[slideIndex-1].className+=" active"}var s=$(window).width();$(".image-popup-zoom").magnificPopup({type:"image",zoom:{enabled:!0,duration:300}});var l=$(".services-box-carousel");if(l.owlCarousel({items:1,loop:!0,autoplay:!0,dots:!0,autowidth:!1}),s<=576&&$(".mobile-header-slider").owlCarousel({items:1,loop:!0,autoplay:!0,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']}),s<=768){var t=$(".testimonials-mobile-slider");t.owlCarousel({items:1,loop:!0,autoplay:!0,dots:!1}),$(".testimonials__nav--prev").on("click",function(e){e.preventDefault(),t.trigger("prev.owl.carousel",[300])}),$(".testimonials__nav--next").on("click",function(e){t.trigger("next.owl.carousel",[300]),e.preventDefault()})}$(".form-box-icons__icon").on("click",function(){var e=$(this),o=$(".form-box-icons__icon"),n=e.data("form"),i=$("#mail"),s=$("#phone");if(!$("div").is(".form-box__"+n))return!1;if(e.hasClass("open")){for(var l=0;l<o.length;l++)$(o[l]).removeClass("open");e.removeClass("open")}else{for(var l=0;l<o.length;l++)$(o[l]).removeClass("open");e.toggleClass("open")}"phone"==n?i.parents(".form-box").find(".form-box__mail").is(":visible")&&i.parents(".form-box").find(".form-box__mail").fadeToggle():s.parents(".form-box").find(".form-box__phone").is(":visible")&&s.parents(".form-box").find(".form-box__phone").fadeToggle(),e.parents(".form-box").find(".form-box__"+n).fadeToggle()}),$(".form-box__close-btn").on("click",function(){$(this).parent().fadeOut(),$(".form-box-icons__icon").removeClass("open")}),$(".header-nav__link").on("click",function(n){var i=$(this).next();if(o($(this)),e($(this)),i.is(".megamenu"))if(i.hasClass("open"))i.removeClass("open").fadeOut(),$(this).removeClass("open");else if($(".megamenu").removeClass("open").fadeOut(),i.addClass("open").fadeIn(),$(this).addClass("open"),s<=992)return $(document).scrollTop(280),!1}),$(".open-mobile-out-menu").on("click",function(){$(this).toggleClass("on"),$(".mobile-out-menu").toggleClass("open").fadeToggle()}),$(".close-mobile-out-menu").on("click",function(){$(".open-mobile-out-menu").removeClass("on"),$(".mobile-out-menu").removeClass("open").fadeOut()}),$(".to-top").on("click",function(){$("html, body").animate({scrollTop:0},800)}),$(".services-box-carousel__nav--prev").on("click",function(e){e.preventDefault(),l.trigger("prev.owl.carousel",[300])}),$(".services-box-carousel__nav--next").on("click",function(e){l.trigger("next.owl.carousel",[300]),e.preventDefault()}),$(".faq-box__query").on("click",function(){$(this).toggleClass("open").next(".faq-box__reply").slideToggle()}),$(".faq-box-reply__close").on("click",function(){$(this).removeClass("open").parent().slideUp()}),$(".btnReadMore").on("click",function(){var e=$(this).attr("id");$("#myModel").css("display","block"),n(e)}),$("#close_modal").on("click",function(){$("#myModel").css("display","none")}),$(".dot").on("click",function(){n($(this).attr("data-slide"))}),$(window).resize(function(){o()});var a=$(".mobile-out-menu");a.offset().top;$(window).scroll(function(){var e=$(window).scrollTop(),o=$(".to-top");e>100?o.css({bottom:"40px"}):o.css({bottom:"-50px"})})});