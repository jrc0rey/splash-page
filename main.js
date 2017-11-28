var unique = require('uniq');
var Typed = require('typed.js');

var options = {
  strings: ["Improvements coming. ^1000 </br> Check back soon."],
  typeSpeed: 60,
  loop: true,
  backspeed: 1000,
  backDelay: 2000,
  startDelay: 1000
}

var typed = new Typed(".line", options);
