import * as $ from 'jquery'

$(() => {

	$(document).ready(function ($) {

		$('.navbar-toggler').on('click', function (e) {
			e.preventDefault();
			$('.c-menu').toggleClass('opens');
		});
		//  Mobile Menu
		$('.navbar-toggler').on('click', function () {
			$(this).toggleClass('opened-menu');
			$(this).toggleClass('closed-menu');
		});
		$('.gallery-slider-triple').slick({
			centerMode: true,
			centerPadding: '0',
			autoplay: true,
			autoplaySpeed: 300,
			arrows: false,
			dots: false,
			pauseOnHover: true,
			slidesToShow: 3,
			slidesToScroll: 1,
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
		$('.gallery-slider').slick({
			centerMode: true,
			centerPadding: '0',
			autoplay: true,
			autoplaySpeed: 500,
			arrows: false,
			dots: false,
			pauseOnHover: true,
			slidesToShow: 1,
			slidesToScroll: 1,
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
	});

	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox({
			alwaysShowClose: true,
			loadingMessage: "Loading…",
			showArrows: true,
			leftArrow: "<<<",
			rightArrow: ">>>"
		});
	});
});

// Scroll to specific values
// scrollTo is the same
window.scroll({
	top: 5000,
	left: 0,
	behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
	top: 5000, // could be negative value
	left: 0,
	behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
	behavior: 'smooth'
});


$(document).scroll(function () {
	// Fixed Navigation
	var header_pos = $(window).scrollTop('slow');
	if (header_pos >= 10) {
		$('.fixed-top').addClass('top-up');
	}
	if (header_pos < 10) {
		$('.fixed-top').removeClass('top-up');
	}
});




