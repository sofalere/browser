// create element in HTML

/*
<div id="XHRData"></div>
*/

// once DOM has loaded fire handler
document.addEventListener("DOMContentLoaded", event => {
  let req = new XMLHttpRequest();
  req.open("GET", "/path");

  // add a handler for after a request has resolved 
  req.addEventListener("load", event => {
    // location destination HTML
    let tagDestination = document.querySelector("#XHRData"); //or document.getElementById("XHRData")

    // if response was successful replace tagDestination contents with response
    if (req.status === 200) {
      tagDestination.innerHTML = req.response;
    }
  });

  req.send();
})