chrome.tabs.executeScript( {
  code: "document.getSelection().toString();"
}, function(selection) {
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


// var xhr = new XMLHttpRequest();
// // MAKE SURE TO CHANGE URL AND VARIABLE NAMES
//   xhr.open("POST", "http://localhost:3000/thoughts?" + params, true);
//     xhr.onreadystatechange = function(response) {

//     if (xhr.readyState == 4) {
//       // console.log(xhr.responseText);
//       console.log("response complete");
//       if (xhr.status == 200) {
//           $("#saveMessage").text("Saved!");
//           console.log('Saved!');
//           // window.setTimeout(window.close, 1000);
//       } else {
//           // Show what went wrong
//           $("#saveMessage").text('Error saving: ' + xhr.statusText);
//           console.log( 'Error saving: ' + xhr.statusText);
//       }
//     }
//   };
//   xhr.send();

// var request = $.ajax({
//                   url: "http://localhost:3000/thoughts",
//                   method: "POST",
//                   data: params
//                 });

// request.done(function (response) {
//   console.log("Recieved Response!");
//   console.log(response);
// });

});


