var api = function(selection) {
  console.log(selection);
  var params = {};

  if (selection !== undefined) {
    params['thought'] = selection[0];
  } else {
    console.log("Nothing found");
  }

// get the url of the page
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  // console.log(tabs[0].url);
  params['snippetUrl'] = tabs[0].url;
  console.log(params);

  var request = $.ajax({
                  url: "http://localhost:3000/thoughts",
                  method: "POST",
                  data: params
                });

  request.fail(function(response) {
    $("#saveMessage").text('Error saving: ');
    console.log("Something went wrong.");
    console.log(response);
  });

  request.done(function (response) {
    $("#saveMessage").text("Saved!");
    console.log("Saved!");
    console.log(response);
    window.setTimeout(window.close, 1000);
  });

});

};


