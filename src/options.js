'use strict';
let page = document.getElementById('buttonDiv');
const d = ['to left', 'to right', 'to left top', 'to right top', 'to left bottom', 'to right bottom'];
function constructOptions(d) {
  for (let item of d) {
    let button = document.createElement('button');
    button.innerText=item;
    button.addEventListener('click', function() {
      chrome.storage.local.set({d: item}, function() {
        console.log('direction is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(d);
