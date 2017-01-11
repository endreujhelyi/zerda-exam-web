'use strict';

const niceWords = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];


function validator(email, number, feedback) {
  let validEmail = false;
  let validNumber = false;
  let validFeedback = true;
  let validate = false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      validEmail = true;
    }
  }

  if (number > 10) {
    validNumber = true;
  }

  let kindWords = 0;
  let userWords = feedback.split(' ');

  for (let i = 0; i < userWords.length; i++) {
    niceWords.map(function(word) {
      if (word == userWords[i]) {
        kindWords++;
      }
    })
  }

  if (validEmail && validNumber && kindWords >= 3) {
    validate = true;
  }
  return validate;
};

module.exports = validator;
