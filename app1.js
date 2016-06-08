require('./instanthello');
var Goodbye = require('./talk/goodbye');
var talk = require('./talk'); //calls index.js from talk folder
var Question = require('./talk/question');

Goodbye();
talk.hello('Nishant');
talk.intro();
var answer= Question.ask("How are you?");
console.log(answer);