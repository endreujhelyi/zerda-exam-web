'use strict'

var button = document.querySelector('button');
var textArea = document.querySelector('#exp');
var points = document.querySelector('#like');
var email = document.querySelector('#email');
var loading = document.querySelector('span');
var list = document.querySelector('ul');



// server post request
button.addEventListener('click', function () {
  loading.classList.remove('hide');

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/exam', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    "feedback": textArea.value,
    "scale": points.value,
    "email": email.value
  }));

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText).projects;
        for (var i = 0; i < response.length; i++) {
          list.innerHTML += `<li>${response[i]}</li>`
        }
        loading.classList.add('hide');
      } else {
        alert('There is a problem with the request from the server');
      }
    }
  }
});



// var httpRequest = new XMLHttpRequest();
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:3000/exam', true);
// xhr.send(null);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         var decodedList = JSON.parse(xhr.responseText).all;
//         decodedList.forEach(function(item){
//           list.innerHTML += '<li>' + item + '</li>';
//         });
//         loading.classList.add('hide');
//       } else {
//         alert('There was a problem with the request.');
//       }
//     }
// };
