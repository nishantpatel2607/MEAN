var fs= require ('fs');

console.log("Going to get the file");
var onFileLod = function(err,file){
console.log("Got the file");
};

fs.readFile('readFileSync.js',onFileLod);

console.log("App continues...");