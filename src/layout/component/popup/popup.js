$(function () {
	$(".popup__slider").each(function () {
		const swiper = new Swiper(this, {
			loop: true,
			speed: 400,
			spaceBetween: 90,
			setWrapperSize: true,
			observer: true,
			observeSlideChildren: true,
			observeParents: true,
			slidesPerView: 1,
			loopAdditionalSlides: 2,
			// Navigation arrows
			navigation: {
				nextEl: $(this).find(".popup__slider-next")[0],
				prevEl: $(this).find(".popup__slider-prev")[0],
			},
		});
	});
	$(".popup__close").click(function () {
		$(this).closest(".popup").fadeOut();
	});
	$("[data-popup]").click(function () {
		let popuptext = $(this).data("popup").split("|");
		let popup = $(popuptext[0]);
		console.log("popuptext[0]", popuptext[0]);
		let realindex = popuptext[1] ? popuptext[1] : 0;
		popup.fadeIn();
		console.log("realindex", realindex);
		if (popup.find(".swiper").length) {
			let swiper = popup.find(".swiper")[0].swiper;
			console.log("swiper", swiper);
			// swiper.destroy();
			// swiper.init();
			swiper.update();
			swiper.slideToLoop(realindex);
		}
	});
});
