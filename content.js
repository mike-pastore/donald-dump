var names = [
	'Chump',
	'Clump',
	'Dump',
	'Flump',
	'Grump',
	'Lump',
	'Thump'
];

function chooseRandomName() {
	return names[Math.floor(Math.random() * names.length)];
}

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "clicked_browser_action") {
			var images = document.images.length;

			for (i = 0; i < images; i++) {
				console.log("image #" + i + " src = " + document.images[i].src);
				var width = document.images[i].width;
				var height = document.images[i].height;

				document.images[i].src = "http://lorempixel.com/" + width + "/" + height + "/cats/? " 
				+ new Date().toString() + "";
			}

			var replaced = $("body").html().replace(/Trump|trump/g, function (x) {
				return chooseRandomName();
			});
			$("body").html(replaced);
		}
	}
);