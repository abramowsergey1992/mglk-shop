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
