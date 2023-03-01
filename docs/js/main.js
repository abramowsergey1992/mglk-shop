$(function () {
	function recalculation(data) {
		$(".basket-page__price").text(
			`${new Intl.NumberFormat("ru-RU").format(data.productsprice)}  ₽`
		);
		$(".basket-page__delivery").text(
			`${new Intl.NumberFormat("ru-RU").format(data.deliveryprice)}  ₽`
		);
		$(".basket-page__total-price ").text(
			`${new Intl.NumberFormat("ru-RU").format(data.totalprice)}  ₽`
		);
	}
	$(".basket-product__delete").click(function (e) {
		let $parent = $(this).closest(".basket-product");
		$.ajax({
			url: $(this).data("url"),
			// data: $(form).serialize(),
			method: "GET",
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				console.log("sss", $parent);
				$parent.slideUp(function () {
					$parent.remove();
					recalculation(data);
				});
			},
		});
	});
});

$(function () {
	$(".delivery-type").change(function () {
		$(".basket-page__delivery").text(
			`${new Intl.NumberFormat("ru-RU").format(
				parseInt(parseInt($(this).data("price")))
			)}  ₽`
		);
		$(".basket-page__total-price").text(
			`${new Intl.NumberFormat("ru-RU").format(
				parseInt($(".basket-page__price").text().replace(" ", "")) +
					parseInt($(this).data("price"))
			)}  ₽`
		);
		console.log($(this).data("price"));
	});
	if ($("#checkout-form").length) {
		let valid = $("#checkout-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$("#checkout-form .btn2").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$("#thanks-form.popup").fadeIn();
						$("#checkout-form .btn2").removeAttr("disabled");
					},
					error: function () {
						$("#error-form.popup").fadeIn();
						$("#checkout-form .btn2").removeAttr("disabled");
					},
				});
			},
		});
	}
});

$(function () {
	$(".product__info-addcart").click(function () {
		$.ajax({
			url: $(this).data("url"),
			// data: $(form).serialize(),
			method: "GET",
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				let $products = $(".header-products");
				let $template = $(".header-product-template .header-product");
				$products.html("");
				$(".cart-btn__count").text(data.products.length);
				data.products.forEach((product) => {
					let $product = $template.clone();
					$product
						.find(".header-product__img img")
						.attr("src", product.imgj);
					$product
						.find(".header-product__img source")
						.attr("srcset", product.imgw);
					$product.find(".header-product__title").text(product.title);
					$product
						.find(".header-product__desc")
						.text(product.description);
					$product
						.find(".header-product__price")
						.text(
							new Intl.NumberFormat("ru-RU").format(
								product.price
							) + " ₽"
						);
					console.log($product);
					$products.append($product);
				});
			},
		});
	});
	$(".product__info-count-plus").click(function () {
		let inpt = $(this)
			.closest(".product__info")
			.find(".product__info-count-input");
		inpt.val(parseInt(inpt.val()) + 1);
	});
	$(".product__info-count-minus").click(function () {
		let inpt = $(this)
			.closest(".product__info")
			.find(".product__info-count-input");
		if (inpt.val() != 0) {
			inpt.val(parseInt(inpt.val()) - 1);
		}
	});

	if ($("#subs-form").length) {
		let form = $("#msg-availability").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".msg-availability__btn").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$("#subs-form").fadeIn();
						$(".msg-availability__btn").removeAttr("disabled");
					},
					error: function () {
						$("#error-form.popup").fadeIn();
						$(".msg-availability__btn").removeAttr("disabled");
					},
				});
			},
		});
	}
});

$(function () {
	$(".cart-type-select").change(function () {
		$(".paycard").attr("type", $(this).data("type"));
	});
	$(".pay-metod__toggle").click(function () {
		$(this).closest(".pay-metod").toggleClass("_open");
		if ($(this).closest(".pay-metod").hasClass("_open")) {
			$(this)
				.closest(".pay-metod")
				.find(".pay-metod__body")
				.stop()
				.slideDown();
		} else {
			$(this)
				.closest(".pay-metod")
				.find(".pay-metod__body")
				.stop()
				.slideUp();
		}
	});
});

$(function(){})
$(function(){})
$(function(){})
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

$(function(){})
$(function(){})
$(function () {
	AOS.init({
		once: true,
	});
});

