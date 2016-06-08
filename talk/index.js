var hello = function(name)
{
	console.log('Hello '+name);
};

var intro = function()
{
	console.log('I am a node file called index.js');
};

module.exports = {
	hello:hello,
	intro:intro
};