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