$(function () {
	if ($("[data-customcursor]").length) {
		$("[data-customcursor]").each(function () {
			let wrapper = $(this);

			wrapper.append(
				'<div class="customcursor"><div class="customcursor__circle"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L11 22M0 11L22 11" stroke="white" stroke-width="1.4"/></svg></div></div>'
			);
			let cursor = wrapper.find(".customcursor");
			wrapper.on("mousemove", function (e) {
				console.log("move");
				let position = $(this).offset();
				let left = e.pageX - position.left - 70 / 2;
				let top = e.pageY - position.top - 70 / 2;
				// cursor.css({
				// 	left: left,
				// 	top: top,
				// });
				gsap.to(cursor, 0.03, {
					left: left,
					top: top,
					ease: Power4.easOut,
				});
			});
		});
	}
});

$(function(){})
$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$("._mask-postalcode").each(function () {
		Inputmask("999999").mask(this);
	});
	$("._mask-numbercard").each(function () {
		Inputmask("9999-9999-9999-9999").mask(this);
	});
	$("._mask-datercard").each(function () {
		Inputmask("99/99").mask(this);
	});
	$("._mask-cvvrcard").each(function () {
		Inputmask("999").mask(this);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`<span class="link-arrow__text">${$(
				this
			).html()}</span> <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 9.30769L27.7071 10.0148L28.4142 9.30769L27.7071 8.60059L27 9.30769ZM19.3994 18.3225L27.7071 10.0148L26.2929 8.60059L17.9852 16.9083L19.3994 18.3225ZM27.7071 8.60059L19.3994 0.292893L17.9852 1.70711L26.2929 10.0148L27.7071 8.60059ZM27 8.30769H0V10.3077H27V8.30769Z" /></svg>`
		);
	});
	$(".link-chevron").each(function () {
		$(this).html(
			`<span class="link-chevron__text">${$(
				this
			).html()}</span> <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L14 12.1042L1 23.2083" stroke="" stroke-width="1.4"/></svg>`
		);
	});
});

$(function () {
	$(".header__overlay").click(function (e) {
		e.preventDefault();
		$(".header").removaClass("_cart-open");
		$(".header__cart").stop().slideUp();
	});
	$(".header-product__delete").click(function (e) {
		$.ajax({
			url: $(this).data("url"),
			// data: $(form).serialize(),
			method: "GET",
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				let $products = $(".header-products");
				let $template = $(".header-product-template .header-product");
				$products.html("");
				$(".cart-btn__count").text(data.products.length);
				data.products.forEach((product) => {
					let $product = $template.clone();
					$product
						.find(".header-product__img img")
						.attr("src", product.imgj);
					$product
						.find(".header-product__img source")
						.attr("srcset", product.imgw);
					$product.find(".header-product__title").text(product.title);
					$product
						.find(".header-product__desc")
						.text(product.description);
					$product
						.find(".header-product__price")
						.text(
							new Intl.NumberFormat("ru-RU").format(
								product.price
							) + " ₽"
						);
					console.log($product);
					$products.append($product);
				});
			},
		});
	});
	$(".cart-btn").click(function (e) {
		e.preventDefault();
		$(".header").toggleClass("_cart-open");
		if ($(".header").hasClass("_cart-open")) {
			$(".header__cart").stop().slideDown();
		} else {
			$(".header__cart").stop().slideUp();
		}
	});
	$(".header__burgrer").click(function (e) {
		e.preventDefault();
		$(".header").toggleClass("_menu-open");
		if ($(".header").hasClass("_menu-open")) {
			$(".header__categories").stop().slideDown();
		} else {
			$(".header__categories").stop().slideUp();
		}
	});
});

$(function(){})
$(function () {
	$(".video-hover-play").hover(
		function () {
			$(this).find("video")[0].play();
		},
		function () {
			$(this).find("video")[0].pause();
		}
	);
});

$(function () {
	$(".justified-gallery").justifiedGallery({
		rowHeight: 340,
		maxRowHeight: 340,
		justifyThreshold: 0.1,
		imgSelector: "img",
		margins: 15,
	});
});

