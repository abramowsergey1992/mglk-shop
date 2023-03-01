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
