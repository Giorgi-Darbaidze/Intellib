// ---THEME FUNCTION CALLS---
const light_theme_btn = document.getElementById('light_theme')
const dark_theme_btn = document.getElementById('dark_theme')

light_theme_btn.addEventListener('click', light_theme_function)
dark_theme_btn.addEventListener('click', dark_theme_function)


// ---DATA OUTPUT FUNCTION CALLS---
const engines = document.getElementById("btn_search_engines")
const translators = document.getElementById("btn_languages")
const speciality = document.getElementById("btn_speciality")
const virusScan = document.getElementById("btn_virusScan")
const pastebins = document.getElementById("btn_pastebins")
const publicSearch = document.getElementById("btn_public")
const archives = document.getElementById("btn_archives")
const business = document.getElementById("btn_business")
const username = document.getElementById('btn_username')
const darknet = document.getElementById("btn_darknet")
const schemes = document.getElementById("btn_schemes")
const social = document.getElementById("btn_social")
const person = document.getElementById("btn_person")
const webcam = document.getElementById("btn_webcam")
const hashes = document.getElementById("btn_hashes")
const vpn_proxy = document.getElementById("btn_vpn")
const domain = document.getElementById("btn_domain")
const email = document.getElementById("btn_email")
const phone = document.getElementById("btn_phone")
const plane = document.getElementById("btn_plane")
const tools = document.getElementById("btn_other")
const leaks = document.getElementById("btn_leaks")
const shops = document.getElementById("btn_shops")
const books = document.getElementById("btn_books")
const maps = document.getElementById("btn_maps")
const meta = document.getElementById("btn_meta")
const docs = document.getElementById("btn_docs")
const car = document.getElementById("btn_car")
const img = document.getElementById("btn_img")
const ip = document.getElementById("btn_ip")
const qr = document.getElementById("btn_qr")


translators.addEventListener("click", translators_output)
speciality.addEventListener("click", speciality_output)
virusScan.addEventListener("click", virusScan_output)
publicSearch.addEventListener("click", public_output)
pastebins.addEventListener("click", pastebins_output)
username.addEventListener("click", username_output)
business.addEventListener("click", business_output)
archives.addEventListener("click", archives_output)
engines.addEventListener("click", engines_output)
darknet.addEventListener("click", darknet_output)
schemes.addEventListener("click", schemes_output)
webcam.addEventListener("click", webcam_output)
vpn_proxy.addEventListener("click", vpn_output)
domain.addEventListener("click", domain_output)
social.addEventListener("click", social_output)
person.addEventListener("click", person_output)
hashes.addEventListener("click", hashes_output)
phone.addEventListener("click", phone_output)
plane.addEventListener("click", plane_output)
email.addEventListener("click", email_output)
leaks.addEventListener("click", leaks_output)
shops.addEventListener("click", shops_output)
tools.addEventListener("click", tools_output)
books.addEventListener("click", books_output)
maps.addEventListener("click", maps_output)
img.addEventListener("click", image_output)
meta.addEventListener("click", meta_output)
docs.addEventListener("click", docs_output)
qr.addEventListener("click", qr_gen_output)
car.addEventListener("click", car_output)
ip.addEventListener("click", ip_output)



import {
	translators_output,
	speciality_output,
	pastebins_output,
	virusScan_output,
	username_output,
	business_output,
	archives_output,
	darknet_output,
	engines_output,
	schemes_output,
	social_output,
	hashes_output,
	public_output,
	webcam_output,
	person_output,
	domain_output,
	qr_gen_output,
	email_output,
	plane_output,
	phone_output,
	image_output,
	books_output,
	tools_output,
	leaks_output,
	shops_output,
	maps_output,
	meta_output,
	docs_output,
	car_output,
	vpn_output,
	ip_output
} from './modules/data_output_functions.js'

import {
	light_theme_function,
	dark_theme_function
} from './modules/theme.js'
