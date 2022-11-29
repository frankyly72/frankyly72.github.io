const swiper = new Swiper('.swiper', {
    speed: 600,
    autoplay: {
        delay: 3000,
      },
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})