$(function () {
	$(".like-change__checkbox").change(function () {
		let form = $(this).closest("form");
		if ($(this).data("like").length) {
			if ($(this).prop("checked")) {
				$(this).parent().find("span").text($(this).data("like"));
			} else {
				$(this).parent().find("span").text($(this).data("notlike"));
			}
		}
		$.ajax({
			url: $(form).attr("action"),
			data: $(form).serialize(),
			method: $(form).attr("method"),
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				console.log(data);
				$(".favorite-btn__count").text(data.favoritecount);
			},
			error: function () {},
		});
	});
	$(".like-change__checkbox").each(function () {
		if ($(this).data("like").length) {
			if ($(this).prop("checked")) {
				$(this).parent().find("span").text($(this).data("like"));
			} else {
				$(this).parent().find("span").text($(this).data("notlike"));
			}
		}
	});
});

$(function () {
	// const swiper = new Swiper(".pmenu-slider", {
	// 	speed: 400,
	// 	effect: "fade",
	// 	allowTouchMove: false,
	// 	spaceBetween: 100,
	// 	fadeEffect: {
	// 		crossFade: true,
	// 	},
	// });
	// $("[data-pslide]").click(function (e) {
	// 	e.preventDefault();

	// 	var maxWidth = window.matchMedia("(max-width: 890px)");
	// 	if (maxWidth.matches) {
	// 		if (!$(this).parent("li").hasClass("_open")) {
	// 			$(".pmenu-main__left-menu>ul>li").removeClass("_open");
	// 			$(this).parent("li").addClass("_open");
	// 			$(".pmenu-main__left-submenu").stop().slideUp();
	// 			$(this).next(".pmenu-main__left-submenu").stop().slideDown();
	// 		} else {
	// 			$(".pmenu-main__left-menu>ul>li").removeClass("_open");
	// 			$(this).next(".pmenu-main__left-submenu").stop().slideUp();
	// 		}
	// 	} else {
	// 		swiper.slideTo($(this).data("pslide"));
	// 	}
	// });
	$(".pmenu-inner-slide__back").click(function (e) {
		e.preventDefault();
		swiper.slideTo(0);
	});
	$(".header__burgrer,.pmenu-open").click(function (e) {
		e.preventDefault();
		$(".pmenu").addClass("_open _zindex");
	});
	$(".pmenu__close").click(function () {
		$(".pmenu").removeClass("_open ");
		setTimeout(function () {
			$(".pmenu").removeClass("_zindex");
		}, 400);
	});
	// $(".pmenu-main__left-menu ul li").each(function () {
	// 	let th = $(this);
	// 	let slide = swiper.slides[$(this).find("a").data("pslide")];
	// 	let ul = $("<ul>", {
	// 		class: "pmenu-main__left-submenu",
	// 	});
	// 	$(slide)
	// 		.find(".pmenu-item")
	// 		.each(function () {
	// 			ul.append(
	// 				`<li><a href="${$(this).find("a").attr("href")}">${$(this)
	// 					.find(".pmenu-item__icon")
	// 					.html()}${$(this).find("a").text()}</a></li>`
	// 			);
	// 		});
	// 	th.append(ul);
	// });
});

$(function () {
	let service = [
		"_half",
		"_half",
		"_third",
		"_third",
		"_third",
		"_full",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
	];
	$(".block__filters").each(function () {
		let block = $(this).closest(".block");
		let filterButton = block.find(".block__filter");
		let filterIt = block.find(".block__filter-it");
		filterButton.click(function () {
			f = $(this).data("filter");
			filterButton.removeClass("_active");
			$(this).addClass("_active");
			console.log("ccccs");
			if (f == "all") {
				filterIt.removeClass("d-none");
				console.log("xx", filterIt.first().hasClass("service-preview"));
				if (filterIt.first().hasClass("service-preview")) {
					i = 0;
					filterIt.each(function () {
						$(this).removeClass("_half _third _full");
						console.log(service[i]);
						$(this).removeClass("d-none");
						$(this).addClass(service[i]);
						i++;
					});
				}
			} else {
				i = 0;
				filterIt.each(function () {
					if (filterIt.hasClass("service-preview")) {
						$(this).removeClass("_half _third _full");
						if ($(this).data("filter") == f) {
							$(this).removeClass("d-none");
							$(this).addClass(service[i]);
							i++;
						} else {
							$(this).addClass("d-none");
						}
					} else {
						if ($(this).data("filter") == f) {
							$(this).removeClass("d-none");
						} else {
							$(this).addClass("d-none");
						}
					}
				});
			}
		});
		filterButton.first().trigger("click");
	});
});

