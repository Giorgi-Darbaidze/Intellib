let data_output_desc = document.getElementById("data_output_desc")
let data_output = document.getElementById('data_output')
let data_title = document.getElementById("data_title")

export {
	username_output,
	email_output,
	vpn_output,
	domain_output,
	ip_output,
	image_output,
	social_output,
	person_output,
	phone_output,
	car_output,
	webcam_output,
	public_output,
	business_output,
	maps_output,
	plane_output,
	archives_output,
	translators_output,
	hashes_output,
	virusScan_output,
	engines_output,
	meta_output,
	speciality_output,
	darknet_output,
	pastebins_output,
	docs_output,
	qr_gen_output,
	leaks_output,
	shops_output,
	tools_output
}


// ---USERNAME SEARCH---
function username_output() {
 data_title.textContent = "Username Search"
 fetch("JS/data.json")
  .then(response => response.json())
  .then(data => {
  	let list_items1 = ""

			// Data Output

   for (let i = 0; i < data.username_search.length; i++) {
    list_items1 += `
    <li>
     <a class="green" target="_blank" href="${data.username_search[i]}"> ${data.username_search[i]} </a>
    </li>
    `
   }
   data_output.innerHTML = list_items1

			// Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_username.length; b++) {
    data_output_desc.innerHTML += data.desc_username[b]
   }
  })
}


// ---EMAIL SEARCH---
function email_output(){
 data_title.textContent = "Email Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items = ""

  	// Data Output

		 for (let i = 0; i < data.email_search.length; i++) {
		  list_items += `
		  <li>
		  	<a class="green" target="_blank" href="${data.email_search[i]}"> ${data.email_search[i]} </a>
		  </li>
		  `
		 }
		 data_output.innerHTML = list_items
         
   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_email.length; b++) {
    data_output_desc.innerHTML += data.desc_email[b]
   }
  })
}


// ---VPN & PROXY---
function vpn_output(){
 data_title.textContent = "VPN & Proxy Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
	  let list_items1 = ""

   // Data Output

	  for (let i = 0; i < data.vpn_proxy.length; i++) {
	  	list_items1 += `
	  	<li>
	  		<a class="green" target="_blank" href="${data.vpn_proxy[i]}"> ${data.vpn_proxy[i]} </a>
	  	</li>
	  	`
	  }
	  data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_vpn_proxy.length; b++) {
   	data_output_desc.innerHTML += data.desc_vpn_proxy[b]
   }
  }) 
}


// ---DOMAIN SEARCH---
function domain_output() {
 data_title.textContent = "Domain Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
          
   // Data Output

		 for (let i = 0; i < data.domain_search.length; i++) {
		  list_items1 += `
		  <li>
		  	<a class="green" target="_blank" href="${data.domain_search[i]}"> ${data.domain_search[i]} </a>
		  </li>
		  `
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output
				
   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_domain.length; b++) {
    data_output_desc.innerHTML += data.desc_domain[b]
   }
  })
}


// ---IP ADDRESS---
function ip_output(){
 data_title.textContent = "IP Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""

  	// Data Output

			for (let i = 0; i < data.ip_address.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.ip_address[i]}"> ${data.ip_address[i]} </a>
				</li>
				`
			}
			data_output.innerHTML = list_items1

  	// Data Description Output

  	data_output_desc.innerHTML = ""
  	for (let b = 0; b < data.desc_ip.length; b++) {
  	 data_output_desc.innerHTML += data.desc_ip[b]
  	}
 	})
}


// ---IMAGES & VIDEOS---
function image_output(){
 data_title.textContent = "Image & Video Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""

   // Data Output

			for (let i = 0; i < data.image_video.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.image_video[i]}"> ${data.image_video[i]} </a>
				</li>
				`
			}
			data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_image_video.length; b++) {
    data_output_desc.innerHTML += data.desc_image_video[b]
   }
  })
}


// ---SOCIAL NET SEARCH---
function social_output(){
 data_title.textContent = "Social Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.social_net.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.social_net[i]}"> ${data.social_net[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_social.length; b++) {
    data_output_desc.innerHTML += data.desc_social[b]
   }
  })
}


