'use strict';

var validator = require('./validator.js');
var test = require('tape');

test("validator accepts valid email, a scale of 15 and positive feedback", function(t) {
  t.equal(validator("hello@bello.hu", 15, "GreenFox is amazing with awesome people and fantastic atmosphere."), true);
  t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function(t) {
  t.equal(validator("", 5, "GreenFox is amazing with awesome people and fantastic atmosphere."), false);
  t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function(t) {
  t.equal(validator("hello@bello.hu", 9, "GreenFox is amazing with awesome people and fantastic atmosphere."), false);
  t.end();
});
