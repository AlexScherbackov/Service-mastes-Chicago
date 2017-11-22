$(function () {

  var bodyWidth = $(window).width();

  // Type Image Zoom - картинка с анимацией
 $('.image-popup-zoom').magnificPopup({
  type: 'image',
  zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 }
 });
  // Слайдер отзывов внизу страницы
  var servicesCarousel = $('.services-box-carousel');
  servicesCarousel.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    autowidth: false,
  });


  if (bodyWidth <= 576) {
    // Включаем слайдерв шапке на мобильных
    $('.mobile-header-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    })

  };

  if (bodyWidth <= 768) {
    // Включаем слайдер отзывов на мобильных и планшетах
    var testimonialsSlider = $('.testimonials-mobile-slider');
    testimonialsSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
    })
    $('.testimonials__nav--prev').on('click', function (e) {
      e.preventDefault();
      testimonialsSlider.trigger('prev.owl.carousel', [300]);
    })
    $('.testimonials__nav--next').on('click', function (e) {
      testimonialsSlider.trigger('next.owl.carousel', [300]);
      e.preventDefault();
    })
  }
//Раскрытие закрытие кнопок
  $('.form-box-icons__icon').on('click', function () {
    var btn = $(this);
    var arr = $('.form-box-icons__icon');
    var targetBtn = btn.data('form');
    var btn1 = $('#mail');
    var btn2 = $('#phone');

    if (!$("div").is('.form-box__' + targetBtn + '')) {
      return false;
    }

    if (btn.hasClass('open')) {
      for(var i=0; i<arr.length; i++){
        
          $(arr[i]).removeClass('open');
          
        };
      btn.removeClass('open');
    } else {
      for(var i=0; i<arr.length; i++){
          $(arr[i]).removeClass('open');
          
        };
      btn.toggleClass('open');
    }
    if (targetBtn == 'phone'){
        
        if(btn1.parents('.form-box').find('.form-box__mail').is(":visible")){
          btn1.parents('.form-box').find('.form-box__mail').fadeToggle();
        }
    } else{
        
        if(btn2.parents('.form-box').find('.form-box__phone').is(":visible")){
          btn2.parents('.form-box').find('.form-box__phone').fadeToggle();
        }
    }
    btn.parents('.form-box').find('.form-box__' + targetBtn + '').fadeToggle();
  })

  $('.form-box__close-btn').on('click', function () {
    $(this).parent().fadeOut();
    $('.form-box-icons__icon').removeClass('open');
  })

  $('.header-nav__link').on('click', function (e) {
    var megamenu = $(this).next();
    bodyWidthDetect($(this));

    closeAllMenu($(this));

    if (megamenu.is('.megamenu')) {
      if (megamenu.hasClass('open')) {
        megamenu.removeClass('open').fadeOut();
        $(this).removeClass('open');
       
      } else {
        $('.megamenu').removeClass('open').fadeOut();
        megamenu.addClass('open').fadeIn();
        $(this).addClass('open');
        if (bodyWidth <= 992){
          $(document).scrollTop(280);
          return false;
        }
         
      }
    }
  });

  function closeAllMenu (el) {
   var link = $('.header-nav__link');
     
   for(var i = 0; i < link.length; i++){
    if($(link[i]).attr("id") != $(el).attr("id")){
      var megamenu = $(link[i]).next();
      megamenu.removeClass('open').fadeOut();
      $(link[i]).removeClass('open');
    }
   } 
  };
 
//$('#portfolio_grid').mixItUp({});

  $('.open-mobile-out-menu').on('click', function () {
    $(this).toggleClass('on');
    $('.mobile-out-menu').toggleClass('open').fadeToggle();
  })

  $('.close-mobile-out-menu').on('click', function () {
    $('.open-mobile-out-menu').removeClass('on');
    $('.mobile-out-menu').removeClass('open').fadeOut();
  })

 

  $('.to-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  })
  $('.services-box-carousel__nav--prev').on('click', function (e) {
    e.preventDefault();
    servicesCarousel.trigger('prev.owl.carousel', [300]);
  })
  $('.services-box-carousel__nav--next').on('click', function (e) {
    servicesCarousel.trigger('next.owl.carousel', [300]);
    e.preventDefault();
  })
  // FAQ Spoiler 
  $('.faq-box__query').on('click', function () {
    $(this).toggleClass('open').next('.faq-box__reply').slideToggle();
  })
  $('.faq-box-reply__close').on('click', function () {
    $(this).removeClass('open').parent().slideUp();
  });

function bodyWidthDetect(el){
  if ($(window).width() > 992) {
    $('.megamenu').width($(window).width());
    var menuOffset = $(el).offset().left;

   $('.megamenu').css("left", "-" + menuOffset  + "px");
  } else {
    $('.megamenu').css("left", "0" + "px");
    $('.megamenu').css("width", "auto");
  
  }
};

$('.btnReadMore').on('click', function(){
  var slideIndex = $(this).attr('id');

  $('#myModel').css('display', 'block');
  currentSlide(slideIndex);
});

function currentSlide(n) {
  showSlide(slideIndex = n);
};
function showSlide(n) {
  var i,
  slides = $(".slide"),
  dots = $(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length
  };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  };
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("active", " ");
  };
  
  slides[slideIndex - 1].style.display = 'block';
  
  dots[slideIndex - 1].className+= " active";
};

$('#close_modal').on('click', function(){
  $('#myModel').css('display', 'none');
})

$('.dot').on('click', function(){

  currentSlide($(this).attr('data-slide'));
});     

$(window).resize(function () {bodyWidthDetect();});
  



  var mobilemenu = $('.mobile-out-menu');
  var startMenu = mobilemenu.offset().top;
  $(window).scroll(function () {
    var scrollheight = $(window).scrollTop();

    // if (scrollheight > startMenu) {
    //     mobilemenu.addClass('menu-to-top');
    //     mobilemenu.css({'top': 0})
    // }else{
    //   mobilemenu.removeClass('menu-to-top');
    //   mobilemenu.css({'top': startMenu - scrollheight})
    // }

    var toTop = $('.to-top');
    if (scrollheight > 100) {
      toTop.css({
        'bottom': '40px'
      })
    } else {
      toTop.css({
        'bottom': '-50px'
      })
    }

  });

});



