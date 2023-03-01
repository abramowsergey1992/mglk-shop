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