// ---PERSON SEARCH---
function person_output(){
 data_title.textContent = "Person Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.person.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.person[i]}"> ${data.person[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_person.length; b++) {
    data_output_desc.innerHTML += data.desc_person[b]
   }
  })
}


// ---PHONE SEARCH---
function phone_output(){
 data_title.textContent = "Phone Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data output

		 for (let i = 0; i < data.telephone.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.telephone[i]}"> ${data.telephone[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_phone.length; b++) {
    data_output_desc.innerHTML += data.desc_phone[b]
   }
  })
}


// ---CAR SEARCH---
function car_output(){
 data_title.textContent = "Car Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.car_license.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.car_license[i]}"> ${data.car_license[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_car.length; b++) {
    data_output_desc.innerHTML += data.desc_car[b]
   }
  })
}


// ---WEBCAM SEARCH---
function webcam_output(){
 data_title.textContent = "Live Webcams"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.webcams.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.webcams[i]}"> ${data.webcams[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_webcam.length; b++) {
    data_output_desc.innerHTML += data.desc_webcam[b]
   }
  })
}


// ---PUBLIC SEARCH---
function public_output(){
 data_title.textContent = "Public Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.public_records.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.public_records[i]}"> ${data.public_records[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_public.length; b++) {
    data_output_desc.innerHTML += data.desc_public[b]
   }
  })
}


// ---BUSINESS RECORDS---
function business_output(){
 data_title.textContent = "Business Records Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.business_records.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.business_records[i]}"> ${data.business_records[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_business.length; b++) {
    data_output_desc.innerHTML += data.desc_business[b]
   }
  })
}


// ---MAPS---
function maps_output(){
 data_title.textContent = "Geolocation tools"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""
        
   // Data Output

		 for (let i = 0; i < data.maps.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.maps[i]}"> ${data.maps[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_maps.length; b++) {
    data_output_desc.innerHTML += data.desc_maps[b]
   }    
  })
}


// ---PLANE TRACK---
function plane_output(){
 data_title.textContent = "Plane Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.plane_track.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.plane_track[i]}"> ${data.plane_track[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_plane.length; b++) {
    data_output_desc.innerHTML += data.desc_plane[b]
   }
  })
}


// ---ARCHIVES---
function archives_output(){
 data_title.textContent = "Archive Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.archives.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.archives[i]}"> ${data.archives[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_archives.length; b++) {
    data_output_desc.innerHTML += data.desc_archives[b]
   }
  })
}


// ---LANGUAGE TRANSLATORS---
function translators_output(){
 data_title.textContent = "Language Translators"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.translators.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.translators[i]}"> ${data.translators[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_translators.length; b++) {
    data_output_desc.innerHTML += data.desc_translators[b]
   }
  })
}


// ---ENCODING & DECODING---
function hashes_output(){
 data_title.textContent = "Cryptography"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.cryptography.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.cryptography[i]}"> ${data.cryptography[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_hashes.length; b++) {
    data_output_desc.innerHTML += data.desc_hashes[b]
   }
  })
}


// ---VIRUS SCANNERS---
function virusScan_output(){
 data_title.textContent = "Virus Scanners"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.malware_scanners.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.malware_scanners[i]}"> ${data.malware_scanners[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_virusScan.length; b++) {
    data_output_desc.innerHTML += data.desc_virusScan[b]
   }
  })
}


// ---SEARCH ENGINES---
function engines_output(){
 data_title.textContent = "Search Engines"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.search_engines.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.search_engines[i]}"> ${data.search_engines[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_engines.length; b++) {
    data_output_desc.innerHTML += data.desc_engines[b]
   }
  })
}


// ---META SEARCH---
function meta_output(){
 data_title.textContent = "Meta Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.meta_search.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.meta_search[i]}"> ${data.meta_search[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_meta.length; b++) {
    data_output_desc.innerHTML += data.desc_meta[b]
   }
  })
}


