// öncelikle simple-is package node_modeles'in altındadır.
// ve local olarak install edilir.
//
// local package install : npm install simple-is
// global package install: npm install -g simple-is

const is = require("simple-is");

console.log(is.number(10));

console.log(is.string(25));