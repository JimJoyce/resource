chrome.tabs.executeScript( {
  code: "document.getSelection().toString();"
}, function(selection) {
  console.log(selection[0]);
  var params = "thought=" + selection[0];

var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/thoughts?" + params, true);
    xhr.onreadystatechange = function(response) {

    if (xhr.readyState == 4) {
      var test = JSON.parse(xhr.response);
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


