const swiper = new Swiper('.swiper', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	slidesPerView: 'auto',

    breakpoints: {
        768: {
            enabled: false,
        },
		}
});