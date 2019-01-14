document.querySelector(".return_form_content").onsubmit = function () {
	document.querySelector(".modal").style.display = 'block';

	return false;
}

document.querySelector("#close").onclick = () => document.querySelector(".modal").style.display = 'none';