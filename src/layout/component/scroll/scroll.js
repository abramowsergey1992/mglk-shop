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
