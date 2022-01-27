$(document).ready(function ($) {

  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault();
    $('.c-menu').toggleClass('opens');
  });

  $('#backToCart').on('click', function (e) {
    e.preventDefault();
    $('#commtabs_02-tab').removeClass('active').attr('aria-selected', 'false');
    $('#commtabs_01-tab').addClass('active').attr('aria-selected', 'true');
  });

  $('#backToCart002').on('click', function (e) {
    e.preventDefault();
    $('#commtabs002_02-tab').removeClass('active').attr('aria-selected', 'false');
    $('#commtabs002_01-tab').addClass('active').attr('aria-selected', 'true');
  });

  $('.e-product__size a').on('click', function (e) {
    e.preventDefault();
    if ($('.e-product__size a').hasClass('active')) {
      $('.e-product__size a').removeClass('active');
    }
    if ($(this).hasClass('active') !== true) {
      $(this).addClass('active');
    }
  });

  $('.e-passw .p-show').on('click', function () {
    $(this).parent('.e-passw').find('input').attr('type', 'text');
    $(this).parent('.e-passw').find('.p-eye').toggleClass('d-none');
  });

  $('.e-passw .p-hide').on('click', function () {
    $(this).parent('.e-passw').find('input').attr('type', 'password');
    $(this).parent('.e-passw').find('.p-eye').toggleClass('d-none');
  });

  $('input[type="checkbox"]').on('click', function () {
    if ($(this).is('[checked]')) {
      $(this).removeAttr('checked');
    } else {
      $(this).attr('checked', true);
    }
  });

  $('.table th.first input[type="checkbox"]').on('click', function () {
    var input = $('.table td.first input[type="checkbox"]');
    if ($(this).is('[checked]')) {
      $(input).attr('checked', true);
    } else {
      $(input).removeAttr('checked');
    }
  });

  $('.table-striped td.first input[type="checkbox"]').on('click', function () {
    var row = $(this).parents('tr');
    if ($(this).is('[checked]')) {
      row.addClass('active');
    } else {
      row.removeClass('active');
    }
  });

  $('select').selectpicker();

  // Scroll To & Local Scroll  
  // $('').bind('click', function (e) {
  //   e.preventDefault();
  //   console.log('hekkee')
  //   $('html, body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top
  //   }, 500);
  //   $('.navbar-collapse.in').removeClass('in');
  //   return false;
  // });

  $('#featureScreens .feature-item').on('click', function (e) {
    e.preventDefault();
    var show = $('#featureScreens .collapse.show');
    $('#featureScreens .feature-item.active').removeClass('active');
    $(this).addClass('active');
    show.removeClass('show');
  });

  $('.video-btn').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.top-container').find('.top-video').css('z-index', '100').addClass('activate-play');
  });

  // not work correct
  // $('.video-bg__player').on('click', function () {
  //   $('.video-bg__button').css('top', '120vh');
  // });

  $('.scroll-to-bottom').on('click', function () {
    var rdm = randomID(1, 200);
    var toScroll = $(this).parents('.scroll-bottom-100');
    toScroll.insertBefore('#toSc-' + rdm + '.scroll-bottom-next');
    var target = toScroll.next();
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $('.scroll-to-top').on('click', function () {
    var rdm = randomID(1, 200);
    var toScroll = $(this).parents('.scroll-top-100');
    toScroll.insertBefore('#toSc-' + rdm + '.scroll-top-prev');
    var target = toScroll.prev();
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $('#btnBuilder').on('click', function () {
    $(this).find('.feather').toggleClass('d-none');
    $('.builder-title').toggleClass('hidden');
    $('.c-builder').toggleClass('c-builder__closed');
    $(this).toggleClass('show');
  });

  // Builder
  $('.panel-menu').on('click', function () {
    $(this).find('.feather').toggleClass('d-none');
  });
  //
  $('#builderNavigations .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderNavigations');
  });
  $('#builderHeaders .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderHeaders');
  });
  $('#builderFeatures .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderFeatures');
  });
  $('#builderCall .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderCall');
  });
  $('#builderGallery .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderGallery');
  });
  $('#builderPricing .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderPricing');
  });
  $('#builderCommerce .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderCommerce');
  });
  $('#builderText .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderText');
  });
  $('#builderTable .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderTable');
  });
  $('#builderTeam .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderTeam');
  });
  $('#builderBlog .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderBlog');
  });
  $('#builderTestimonials .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderTestimonials');
  });
  $('#builderContact .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderContact');
  });
  $('#builderForm .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderForm');
  });
  $('#builderFooter .b-close').on('click', function () {
    $(this).closest('.zoom').prependTo('#builderFooter');
  });

  //  Mobile Menu
  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('opened-menu');
    $(this).toggleClass('closed-menu');
  });
  // Search Form
  $('.c-form .fa-search').on('click', function () {
    $('.c-form .c-search-input').toggleClass('shown-s');
  });
  // Slick Slider  
  $('.c-comm__slides22').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-comm__slides20').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    vertical: true,
    pauseOnHover: false,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-comm__slides19').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    slidesToShow: 2,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          arrows: true,
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 520,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });
  $('.testimonials__009').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-testimonials_010').slick({
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-testimonials_007').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-testimonials_006').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-testimonials_004').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-team__slides').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          vertical: false,
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.c-team__slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          vertical: false,
          arrows: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-vertical').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    vertical: true,
    pauseOnHover: true,
    slidesToShow: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          vertical: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-mini').slick({
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });
  $('.gallery-slider-triple').slick({
    autoplay: true,
    loop: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-fourth').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-double-rows').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-double').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.gallery-slider-full-center').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.big-features-slides').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.features-slides').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.text-block-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.blog_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.header_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.header_slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  });
  $('.slider_blog_009').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      arrows: false,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      arrows: false,
      settings: {
        arrows: false
      }
    }]
  });
  $('.slider-blog').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      centerMode: false,
      centerPadding: '0px',
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
      {
        centerMode: false,
        centerPadding: 0,
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }]
  });
});

$(document).scroll(function () {
  // Fixed Navigation   
  var header_pos = $(window).scrollTop();
  if (header_pos >= 50) {
    $('.c-header').addClass('scroll-nav');
  }
  if (header_pos < 50) {
    $('.c-header').removeClass('scroll-nav');
  }
});

function randomID(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// begin scroll 2 ancore desktop menu
$('.navbar-nav a[href*=\\#]').on("click", function (e) {
  e.preventDefault();
  let anchor = $(this);
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  $('.c-menu').removeClass('opens');
  $('.navbar-toggler').removeClass('opened-menu');
  $('.navbar-collapse').removeClass('show');

  if (window.innerWidth > 940) {

    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 130 + 'px'
    }, 0);

  } else {
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 100 + 'px'
    }, 0);
  }
});
// end scroll 2 ancore desktop menu

// begin animate css
$(".o-fadeInLeft").waypoint(function () {
  $(this).addClass("animate__fadeInLeft");
}, {
  offset: "100%"
});
$(".o-fadeInRight").waypoint(function () {
  $(this).addClass("animate__fadeInRight");
}, {
  offset: "100%"
});
$(".o-fadeInUp").waypoint(function () {
  $(this).addClass("animate__fadeInUp");
}, {
  offset: "100%"
});
// end animate css

$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  let scrollPos = $(document).scrollTop();
  $('.nav-link').each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos + 200 && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav-link').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}