chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "clicked_browser_action") {
			var replaced = $("body").html().replace(/Trump/g, 'Dump');
			$("body").html(replaced);
		}
	}
);