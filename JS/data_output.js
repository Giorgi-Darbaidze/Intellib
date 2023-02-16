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
const tools = document.getElementById("btn_other")
const schemes = document.getElementById("btn_schemes")
const leaks = document.getElementById("btn_leaks")
const shops = document.getElementById("btn_shops")
const books = document.getElementById("btn_books")

let data_output = document.getElementById('data_output')
let data_output_desc = document.getElementById("data_output_desc")
let data_title = document.getElementById("data_title")

// ---For--- Username
username.addEventListener("click", function() {
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
})

// ---For--- Email
email.addEventListener("click", function() {
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
})

// ---For--- VPN & Proxy
vpn_proxy.addEventListener("click", function() {
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
})

// ---For--- Domain
domain.addEventListener("click", function() {
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
})

// ---For--- IP
ip.addEventListener("click", function() {
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
})

// ---For--- Image & Video
img.addEventListener("click", function() {
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
})

// ---For--- Social
social.addEventListener("click", function() {
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
})

// ---For--- Person
person.addEventListener("click", function() {
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
})

// ---For--- Phone
phone.addEventListener("click", function() {
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
})

// ---For--- Car
car.addEventListener("click", function() {
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
})

// ---For--- Webcam
webcam.addEventListener("click", function() {
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
})

// ---For--- Public
public.addEventListener("click", function() {
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
})

// ---For--- Business
business.addEventListener("click", function() {
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
})

// ---For--- Maps
maps.addEventListener("click", function() {
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
})

// ---For--- Plane
plane.addEventListener("click", function() {
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
})

// ---For--- Archives
archives.addEventListener("click", function() {
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
})

// ---For--- Translators
translators.addEventListener("click", function() {
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
})

// ---For--- Hashes
hashes.addEventListener("click", function() {
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
})

// ---For--- Virus Scanners
virusScan.addEventListener("click", function() {
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
})

// ---For--- Search Engines
engines.addEventListener("click", function() {
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
})

// ---For--- Meta
meta.addEventListener("click", function() {
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
})

// Speciality Search
speciality.addEventListener("click", function() {
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
})

// ---For--- Darknet
darknet.addEventListener("click", function() {
 data_title.textContent = "Darknet Search"
 fetch("JS/data.json")
  .then(response => response.json())
  .then(data => {
  let list_items1 = ""
					
  	// Data Output List1

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

   // Data Output List2 

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
})

// ---For--- Pastebins
pastebins.addEventListener("click", function() {
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
})

// ---For--- Documents
docs.addEventListener("click", function() {
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
})

// ---For--- QR
qr.addEventListener("click", function() {
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
})

// ---For--- Leaks
leaks.addEventListener("click", function() {
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
})

// ---For--- Shops
shops.addEventListener("click", function() {
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
})

// ---For--- Tools
tools.addEventListener("click", function() {
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
})
