'use strict';

var hasN = true; // has N only line
var type = "a";
// a: 2D split
// b: space split
// c: line split
// z: other (only source)
function main(N, p, s) {
  console.log();
}
function common(a) {
  var line = a.split('\n').slice(0, a.split('\n').length - 1);
  if (hasN) var N = Number(line.shift());
  switch (type) {
    case "a":
      main(N, line.map(function (e) {
        return e.split(' ').map(function (ee) {
          return Number(ee);
        });
      }), a);
      break;
    case "b":
      main(N, line[0].split(' ').map(function (e) {
        return Number(e);
      }), a);
      break;
    case "c":
      main(N, line, a);
      break;
    case "z":
      main(N, null, a);
  }
}
common(require("fs").readFileSync("/dev/stdin", "utf8"));
