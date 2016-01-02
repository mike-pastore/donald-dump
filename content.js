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
			var replaced = $("body").html().replace(/Trump|trump/g, function (x) {
				return chooseRandomName();
			});
			$("body").html(replaced);
		}
	}
);