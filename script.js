const toggleDropdown = document.querySelector(".dropdown-trigger"),
	dropdownMenu = document.querySelector(".dropdown-menu-wrapper");
	
toggleDropdown.addEventListener('click', () => {
	var isExpanded = toggleDropdown.getAttribute("aria-expanded") === "true";
toggleDropdown.setAttribute("aria-expanded", !isExpanded);
}); 
// hamburger 
const ham = document.querySelector(".hamburger-menu"),
	nav = document.querySelector(".navbar");
ham.addEventListener("click", () => {
	ham.classList.toggle("active");
	nav.classList.toggle("show-nav");
});
document.addEventListener("click", e => {
	if (!dropdownMenu.contains(e.target) && !toggleDropdown.contains(e.target) || dropdownMenu.contains(e.target)){
		toggleDropdown.setAttribute("aria-expanded", false)
	}
	if (!nav.contains(e.target) && !ham.contains(e.target)) {
		ham.classList.remove("active")
		nav.classList.remove("show-nav")
	}	
});

// validation form
var emailInput = document.querySelector("#input-email"),
	passwordInput = document.querySelector("#input-password");
	
	var label_input = document.querySelector("#label-password");
	console.log(label_input.textContent);
passwordInput.addEventListener("input", () => {
	var Value = passwordInput.value;
	if (Value.length >= 8 || Value.length >= 1) {
		 passwordInput.classList.add("valid");
	} else {
		passwordInput.classList.remove("valid");
	}
	if (Value.length > 1) {
        label_input.textContent = label_input.textContent.replace("Enter Your Password", "Password minimum 8 Character");
	} 
	if (Value.length === 0) {
		label_input.textContent = "Enter Your Password"
	}
	if (Value.length >= 8) {
		label_input.textContent = label_input.textContent.replace("Password minimum 8 Character", "Yess");
	}
});
	console.log(label_input.textContent);

var label_email = document.querySelector("#label-email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
emailInput.addEventListener("input", () => {
	var NewV = emailInput.value;
	if (emailRegex.test(NewV)) {
		emailInput.classList.add("valid");
		label_email.textContent = "Yess"
	} else {
		emailInput.classList.remove("valid");
	 label_email.textContent = "username@domain.com"
	}
	if (NewV === "") {
		label_email.textContent = "Enter Email";
	}
}); 

const form = document.querySelector("form");
form.addEventListener("submit", () =>{
	window.href = "s.html"
}); 

		// => dark mode logic <=  //
// button dark & white
var darkToggle = document.getElementById("dark-mode-toggle"),
	lightToggle = document.getElementById("light-mode-toggle");
// components
var isBackground = document.querySelector(".bg-animated"),
	root = document.getElementById("root");

darkToggle.addEventListener('click', ()=>{
	isBackground.classList.replace("light","dark");
	root.classList.replace("light-mode", "dark-mode");
});
lightToggle.addEventListener('click', () =>{
	isBackground.classList.replace("dark", "light");
	root.classList.replace("dark-mode", "light-mode")
});