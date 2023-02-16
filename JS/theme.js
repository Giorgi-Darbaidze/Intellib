const light_theme_btn = document.getElementById('light_theme')
const dark_theme_btn = document.getElementById('dark_theme')
const even = document.querySelectorAll('.even')
const odd = document.querySelectorAll('.odd')
const discord_link = document.getElementById("our_dis")

// ---DARK THEME---

dark_theme_btn.addEventListener('click', function () {
	discord_link.classList.remove("our_dis")
	discord_link.classList.add("our_dis_dark_theme")
	discord_link.classList.add("our_dis_dark_theme:hover")
	document.getElementById('header_theme').style.backgroundColor = 'rgba(25, 25, 112, 0.683'
	document.getElementById('header_theme').style.color = 'white'
	document.getElementById('list_theme').style.boxShadow = "0 -3rem 4rem rgb(33, 40, 57)"
	document.getElementById('html_theme').style.backgroundColor = 'rgb(33, 40, 57)'
	document.getElementById('html_theme').style.color = 'white'
	document.getElementById('bar').style.color = 'white'
	document.getElementById('bar').style.borderColor = 'white'
	

	even.forEach(even => {
		even.style.backgroundColor = 'rgb(36, 44, 114)'
		even.style.color = 'white'
	})

	odd.forEach(odd => {
		odd.style.backgroundColor = 'rgb(49, 66, 148)'
		odd.style.color = 'white'
	})
})

// ---LIGHT THEME---

light_theme_btn.addEventListener('click', function () {
	document.getElementById('header_theme').style.backgroundColor = 'rgb(65, 105, 225)'
	document.getElementById('header_theme').style.color = 'black'
	document.getElementById('list_theme').style.boxShadow = "0 -3rem 4rem rgb(0, 191, 255)"
	document.getElementById('html_theme').style.backgroundColor = 'white'
	document.getElementById('html_theme').style.color = 'black'
	document.getElementById('bar').style.color = 'black'
	document.getElementById('bar').style.borderColor = 'black'
	discord_link.classList.remove("our_dis_dark_theme")
	discord_link.classList.add("our_dis")

	even.forEach(even => {
		even.style.backgroundColor = 'rgb(32, 170, 255)'
		even.style.color = 'black'
	})

	odd.forEach(odd => {
		odd.style.backgroundColor = 'rgb(116, 199, 252)'
		odd.style.color = 'black'
	})
})
