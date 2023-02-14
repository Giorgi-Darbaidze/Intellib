const username = document.getElementById('btn_username')
const email = document.getElementById("btn_email")
const vpn_proxy = document.getElementById("btn_vpn")
const domain = document.getElementById("btn_domain")
const ip = document.getElementById("btn_ip")
const img = document.getElementById("btn_img")
const social = document.getElementById("btn_social")
const person = document.getElementById("btn_person")
const phone = document.getElementById("btn_phone")
const car = document.getElementById("btn_car")
const webcam = document.getElementById("btn_webcam")
const public = document.getElementById("btn_public")
const business = document.getElementById("btn_business")
const maps = document.getElementById("btn_maps")
const plane = document.getElementById("btn_plane")
const archives = document.getElementById("btn_archives")
const translators = document.getElementById("btn_languages")
const hashes = document.getElementById("btn_hashes")
const virusScan = document.getElementById("btn_virusScan")
const engines = document.getElementById("btn_search_engines")
const meta = document.getElementById("btn_meta")
const speciality = document.getElementById("btn_speciality")
const darknet = document.getElementById("btn_darknet")
const pastebins = document.getElementById("btn_pastebins")
const docs = document.getElementById("btn_docs")
const qr = document.getElementById("btn_qr")
const dorks = document.getElementById("btn_dorks")
const other = document.getElementById("btn_other")
const schemes = document.getElementById("btn_schemes")
const leaks = document.getElementById("btn_leaks")
const shops = document.getElementById("btn_shops")
const books = document.getElementById("btn_books")

let data_output = document.getElementById('data_output')
let data_output_desc = document.getElementById("data_output_desc")
let data_title = document.getElementById("data_title")

// For Username
username.addEventListener("click", function() {
    data_title.textContent = "Username Search"
    fetch("JS/data.json")
        .then(response => response.json())
        .then(data => {
            let list_items1 = ""
            for (let i = 0; i < data.username_search.length; i++) {
                list_items1 += `
                <li>
                    <a class="green" target="_blank" href="${data.username_search[i]}"> ${data.username_search[i]} </a>
                </li>
                `
            }
            data_output.innerHTML = list_items1
        })
    data_output_desc.innerHTML = `
	<br>
    <br>
    <br>
    <li> - Registration Needed</li>
    <li> - Registration Needed</li>
    <li> - Not Free</li>
    `
})

// For Email
email.addEventListener("click", function() {
    data_title.textContent = "Email Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		    let list_items = ""
		    for (let i = 0; i < data.email_search.length; i++) {
			    list_items += `
			    <li>
			    	<a class="green" target="_blank" href="${data.email_search[i]}"> ${data.email_search[i]} </a>
			    </li>
			    `
		    }
		    data_output.innerHTML = list_items
        })
    data_output_desc.innerHTML = `
	<li> - Not Full Free</li>
    <li> - Not Free</li>
    <li> - Useless</li>
    <br>
    <li> - USA Search</li>
    <br>
    <br>
    <br>
    <br>
    <br>
    `
})

// For VPN & Proxy
vpn_proxy.addEventListener("click", function() {
    data_title.textContent = "VPN & Proxy Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		    let list_items1 = ""
		    for (let i = 0; i < data.vpn_proxy.length; i++) {
		    	list_items1 += `
		    	<li>
		    		<a class="green" target="_blank" href="${data.vpn_proxy[i]}"> ${data.vpn_proxy[i]} </a>
		    	</li>
		    	`
		    }
		    data_output.innerHTML = list_items1
        })
    data_output_desc.innerHTML = `
	<li> - Not Full Free</li>
    <li> - Not Free</li>
    <li> - Free VPN</li>
    <li> - VPN Detector, IP Logger</li>
    <br>
    `
})

// For Domain
domain.addEventListener("click", function() {
    data_title.textContent = "Domain Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		    let list_items1 = ""
		    for (let i = 0; i < data.domain_search.length; i++) {
		    	list_items1 += `
		    	<li>
		    		<a class="green" target="_blank" href="${data.domain_search[i]}"> ${data.domain_search[i]} </a>
		    	</li>
		    	`
		    }
		    data_output.innerHTML = list_items1
        })
    data_output_desc.innerHTML = `
	<br>
    <br>
    <li> - AS, CVE, SSL/TLS Cert search</li>
    <br>
    <br>
    <br>
    <li> - Website Analyser</li>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    `
})

