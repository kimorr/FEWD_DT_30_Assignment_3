document.getElementById('signup_btn').onclick = comingSoon;

function comingSoon() {
	document.getElementById('signup_popup').style.display = "block";
}

document.getElementById('close_signup_btn').onclick = closePopup;

function closePopup() {
	document.getElementById('signup_popup').style.display = "none";
}

