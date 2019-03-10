const dedupe = require('../dedupe');

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
var bbb = dedupe(aaa, value => value.a);
console.log(bbb);

var ccc = dedupe(aaa, value => value.c);
console.log(ccc);