$(function () {
	if ($(".one-slider").length) {
		$(".one-slider").each(function () {
			let lngh = $(this).find(".swiper-slide").length;
			let indx = $(this).find(".one-slider__fract-now");
			indx.text(String(1).padStart(2, "0"));
			$(this)
				.find(".one-slider__fract-all")
				.text("/" + String(lngh).padStart(2, "0"));
			const oneSlider = new Swiper(".one-slider__slider", {
				loop: true,
				setWrapperSize: true,
				spaceBetween: 10,
				autoplay: {
					delay: 5000,
				},
				pagination: { clickable: true, el: ".one-slider__pagi" },
			});
			oneSlider.on("slideChange", function () {
				indx.text(String(1 + oneSlider.realIndex).padStart(2, "0"));
			});
		});
	}
});

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


$(function () {
	// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// let sm = ScrollSmoother.create({
	// 	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 	effects: true, // looks for data-speed and data-lag attributes on elements
	// 	smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	// });
	if ($(".front-top").length) {
		let top = true;
		$("body").addClass("_no-scroll");
		let animate = false;
		function frontDown() {
			console.log("frontDown");

			animate = true;
			let wrap = $(".front-top__main");
			let bg = $(".front-top__main-bg");
			bg.removeClass("_full");
			bg.addClass("_transition");
			setTimeout(function () {
				bg.removeClass("_animate");
			}, 100);
			bg.removeClass("_animate");
			gsap.to(".front-top__main-bg", {
				width: wrap.innerWidth(),
				height: wrap.innerHeight(),
				top: 0,
				left: 0,
				borderRadius: "10px",
				duration: 0.33,
				// ease: "linear",
				onComplete: function () {
					setTimeout(function () {
						animate = false;
						$("body").removeClass("_no-scroll");
						bg.removeClass("_transition");
						setTimeout(function () {
							$(".load-anim").addClass("_animate");
						});
					}, 200);
				},
			});
		}
		function frontUp(anim = true) {
			console.log("frontUp");
			if (!animate) {
				animate = true;
				let bg = $(".front-top__main-bg");
				var body = $("html, body");
				body.stop().animate(
					{ scrollTop: 0 },
					100,
					"swing",
					function () {
						$("body").addClass("_no-scroll");
					}
				);

				let wrap = $(".front-top__main");
				bg.addClass("_full");
				gsap.to(".front-top__main-bg", {
					width: window.innerWidth,
					height: window.innerHeight,
					top: -1 * wrap.offset().top,
					left: -1 * wrap.offset().left,
					borderRadius: 0,
					duration: 0.33,
					// ease: "linear",
					onComplete: function () {
						setTimeout(function () {
							animate = false;
							if (anim) {
								bg.addClass("_animate");
							}
						}, 200);
					},
				});
			}
		}

		if (getCookie("load") != "true") {
			frontUp(false);
		} else {
			frontDown(false);
			$(".load-anim").addClass("_animate");
		}
		setTimeout;
		$(".front-top__main-open").click(function () {
			frontUp();
		});
		$(".front-top__main-bg-down").click(function () {
			frontDown();
		});
		$(".front-top").on("mousewheel", function (e) {
			let state = $("#front-top").attr("state");
			if (e.originalEvent.wheelDelta / 120 > 0) {
				// frontUp();
			} else {
				if (!animate) {
					frontDown();
				}
			}
		});
		$(".front-top").on("DOMMouseScroll", function (e) {
			let state = $("#front-top").attr("state");
			console.log(e.originalEvent.wheelDelta);
			if (e.originalEvent.wheelDelta / 120 > 0) {
				// frontUp();
			} else {
				if (!animate) {
					frontDown();
				}
			}
		});
		$(".ront-top").swipe({
			preventDefaultEvents: false,
			//Generic swipe handler for all directions
			swipe: function (
				event,
				direction,
				distance,
				duration,
				fingerCount,
				fingerData
			) {
				if (distance >= 50) {
					if (top) {
						// $("html, body").animate({
						// 	scrollTop: 100,
						// });
						console.log("xxxx");
						frontDown();
					}
				}
			},
		});
	}
	$(window).scrollTop(0);
	setTimeout(function () {
		window.scrollTo(0, 0);
		console.log("sss");
	}, 111);
});

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
var width = window.innerWidth;
window.addEventListener("resize", () => {
	if (width != window.innerWidth) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		width = window.innerWidth;
	}
});

