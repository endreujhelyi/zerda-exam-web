'use strict'

var button = document.querySelector('button');
var text = document.querySelector('#exp');
var points = document.querySelector('#liek');
var email = document.querySelector('#email');
var loading = document.querySelector('span');
var list = document.querySelector('ul');



// server post request
button.addEventListener('click', function () {
  loading.classList.remove('hide');

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/exam/', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    "feedback": "stellar experience with stupendous people. simply perfect",
    "scale": "10",
    "email": "lobab@greenfox.academy"
  }))

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(xhr.responseText);
        list.innerHTML += `<li>${response}</li>`
        loading.classList.add('hide');
      } else {
        alert('There is a problem with the request from the server');
      }
    }
  }
});



// server get requestvar httpRequest = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/exam', true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var decodedList = JSON.parse(xhr.responseText).all;
        decodedList.forEach(function(item){
          list.innerHTML += '<li>' + item + '</li>';
        });
        loading.classList.add('hide');
      } else {
        alert('There was a problem with the request.');
      }
    }
};
