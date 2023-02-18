import {
	username_output,
	email_output
} from './modules/data_output_functions.js'
const input_form = document.getElementById("form")

input_form.addEventListener("submit", function(event) {
	event.preventDefault()

	const input = document.getElementById("bar").value

	if (input.includes("useranme")) {
		username_output()
	}
	else if (input.includes("email")) {
		email_output()
	}
})