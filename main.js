const hasN = true
// p1: 2D split
// p2: space split
// p3: line split
function main(p1,p2,p3,so) {
  console.log()
}

function common(a) {
  var line = a.split('\n').slice(0,a.split('\n').length - 1)
  var p2 = line[0].split(' ')
  if(hasN) line = line.slice(1)
  var p1 = line.map(e => e.split(' '))
  main(p1,p2,line,a)
}
common("")
