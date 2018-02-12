function showKzSnackbar(text,duration,isVisible) {
	var kzsnackbar = document.getElementById('kz-snackbar');
	var kzcontent = document.getElementById('kz-content');
	
	if (text == null || duration == null || isVisible == null) {
		alert('Calling mismatch. There is/are missing variable(s).');
	} else {
		if (kzsnackbar.style.bottom !== "0") {
			kzsnackbar.style.bottom = "0";
			kzcontent.innerHTML = text;
			setTimeout(function() {
				kzsnackbar.style.bottom = "-3em";
			}, duration*1000);
		};
		
		if (isVisible) {
			document.getElementById('kz-close').style.display = 'block' 
		} else {
			document.getElementById('kz-close').style.display = 'none' 
		};
	};
};

function closeKzSnackbar() {
	document.getElementById('kz-snackbar').style.bottom = '-3em';
};