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