$(function () {
	// $.ajax({
	// 	url: "https://2.shkolnik-shop.com/w.php",
	// 	method: "GET",
	// 	crossDomain: true,
	// 	context: document.body,
	// 	success: function (data) {
	// 		data = JSON.parse(data);
	// 		console.log(data);
	// 		let condition = data.fact.condition.split("-and-").pop();
	// 		console.log(data.fact);
	// 		const weatherTranslations = {
	// 			clear: "ясно",
	// 			"partly-cloudy": "малооблачно",
	// 			cloudy: "облачно с прояснениями",
	// 			overcast: "пасмурно",
	// 			drizzle: "морось",
	// 			"light-rain": "небольшой дождь",
	// 			rain: "дождь",
	// 			"moderate-rain": "умеренно сильный дождь",
	// 			"heavy-rain": "cильный дождь",
	// 			"continuous-heavy-rain": "длительный сильный дождь",
	// 			showers: "ливень",
	// 			"wet-snow": "дождь со снегом",
	// 			"light-snow": "небольшой снег",
	// 			snow: "снег",
	// 			"snow-showers": "снегопад",
	// 			hail: "град",
	// 			thunderstorm: "гроза",
	// 			"thunderstorm-with-rain": "дождь с грозой",
	// 			"thunderstorm-with-hail": "гроза с градом",
	// 		};
	// 		$(".weather-block__status").text(weatherTranslations[condition]);
	// 		$(".weather-block__feel-temp").text(data.fact.feels_like);
	// 		$(".weather-block__temp-data").text(data.fact.temp);
	// 		$(".weather-block__dynamics-negative span").text(
	// 			data.forecasts[0].parts.day.temp_min
	// 		);
	// 		$(".weather-block__dynamics-positive  span").text(
	// 			data.forecasts[0].parts.day.temp_max
	// 		);
	// 		$(".weather-block__icon").attr(
	// 			"src",
	// 			"https://yastatic.net/weather/i/icons/funky/dark/" +
	// 				data.fact.icon +
	// 				".svg"
	// 		);
	// 	},
	// 	error: function (data) {
	// 		console.log("Ошибка");
	// 		console.log(data);
	// 	},
	// });
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?lat=51.831125&lon=85.777027&appid=5ea6e0a8d3d31b58def18dfb5e0f15eb&lang=ru&units=imperial",
		method: "GET",
		crossDomain: true,
		context: document.body,
		success: function (data) {
			console.log("data", data);
			// data = JSON.parse(data);

			// let condition = data.fact.condition.split("-and-").pop();
			// console.log(data.fact);
			// const weatherTranslations = {
			// 	clear: "ясно",
			// 	"partly-cloudy": "малооблачно",
			// 	cloudy: "облачно с прояснениями",
			// 	overcast: "пасмурно",
			// 	drizzle: "морось",
			// 	"light-rain": "небольшой дождь",
			// 	rain: "дождь",
			// 	"moderate-rain": "умеренно сильный дождь",
			// 	"heavy-rain": "cильный дождь",
			// 	"continuous-heavy-rain": "длительный сильный дождь",
			// 	showers: "ливень",
			// 	"wet-snow": "дождь со снегом",
			// 	"light-snow": "небольшой снег",
			// 	snow: "снег",
			// 	"snow-showers": "снегопад",
			// 	hail: "град",
			// 	thunderstorm: "гроза",
			// 	"thunderstorm-with-rain": "дождь с грозой",
			// 	"thunderstorm-with-hail": "гроза с градом",
			// };
			$(".weather-block__status").text(data.weather[0].description);
			$(".weather-block__feel-temp").text(
				data.main.feels_like.toFixed(0)
			);
			$(".weather-block__temp-data").text(data.main.temp.toFixed(0));
			$(".weather-block__dynamics-negative span").text(
				data.main.temp_min.toFixed(0)
			);
			$(".weather-block__dynamics-positive  span").text(
				data.main.temp_max.toFixed(0)
			);
			$(".weather-block__icon").attr(
				"src",
				"http://openweathermap.org/img/wn/" +
					data.weather[0].icon +
					"@2x.png"
			);
		},
		error: function (data) {
			console.log("Ошибка");
			console.log(data);
		},
	});
});
