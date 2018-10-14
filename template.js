const hasN = true // has N only line
const type = "a"
// a: 2D split
// b: space split
// c: line split
// z: other (only source)

function main(N,p,s) {
  console.log()
}

function common(a) {
  var line = a.split('\n').slice(0,a.split('\n').length - 1)
  if(hasN) var N = Number(line.shift())

  switch(type){
    case "a":
      main(N,line.map(e => e.split(' ').map(ee => Number(ee))),a)
      break
    case "b":
      main(N,line[0].split(' ').map(e => Number(e)),a)
      break
    case "c":
      main(N,line,a)
      break
    case "z":
      main(N,null,a)
  }
}
common("" + "\n")
