'use strict'

const button = document.querySelector('button');
const textArea = document.querySelector('#exp');
const points = document.querySelector('#like');
const email = document.querySelector('#email');
const loading = document.querySelector('span');
const list = document.querySelector('ul');



// server post request
button.addEventListener('click', function () {
  loading.classList.remove('hide');

  const xhr = new XMLHttpRequest();
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
        const response = JSON.parse(xhr.responseText).projects;
        for (let i = 0; i < response.length; i++) {
          list.innerHTML += `<li>${response[i]}</li>`
        }
        loading.classList.add('hide');
      } else {
        alert('There is a problem with the request from the server');
        loading.classList.add('hide');
      }
    }
  };
});
