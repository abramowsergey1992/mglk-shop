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
