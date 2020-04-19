(() => {
	//variable stack here -> the elements you wnt to interact with
	let sigilButtons = document.querySelectorAll(".sigilContainer"),
		lightBox = document.querySelector(".lightbox"),
		houseVideo = lightBox.querySelector("video"),
		closeButton = lightBox.querySelector(".close-button"),
		currentHouseName = document.querySelector("h1"),
		houseDescription = document.querySelector(".house-info"),
		playButton = document.querySelector(".play-button"),
		pauseButton = document.querySelector(".pause-button"),
		rwButton = document.querySelector(".rewind-button"),
		bannerStark = document.querySelector(".starkBanner"),
		bannerBaratheon = document.querySelector(".baratheonBanner"),
		bannerLannister = document.querySelector(".lannisterBanner"),
		bannerGreyjoy = document.querySelector(".greyjoyBanner"),
		bannerTully = document.querySelector(".tullyBanner"),
		bannerArryn = document.querySelector(".arrynBanner"),
		bannerTargeryen = document.querySelector(".targeryenBanner"),
		bannerFrey = document.querySelector(".freyBanner"),
		bannerTyrell = document.querySelector(".tyrellBanner"),
		starkSigil = document.querySelector(".starkSigil"),
		baratheonSigil  = document.querySelector(".baratheonSigil"),
		lannisterSigil = document.querySelector(".lannisterSigil"),
		greyjoySigil = document.querySelector(".greyjoySigil"),
		tullySigil = document.querySelector(".tullySigil"),
		arrynSigil = document.querySelector(".arrynSigil"),
		targeryenSigil = document.querySelector(".targeryenSigil"),
		freySigil = document.querySelector(".freySigil"),
		tyrellSigil = document.querySelector(".tyrellSigil");

	const houseData = [
		["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from
		their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent
		stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings
		and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the
		North. `],

		["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was
		formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the
		Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House
		Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen
		dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the
		death of Lyanna Stark. `],

		["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most
		powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the
		extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the
		Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had
		habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and
		Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep
		in King's Landing, the traditional seat of the royal family. `],

		["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and
		bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord
		Reaper of Pyke. House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do
		Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their
		bannermen, as they are associated with the faith of the Drowned God.  `],

		["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of
		Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of
		the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family,
		Duty, Honor." `],

		["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for
		millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of
		the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the
		Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `],

		["Targeryen", `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven
		Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion
		and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities
		of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen
		seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House
		following the destruction of the Great Sept of Baelor. `],

		["Frey", `House Frey of the Twins was the Great House of the Riverlands, having gained their position for their
		treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their
		rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The
		current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey
		and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male
		Freys soon after. `],

		["Tyrell", `House Tyrell of Highgarden is a Great House of Westeros. It rules over the Reach, a vast, fertile, and 
		heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach 
		and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.The House 
		is led by Lord Mace Tyrell. Mace's son and heir Loras is a tournament knight and was, secretly, the lover of Lord Renly 
		Baratheon before his death. Mace's daughter Margaery married Renly when he crowned himself king in the War of the Five 
		Kings to cement an alliance between Renly and her father.`]
	];

	//functions go in the middle -> what do we want our app to do?
	function showLightBox() {
		//debugger;
		//retrieve the css class that matches the mideo name in the video folder
		let houseName = this.className.split(" ")[1];


		//capitalize the first letter of the house name
		//then add the rest of the house name to it
		let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);

		//use this variable to populate the h1 element on the page
		currentHouseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
		houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;

		let targetSource = `video/House-${newSource}.mp4`;
		//debugger;
		//show the lightbox ona click
		lightBox.classList.add("show-lightbox");
		//play video when it opens
		houseVideo.src = targetSource;
		houseVideo.load();
		houseVideo.play();
	}

	function hideLightBox() {
		lightBox.classList.remove("show-lightbox");
		//stop and rewind when it closes
		houseVideo.pause();
		houseVideo.currentTime = 0;
	}

	function playVideo() {
		houseVideo.play();
	}

	function pauseVideo() {
		houseVideo.pause();
	}

	function rewindVideo() {
		houseVideo.currentTime = 0;
	}

	function starkSwap() {
	bannerStark.classList.remove("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function baratheonSwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.remove("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function lannisterSwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.remove("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function greyjoySwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.remove("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function tullySwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.remove("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function arrynSwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.remove("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function targeryenSwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.remove("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function freySwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.remove("hidden");
	bannerTyrell.classList.add("hidden");
	}

	function tyrellSwap() {
	bannerStark.classList.add("hidden");
	bannerBaratheon.classList.add("hidden");
	bannerLannister.classList.add("hidden");
	bannerGreyjoy.classList.add("hidden");
	bannerTully.classList.add("hidden");
	bannerArryn.classList.add("hidden");
	bannerTargeryen.classList.add("hidden");
	bannerFrey.classList.add("hidden");
	bannerTyrell.classList.remove("hidden");
	}

	//event handling for our siginButtons
	sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

	//add some event handling for the lightbox close button
	closeButton.addEventListener("click", hideLightBox);
	playButton.addEventListener("click", playVideo);
	pauseButton.addEventListener("click", pauseVideo);
	rwButton.addEventListener("click", rewindVideo);
	starkSigil.addEventListener("click", starkSwap);
	baratheonSigil.addEventListener("click", baratheonSwap);
	lannisterSigil.addEventListener("click", lannisterSwap);
	greyjoySigil.addEventListener("click", greyjoySwap);
	tullySigil.addEventListener("click", tullySwap);
	arrynSigil.addEventListener("click", arrynSwap);
	targeryenSigil.addEventListener("click", targeryenSwap);
	freySigil.addEventListener("click", freySwap);
	tyrellSigil.addEventListener("click", tyrellSwap);
})();