// For IP
ip.addEventListener("click", function() {
    data_title.textContent = "IP Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.ip_address.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.ip_address[i]}"> ${data.ip_address[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    
    data_output_desc.innerHTML = `
	<br>
    <br>
    <br>
    <br>
    <li> - Canary Tokens</li>
    <br>
    <br>
    <li> - DWORD IP Converter</li>
    <br>
    <li> - Registration Needed</li>
    `
})

// For Image & Video
img.addEventListener("click", function() {
    data_title.textContent = "Image & Video Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.image_video.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.image_video[i]}"> ${data.image_video[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    
    data_output_desc.innerHTML = `
	<br>
    <br>
    <br>
    <br>
    <li> - Registration needed</li>
    <br>
    <li> - MultiSearch</li>
    <li> - Video Archive</li>
    <li> - Video KeyWord Search</li>
    <li> - Video KeyWord Search</li>
    <br>
    <br>
    <br>
    <li> - Photo/Gif editor</li>
    <br>
    <li> - Watermark Patcher</li>
    `
})

// For Social
social.addEventListener("click", function() {
    data_title.textContent = "Social Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.ip_address.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.ip_address[i]}"> ${data.ip_address[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    
    data_output_desc.innerHTML = `
	<li> - Social net Search engine</li>
    <li> - Tweets Search</li>
    <li> - Tweets Search</li>
    <br>
    <li> - Hashtag search</li>
    <br>
    <br>
    <li> - Japan</li>
    <li> - Russia</li>
    <li> - Latin America</li>
    <li> - Registration needed</li>
    <li> - Skype Search</li>
    `
})

// For Person
person.addEventListener("click", function() {
    data_title.textContent = "Person Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.person.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.person[i]}"> ${data.person[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <li> - Register needed</li>
    <br>
    <li> - Not Full Free</li>
    <br>
    <li> - Google Dorks</li>
    <br>
    <li> - Not Free</li>
    <li> - UK Search</li>
    <li> - USA Search</li>
    <li> - Canada Search</li>
    <li> - USA Students</li>
    <br>
    <li> - USA Inmates</li>
    <br>
    <br>
    <li> - USA Search</li>
    <br>
    <br>
    <br>
    <li> - USA Search</li>
    <br>
    <br>
    <br>
    <li> - USA Inmates</li>
    <li> - USA Inmates</li>
    <li> - Experts Search</li>
    <li> - Experts Search</li>
    <br>
    <li> - USA Search</li>
    <br>
    <li> - USA Search</li>
    <br>
    <li> - Inmates</li>
    <li> - USA Search</li>
    <br>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    `
})

// For Phone
phone.addEventListener("click", function() {
    data_title.textContent = "Phone Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.telephone.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.telephone[i]}"> ${data.telephone[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <li> - Not Full Free</li>
    <li> - Not Free</li>
    <li> - USA Search</li>
    <br>
    <br>
    <li> - Not Free</li>
    <li> - Canada Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - India Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - USA Search</li>
    <li> - PayPhone Telephones Around the World</li>
    <li> - Free SMS around the World</li>
    `
})

// For Car
car.addEventListener("click", function() {
    data_title.textContent = "Car Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.car_license.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.car_license[i]}"> ${data.car_license[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <br>
    <li> - USA Search</li>
    <br>
    <li> - USA Search</li>
    `
})

// For Webcam
webcam.addEventListener("click", function() {
    data_title.textContent = "Live Webcams"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.webcams.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.webcams[i]}"> ${data.webcams[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Public
public.addEventListener("click", function() {
    data_title.textContent = "Public Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.public_records.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.public_records[i]}"> ${data.public_records[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Business
business.addEventListener("click", function() {
    data_title.textContent = "Business Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.business_records.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.business_records[i]}"> ${data.business_records[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <li> - UK Search</li>
    <li> - USA Search</li>
    `
})

// For Maps
maps.addEventListener("click", function() {
    data_title.textContent = "Public Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.maps.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.maps[i]}"> ${data.maps[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <li> - Shadow/Sun Time Lapse Position</li>
    <li> - Shadow/Sun Time Lapse Position</li>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <li> - Wireless Devices Map</li>
    <li> - Satellites</li>
    <br>
    <li> - Ground Impact and Damage Radius Calculator</li>
    <li> - Time Zone Calculators</li>
    <br>
    <br>
    <br>
    <li> - Satellite Image Timelapse</li>
    <li> - Map Overlays for Google Earth</li>
    <br>
    <li> - EarthData</li>
    <li> - Terrain Analysis</li>
    <br>
    <br>
    <li> - Some Japanese Shit</li>
    <br>
    `
})

// For Plane
plane.addEventListener("click", function() {
    data_title.textContent = "Plane Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.plane_track.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.plane_track[i]}"> ${data.plane_track[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Archives
archives.addEventListener("click", function() {
    data_title.textContent = "Archive Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.archives.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.archives[i]}"> ${data.archives[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Translators
translators.addEventListener("click", function() {
    data_title.textContent = "Language Translators"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.translators.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.translators[i]}"> ${data.translators[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Hashes
hashes.addEventListener("click", function() {
    data_title.textContent = "Cryptography"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.cryptography.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.cryptography[i]}"> ${data.cryptography[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <li> - Bunch of Tools</li>
    <li> - Code Search</li>
    <li> - Code Search</li>
    <li> - Code Search</li>
    <li> - Code Search</li>
    <br>
    `
})

// For Virus Scanners
virusScan.addEventListener("click", function() {
    data_title.textContent = "Virus Scanners"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.malware_scanners.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.malware_scanners[i]}"> ${data.malware_scanners[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// For Search Engines
engines.addEventListener("click", function() {
    data_title.textContent = "Search Engines"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.search_engines.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.search_engines[i]}"> ${data.search_engines[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <li> - Japan</li>
    <li> - Korea</li>
    <li> - France</li>
    <li> - Israel</li>
    <li> - China</li>
    <li> - Sweden</li>
    <li> - South Korea</li>
    <li> - Poland</li>
    <li> - Iran</li>
    <li> - Portugal</li>
    <li> - Russia</li>
    <li> - Switzerland</li>
    <li> - Czech Republic</li>
    <li> - WayBack Map Machine</li>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    `
})

// For Meta
meta.addEventListener("click", function() {
    data_title.textContent = "Meta Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.meta_search.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.meta_search[i]}"> ${data.meta_search[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = ""
})

// Specialty Search
speciality.addEventListener("click", function() {
    data_title.textContent = "Specialty Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		let list_items1 = ""
		for (let i = 0; i < data.specialty_search.length; i++) {
			list_items1 += `
			<li>
				<a class="green" target="_blank" href="${data.specialty_search[i]}"> ${data.specialty_search[i]} </a>
			</li>
			`
		}
		data_output.innerHTML = list_items1
    })
    data_output_desc.innerHTML = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <li> - Website Cert Search</li>
    `
})
