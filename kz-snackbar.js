var timer;

function showKzSnackbar(text,duration,isVisible) {
	var kzsnackbar = document.getElementById('kz-snackbar');
	var kzcontent = document.getElementById('kz-content');

	function clearKzTimeout(){
		//clear previous message's hider timeout
		clearTimeout(timer);
	}

	function setKzTimeout(){
		timer = setTimeout(function() {
			var clientHeight = document.getElementById('kz-snackbar').clientHeight;
			kzsnackbar.style.bottom = "-" + clientHeight + "px";
		}, duration);
	}

	clearKzTimeout();
	kzsnackbar.addEventListener("mouseenter", clearKzTimeout);
	kzsnackbar.addEventListener("mouseleave", setKzTimeout);

	if (text == null || duration == null || isVisible == null) {
		alert('Calling mismatch. There is/are missing variable(s).');
	} else {
		if (kzsnackbar.style.bottom !== "0") {
			kzsnackbar.style.width = kzsnackbar.childNodes[5].offsetWidth + 100 + 'px';
			kzsnackbar.style.bottom = "0";
			kzcontent.innerHTML = text;
			setKzTimeout();
		};
		
		if (isVisible) {
			document.getElementById('kz-close').style.display = 'block' 
		} else {
			document.getElementById('kz-close').style.display = 'none' 
		};
	};
};

function closeKzSnackbar() {
	var clientHeight = document.getElementById('kz-snackbar').clientHeight;
	document.getElementById('kz-snackbar').style.bottom = "-" + clientHeight + "px";
};
