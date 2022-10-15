// HEADER
const sendBunttonHeader = document.getElementById("send-header");
const emailHeader = document.getElementById("input-header");
const formHeader = document.getElementById("form-header");
let headerErrorParagraph = document.querySelector('.header-form-alert');
// NEWSLETTER
const sendBunttonNewsletter = document.getElementById("send-newsletter");
const emailNewsletter = document.getElementById("input-newsletter");
let newsletterErrorParagraph = document.querySelector('.newsletter-form-alert');
const formNewsletter = document.querySelector('.newsletter__form');

// Expression to validate email
const emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


formHeader.addEventListener("submit",(e)=>{
	e.preventDefault();
	if (!emailExpression.test(emailHeader.value)) {
		headerErrorParagraph.style.display = "block";
		emailHeader.style.borderColor = "#f00";
	}
	else {
		headerErrorParagraph.removeAttribute('style');
		emailHeader.removeAttribute('style');
	}
});

formNewsletter.addEventListener('click', (e)=> {
	e.preventDefault();
	if(!emailExpression.test(emailNewsletter.value)) {
		newsletterErrorParagraph.style.display = "block";
		emailNewsletter.style.border = "1px solid #f00";
	}
	else {
		newsletterErrorParagraph.removeAttribute('style');
		emailNewsletter.removeAttribute('style');
	}
});