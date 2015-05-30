/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request,
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('resource-sidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('div');
		sidebar.id = "resource-sidebar";
		sidebar.innerHTML = "<h1>Drop what you found here</h1>";
		$("div").draggable();
		$("head").after(sidebar);
		styleBar("#" + sidebar.id);
		sidebarOpen = true;
	}
};

function styleBar (id) {
	$(id).droppable({
		drop: function (event, ui) {
			// event.preventDefault();
			alert("dropped");
		}
	})
	var bodyText = $(id).children();
	$(id).toggle();
	$(id).css({
		"position": "fixed",
		"top": "0",
		"width": "100%",
		"height": "5em",
		"z-index": "45",
		"background-color": "gray",
		"box-shadow": "0px 6px 10px 2px rgba(0, 0, 0, .3)"
	});

	$(bodyText).css({
		"font-family":"Open-Sans",
		"text-align": "center",
		"color": "#EAEAEA",
		"margin-top": "75%",
		"font-weight": "100"
	});
    // var options = { direction: 'left'};
    $(id).slideToggle("fast");
};












// .id{
//   animation: slideIn ease-in-out 1s;
//   animation-iteration-count: 1;
//   transform-origin: 50% 50%;
//   animation-fill-mode:forwards; /*when the spec is finished*/
//   -webkit-animation: slideIn ease-in-out 1s;
//   -webkit-animation-iteration-count: 1;
//   -webkit-transform-origin: 50% 50%;
//   -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/
// }

// @keyframes slideIn{0% {transform:translate(-1px,0px);}52% {transform:translate(-194px,1px);}70% {transform:translate(-178px,0px);}100%{transform:translate(-183px,1px);}}

// @-webkit-keyframes slideIn {
//   0% {
//     -webkit-transform:  translate(-1px,0px)  ;
//   }
//   52% {
//     -webkit-transform:  translate(-194px,1px)  ;
//   }
//   70% {
//     -webkit-transform:  translate(-178px,0px)  ;
//   }
//   100% {
//     -webkit-transform:  translate(-183px,1px)  ;
//   }
// }

