const icons = document.querySelectorAll(".icon-image");
const faqs = document.querySelectorAll(".label");
const answers = document.querySelectorAll(".content");

for (let i = 0; i < faqs.length; i++) {
	faqs[i].addEventListener("click", () => {
		if (!answers[i].classList.contains("toggle")) {
			answers[i].classList.add("toggle");
			icons[i].src = "assets/images/icon-minus.svg";
		} else {
			answers[i].classList.remove("toggle");
			icons[i].src = "assets/images/icon-plus.svg";
		}
	});
}
