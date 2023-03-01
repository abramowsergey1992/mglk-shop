$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$("._mask-postalcode").each(function () {
		Inputmask("999999").mask(this);
	});
	$("._mask-numbercard").each(function () {
		Inputmask("9999-9999-9999-9999").mask(this);
	});
	$("._mask-datercard").each(function () {
		Inputmask("99/99").mask(this);
	});
	$("._mask-cvvrcard").each(function () {
		Inputmask("999").mask(this);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`<span class="link-arrow__text">${$(
				this
			).html()}</span> <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 9.30769L27.7071 10.0148L28.4142 9.30769L27.7071 8.60059L27 9.30769ZM19.3994 18.3225L27.7071 10.0148L26.2929 8.60059L17.9852 16.9083L19.3994 18.3225ZM27.7071 8.60059L19.3994 0.292893L17.9852 1.70711L26.2929 10.0148L27.7071 8.60059ZM27 8.30769H0V10.3077H27V8.30769Z" /></svg>`
		);
	});
	$(".link-chevron").each(function () {
		$(this).html(
			`<span class="link-chevron__text">${$(
				this
			).html()}</span> <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L14 12.1042L1 23.2083" stroke="" stroke-width="1.4"/></svg>`
		);
	});
});
