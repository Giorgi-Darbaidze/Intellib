let data_output = document.getElementById('data_output')
let data_title = document.getElementById("data_title")

export {
	translators_output,
	speciality_output,
	pastebins_output,
	virusScan_output,
	username_output,
	archives_output,
	business_output,
	darknet_output,
	schemes_output,
	engines_output,
	public_output,
	webcam_output,
	hashes_output,
	domain_output,
	person_output,
	social_output,
	qr_gen_output,
	phone_output,
	image_output,
	email_output,
	plane_output,
	books_output,
	leaks_output,
	shops_output,
	tools_output,
	maps_output,
	docs_output,
	meta_output,
	car_output,
	vpn_output,
	ip_output
}


// ---USERNAME SEARCH---
function username_output() {
 data_title.textContent = "Username Search"
 fetch("JS/data.json")
  .then(response => response.json())
  .then(data => {
  	let list_items1 = ""
	
   for (let i = 0; i < data.username_search.length, i < data.desc_username.length; i++) {
    list_items1 += `
    <li>
     <a class="green" target="_blank" href="${data.username_search[i]}"> ${data.username_search[i]} </a>
					${data.desc_username[i]}
    </li>
    `
   }
   data_output.innerHTML = list_items1
  })
}


// ---EMAIL SEARCH---
function email_output(){
 data_title.textContent = "Email Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items = ""
  	
		 for (let i = 0; i < data.email_search.length, i < data.desc_email.length; i++) {
		  list_items += `
		  <li>
		  	<a class="green" target="_blank" href="${data.email_search[i]}"> ${data.email_search[i]} </a>
					${data.desc_email[i]}
		  </li>
		  `
		 }
		 data_output.innerHTML = list_items
  })
}


// ---VPN & PROXY---
function vpn_output(){
 data_title.textContent = "VPN & Proxy Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
	  let list_items1 = ""

	  for (let i = 0; i < data.vpn_proxy.length, i < data.desc_vpn_proxy.length; i++) {
	  	list_items1 += `
	  	<li>
	  		<a class="green" target="_blank" href="${data.vpn_proxy[i]}"> ${data.vpn_proxy[i]} </a>
					${data.desc_vpn_proxy[i]}
	  	</li>
	  	`
	  }
	  data_output.innerHTML = list_items1
  }) 
}


// ---DOMAIN SEARCH---
function domain_output() {
 data_title.textContent = "Domain Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
           
		 for (let i = 0; i < data.domain_search.length, i < data.desc_domain.length; i++) {
		  list_items1 += `
		  <li>
		  	<a class="green" target="_blank" href="${data.domain_search[i]}"> ${data.domain_search[i]} </a>
					${data.desc_domain[i]}
		  </li>
		  `
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---IP ADDRESS---
function ip_output(){
 data_title.textContent = "IP Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""
  	
			for (let i = 0; i < data.ip_address.length, i < data.desc_ip.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.ip_address[i]}"> ${data.ip_address[i]} </a>
					${data.desc_ip[i]}
				</li>
				`
			}
			data_output.innerHTML = list_items1
 	})
}


// ---IMAGES & VIDEOS---
function image_output(){
 data_title.textContent = "Image & Video Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""
   
			for (let i = 0; i < data.image_video.length, i < data.desc_image_video.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.image_video[i]}"> ${data.image_video[i]} </a>
					${data.desc_image_video[i]}
				</li>
				`
			}
			data_output.innerHTML = list_items1
  })
}


