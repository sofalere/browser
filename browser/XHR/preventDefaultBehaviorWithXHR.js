document.addEventListener("DOMContentLoaded", event => {

  let orginalLink = document.getElementById("some-link");

  //add a click event listener to some the link item
  orginalLink.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    // prevent broswer from loading link
    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    // set inner HTML of originalLink to the value received from the XHR
    request.addEventListener('load', event => originalLink.innerHTML = request.response);
    request.send();
  })
})