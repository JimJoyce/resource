chrome.tabs.executeScript( {
  code: "document.getSelection().toString();"
}, function(selection) {
  console.log(selection);
  var params = "thought="

  if (selection !== undefined) {
    params += selection[0];
  } else {
    console.log("Nothing found");
  }

var xhr = new XMLHttpRequest();
// MAKE SURE TO CHANGE URL AND VARIABLE NAMES
  xhr.open("POST", "http://localhost:3000/thoughts?" + params, true);
    xhr.onreadystatechange = function(response) {

    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
      console.log("response complete");
      if (xhr.status == 200) {
          $("#saveMessage").text("Saved!");
          console.log('Saved!');
          window.setTimeout(window.close, 1000);
      } else {
          // Show what went wrong
          $("#saveMessage").text('Error saving: ' + xhr.statusText);
          console.log( 'Error saving: ' + xhr.statusText);
      }
    }
  };
  xhr.send();

});


