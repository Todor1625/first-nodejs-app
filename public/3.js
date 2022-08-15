const forms = document.getElementsByTagName("form");

if (forms.length > 0) {
	const form = forms[0];

	form.addEventListener('submit', function(ev) {
		const radios = document.querySelectorAll('input[type="radio"');

		let pritisnut = false;

		for (const radio of radios) {
			if (radio.checked) {
				pritisnut = true;
				break;
			}
		}

		if (!pritisnut) {
			window.alert("Odaberite uredjenje!");
			ev.preventDefault();
		}
	});
}