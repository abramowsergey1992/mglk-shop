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
