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