// ---SOCIAL NET SEARCH---
function social_output(){
 data_title.textContent = "Social Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

		 for (let i = 0; i < data.social_net.length, i < data.desc_social.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.social_net[i]}"> ${data.social_net[i]} </a>
					${data.desc_social[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---PERSON SEARCH---
function person_output(){
 data_title.textContent = "Person Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

		 for (let i = 0; i < data.person.length, i < data.desc_person.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.person[i]}"> ${data.person[i]} </a>
					${data.desc_person[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---PHONE SEARCH---
function phone_output(){
 data_title.textContent = "Phone Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

		 for (let i = 0; i < data.telephone.length, i < data.desc_phone.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.telephone[i]}"> ${data.telephone[i]} </a>
					${data.desc_phone[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---CAR SEARCH---
function car_output(){
 data_title.textContent = "Car Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

		 for (let i = 0; i < data.car_license.length, i < data.desc_car.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.car_license[i]}"> ${data.car_license[i]} </a>
					${data.desc_car[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---WEBCAM SEARCH---
function webcam_output(){
 data_title.textContent = "Live Webcams"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   

		 for (let i = 0; i < data.webcams.length, i < data.desc_webcam.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.webcams[i]}"> ${data.webcams[i]} </a>
					${data.desc_webcam[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---PUBLIC SEARCH---
function public_output(){
 data_title.textContent = "Public Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.public_records.length, i < data.desc_public.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.public_records[i]}"> ${data.public_records[i]} </a>
					${data.desc_public[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---BUSINESS RECORDS---
function business_output(){
 data_title.textContent = "Business Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.business_records.length, i < data.desc_business.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.business_records[i]}"> ${data.business_records[i]} </a>
					${data.desc_business[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---MAPS---
function maps_output(){
 data_title.textContent = "Geolocation tools"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
           
		 for (let i = 0; i < data.maps.length, i < data.desc_maps.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.maps[i]}"> ${data.maps[i]} </a>
					${data.desc_maps[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1 
  })
}


// ---PLANE TRACK---
function plane_output(){
 data_title.textContent = "Plane Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.plane_track.length, i < data.desc_plane.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.plane_track[i]}"> ${data.plane_track[i]} </a>
					${data.desc_plane[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---ARCHIVES---
function archives_output(){
 data_title.textContent = "Archive Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.archives.length, i < data.desc_archives.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.archives[i]}"> ${data.archives[i]} </a>
					${data.desc_archives[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---LANGUAGE TRANSLATORS---
function translators_output(){
 data_title.textContent = "Language Translators"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.translators.length, i < data.desc_translators.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.translators[i]}"> ${data.translators[i]} </a>
					${data.desc_translators[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---ENCODING & DECODING---
function hashes_output(){
 data_title.textContent = "Cryptography"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.cryptography.length, i < data.desc_hashes.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.cryptography[i]}"> ${data.cryptography[i]} </a>
					${data.desc_hashes[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---VIRUS SCANNERS---
function virusScan_output(){
 data_title.textContent = "Virus Scanners"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

		 for (let i = 0; i < data.malware_scanners.length, i < data.desc_virusScan.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.malware_scanners[i]}"> ${data.malware_scanners[i]} </a>
					${data.desc_virusScan[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---SEARCH ENGINES---
function engines_output(){
 data_title.textContent = "Search Engines"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
 
		 for (let i = 0; i < data.search_engines.length, i < data.desc_engines.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.search_engines[i]}"> ${data.search_engines[i]} </a>
					${data.desc_engines[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---META SEARCH---
function meta_output(){
 data_title.textContent = "Meta Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
 
		 for (let i = 0; i < data.meta_search.length, i < data.desc_meta.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.meta_search[i]}"> ${data.meta_search[i]} </a>
					${data.desc_meta[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---SPECIALITY SEARCH---
function speciality_output(){
 data_title.textContent = "Speciality Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.specialty_search.length, i < data.desc_speciality.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.specialty_search[i]}"> ${data.specialty_search[i]} </a>
					${data.desc_speciality[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---DARKNET SEARCH---
function darknet_output(){
 data_title.textContent = "Darknet Search"
 fetch("JS/data.json")
  .then(response => response.json())
  .then(data => {
   let list_items1 = ""

			// Data Output List 1

   for (let i = 0; i < data.darknet.length, i < data.desc_darknet.length; i++) {
    list_items1 += `
    <li>
     <a class="green" target="_blank" href="${data.darknet[i]}"> ${data.darknet[i]} </a>
					${data.desc_darknet[i]}
    </li>
    `
   }

			// Data Output List 2

			let list_items2 = ""
			let list_items2_title = `
				<br>
				<div class="data_box_header">
					<p id="data_title2">Darknet Search tools</p>
				</div>
				<br>
			`
   for (let i = 0; i < data.tools_for_darknet.length, i < data.desc_darknet_tools.length; i++) {
    list_items2 += `

    <li>
     <a class="red" href="${data.tools_for_darknet[i]}"> ${data.tools_for_darknet[i]} </a>
					${data.desc_darknet_tools[i]}
    </li>
    `
   }
   let full_list = list_items1 + list_items2_title + list_items2
   data_output.innerHTML = full_list
  })
}


// ---PASTEBINS---
function pastebins_output(){
 data_title.textContent = "Pastebins"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
  
		 for (let i = 0; i < data.pastebins.length, i < data.desc_pastebins.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.pastebins[i]}"> ${data.pastebins[i]} </a>
					${data.desc_pastebins[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---DOCUMENTS SEARCH---
function docs_output(){
 data_title.textContent = "Document Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.document_search.length, i < data.desc_doc.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.document_search[i]}"> ${data.document_search[i]} </a>
					${data.desc_doc[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---QR CODE GENERATORS---
function qr_gen_output(){
 data_title.textContent = "QR Code Generators"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.qr_gen.length, i < data.desc_qr.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.qr_gen[i]}"> ${data.qr_gen[i]} </a>
					${data.desc_qr[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---NEWS & LEAKS---
function leaks_output(){
 data_title.textContent = "News & Leaks"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.news_leaks.length, i < data.desc_leaks.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.news_leaks[i]}"> ${data.news_leaks[i]} </a>
					${data.desc_leaks[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}

// ---SHOPS---
function shops_output(){
 data_title.textContent = "Shopping"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.shops.length, i < data.desc_shops.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.shops[i]}"> ${data.shops[i]} </a>
					${data.desc_shops[i]}
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---TOOLS & OTHER---
function tools_output(){
	data_title.textContent = "Tools and Other Resources"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""
						
			for (let i = 0; i < data.tools_other.length, i < data.desc_tools.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.tools_other[i]}"> ${data.tools_other[i]} </a>
					${data.desc_tools[i]}
				</li>
				`
			}

			let list_items2 = `
				<br><br>

				<details>
					<summary class="editional_content">Code for showing EXIF Data</summary>
					<p>
						<span class="editional_content_cmds">
							python3 -m pip install --upgrade pip
							<br>
							python3 -m pip install --upgrade Pillow
						</span>
						<br>
						Clone the code <a id="editional_content_link" target="_blank" href="https://github.com/Giorgi-Darbaidze/EXIF-Data/blob/main/exif.py">here</a>
						<br>
						Create "image" Folder
						<br>
						Code file and image folder must be in same directory
						<span class="editional_content_commands">
							<br>
							python3 exif.py
							<br>
							less exif_data.txt
						</span>
					</p>
				</details>

				<br>

				<details>
					<summary class="editional_content">Code for Removing EXIF Data</summary>
					<p>
						<span class="editional_content_cmds">
							python3 -m pip install --upgrade pip
							<br>
							python3 -m pip install --upgrade Pillow
						</span>
						<br>
						Clone the Code <a id="editional_content_link" target="_blank" href="https://github.com/Giorgi-Darbaidze/EXIF-Remove/blob/main/exifr.py">here</a>
						<br>
						Code file and image folder must be in same directory
						<span class="editional_content_commands">
							<br>
							python3 remove.exif.py
						</span>
						<br><br>
					</p>
				</details>
				`
			let full_list = list_items1 + list_items2
			data_output.innerHTML = full_list
		})
}


// ---SCHEMES---
function schemes_output(){
 data_title.textContent = "Schemes & Trees"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   
		 for (let i = 0; i < data.schemes_trees.length; i++) {
		 	list_items1 += `
		 		<img class="schemes_output" src="${data.schemes_trees[i]}">
					<br>
		 	`
		 }
		 data_output.innerHTML = list_items1
  })
}


// ---TECH BOOKS---
function books_output(){
 data_title.textContent = "Tech Books"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
   // BOOOOOOOOKS here
		 data_output.innerHTML = list_items1
  })
}
