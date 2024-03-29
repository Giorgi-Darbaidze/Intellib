const discord_link = document.getElementById("our_dis")
const even = document.querySelectorAll('.even')
const odd = document.querySelectorAll('.odd')

// ---DARK THEME---
function dark_theme_function(){
	discord_link.classList.remove("our_dis")
	discord_link.classList.add("our_dis_dark_theme")
	discord_link.classList.add("our_dis_dark_theme:hover")
	document.getElementById('header_theme').style.backgroundColor = 'rgba(25, 25, 112, 0.683'
	document.getElementById('list_theme').style.boxShadow = "0 -3rem 4rem rgb(33, 40, 57)"
	document.getElementById('html_theme').style.backgroundColor = 'rgb(33, 40, 57)'
	document.getElementById('themes_style').style.borderColor = 'white'
	document.getElementById('header_theme').style.color = 'white'
	document.getElementById('html_theme').style.color = 'white'
	document.getElementById('bar').style.borderColor = 'white'
	document.getElementById('bar').style.color = 'white'
	
	even.forEach(even => {
		even.style.backgroundColor = 'rgb(36, 44, 114)'
		even.style.color = 'white'
	})

	odd.forEach(odd => {
		odd.style.backgroundColor = 'rgb(49, 66, 148)'
		odd.style.color = 'white'
	})
}


// ---LIGHT THEME---
function light_theme_function(){
	discord_link.classList.remove("our_dis_dark_theme")
	discord_link.classList.add("our_dis")
	document.getElementById('list_theme').style.boxShadow = "0 -3rem 4rem rgb(0, 191, 255)"
	document.getElementById('header_theme').style.backgroundColor = 'rgb(65, 105, 225)'
	document.getElementById('html_theme').style.backgroundColor = 'white'
	document.getElementById('themes_style').style.borderColor = 'black'
	document.getElementById('header_theme').style.color = 'black'
	document.getElementById('html_theme').style.color = 'black'
	document.getElementById('bar').style.borderColor = 'black'
	document.getElementById('bar').style.color = 'black'

	even.forEach(even => {
		even.style.backgroundColor = 'rgb(32, 170, 255)'
		even.style.color = 'black'
	})

	odd.forEach(odd => {
		odd.style.backgroundColor = 'rgb(116, 199, 252)'
		odd.style.color = 'black'
	})
}

export {
	dark_theme_function,
	light_theme_function
}
