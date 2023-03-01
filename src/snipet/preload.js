function getCookie(e, t = !1) {
	if (!e) return;
	let n = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				e.replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	if (n) {
		let e = decodeURIComponent(n[1]);
		if (t)
			try {
				return JSON.parse(e);
			} catch (e) {}
		return e;
	}
}
function setCookie(e, t, n = { path: "/" }) {
	if (!e) return;
	(n = n || {}).expires instanceof Date &&
		(n.expires = n.expires.toUTCString()),
		t instanceof Object && (t = JSON.stringify(t));
	let o = encodeURIComponent(e) + "=" + encodeURIComponent(t);
	for (let e in n) {
		o += "; " + e;
		let t = n[e];
		!0 !== t && (o += "=" + t);
	}
	document.cookie = o;
}
function deleteCookie(e) {
	setCookie(e, null, { expires: new Date(), path: "/" });
}
console.log('getCookie("load")', getCookie("load"));
if (getCookie("load")) {
	document.querySelector(".preload").style.display = "none";
} else {
	let load = false;
	let preloadimg = document.querySelector("#preload-img");
	setTimeout(function () {
		preloadimg.classList.add("active");
		let preload = setInterval(function () {
			window.scrollTo(0, 0);
			if (load) {
				setCookie("load", "true");
				$(".preload").fadeOut();
				if (document.querySelector(".front-top__main-bg")) {
					setTimeout(function () {
						document
							.querySelector(".front-top__main-bg")
							.classList.add("_animate");
					}, 500);
				}
				clearInterval(preload);
			} else {
				preloadimg.classList.remove("active");
				setTimeout(function () {
					preloadimg.classList.add("active");
				}, 3000);
			}
		}, 3000);
	}, 300);
}