// ---SPECIALITY SEARCH---
function speciality_output(){
 data_title.textContent = "Speciality Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.specialty_search.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.specialty_search[i]}"> ${data.specialty_search[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_speciality.length; b++) {
     data_output_desc.innerHTML += data.desc_speciality[b]
   }
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

   for (let i = 0; i < data.darknet.length; i++) {
    list_items1 += `
    <li>
     <a class="green" target="_blank" href="${data.darknet[i]}"> ${data.darknet[i]} </a>
    </li>
    `
   }

   let list_items2 = `
   	<br>
   	<div class="data_box_header">
   	 <p id="data_title2">Darknet Search tools</p>
   	</div>
		 	<br>
   `

   // Data Output List 2 

   for (let b = 0; b < data.tools_for_darknet.length; b++) {
    list_items2 += `
    <li>
     <a class="red" href="${data.tools_for_darknet[b]}"> ${data.tools_for_darknet[b]} </a>
    </li>
    `
   }

   let full_list = list_items1 + list_items2
   data_output.innerHTML = full_list

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_darknet.length; b++) {
    data_output_desc.innerHTML += data.desc_darknet[b]
   }

   for (let c = 0; c < data.desc_darknet_tools.length; c++) {
    data_output_desc.innerHTML += `
			 	<section class='darknet_tools'>
			 		${data.desc_darknet_tools[c]}
			 	</section>
			 `
   }
  })
}


// ---PASTEBINS---
function pastebins_output(){
 data_title.textContent = "Pastebins"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.pastebins.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.pastebins[i]}"> ${data.pastebins[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_pastebins.length; b++) {
    data_output_desc.innerHTML += data.desc_pastebins[b]
   }
  })
}


// ---DOCUMENTS SEARCH---
function docs_output(){
 data_title.textContent = "Document Search"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.document_search.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.document_search[i]}"> ${data.document_search[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_doc.length; b++) {
    data_output_desc.innerHTML += data.desc_doc[b]
   }
  })
}


// ---QR CODE GENERATORS---
function qr_gen_output(){
 data_title.textContent = "QR Code Generators"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.qr_gen.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.qr_gen[i]}"> ${data.qr_gen[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_qr.length; b++) {
    data_output_desc.innerHTML += data.desc_qr[b]
   }
  })
}


// ---NEWS & LEAKS---
function leaks_output(){
 data_title.textContent = "News & Leaks"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.news_leaks.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.news_leaks[i]}"> ${data.news_leaks[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_leaks.length; b++) {
    data_output_desc.innerHTML += data.desc_leaks[b]
   }
  })
}

// ---SHOPS---
function shops_output(){
 data_title.textContent = "Shopping"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
		 let list_items1 = ""

   // Data Output

		 for (let i = 0; i < data.shops.length; i++) {
		 	list_items1 += `
		 	<li>
		 		<a class="green" target="_blank" href="${data.shops[i]}"> ${data.shops[i]} </a>
		 	</li>
		 	`
		 }
		 data_output.innerHTML = list_items1

   // Data Description Output

   data_output_desc.innerHTML = ""
   for (let b = 0; b < data.desc_shops.length; b++) {
    data_output_desc.innerHTML += data.desc_shops[b]
   }
  })
}


// ---TOOLS & OTHER---
function tools_output(){
	data_title.textContent = "Tools and Other Resources"
	fetch("JS/data.json")
		.then(response => response.json())
		.then(data => {
			let list_items1 = ""
			
			// Data Output

			for (let i = 0; i < data.tools_other.length; i++) {
				list_items1 += `
				<li>
					<a class="green" target="_blank" href="${data.tools_other[i]}"> ${data.tools_other[i]} </a>
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
			
			// Data Description Output

			data_output_desc.innerHTML = ""
			for (let b = 0; b < data.desc_tools.length; b++) {
				data_output_desc.innerHTML += data.desc_tools[b]
			}
		})
}


// ---GOOGLE DORKS---



// ---SCHEMES---



// ---BOOKS---