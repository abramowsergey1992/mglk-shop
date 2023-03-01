$(function () {
	if ($(".shop-slider").length) {
		$(".shop-slider").each(function () {
			console.log("sssxxxx", this);
			const shopSlider = new Swiper(this, {
				slidesPerView: 1,
				loop: "auto",
				freeMode: {
					enabled: true,
					sticky: true,
				},
				spaceBetween: 15,
				mousewheel: {
					forceToAxis: true,
				},
				preventClicks: false,
				preventClicksPropagation: false,
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: "auto",
					},
				},
			});
		});
	}
});
