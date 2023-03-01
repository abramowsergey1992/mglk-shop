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
