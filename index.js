#!/usr/bin/env/ node

// print cli usage
function printUsage() {
  console.log("Usage: node index.js x y\n" +
              " E.g.: node index.js 4 5\n" +
              " Note: x and y should be >= 2\n" +
              "\n     let's try again (: \n")
}

// read cli input
const args = process.argv
if ( ((typeof args[2] != "number") || (typeof args[3] != "number"))
    && ((~~args[2] <= 2) || (~~args[3] <= 2)) ) {
  printUsage();
} else {
  byRows(args[2], args[3])
  byColumns(args[2], args[3])
}

// left pad 0 to number
function padToTwo(number) {
  if (number<=999) { number = ("000"+number).slice(-3); }
  return number;
}

// create the table by rows
function byRows(x, y) {
  // ------------------------------------------------------ by rows
  console.log("--- BY ROWS ---")
  c=1 // counter reset
  for (ix=1; ix<=y; ix++) {
    line=''
    for (iy=1; iy<=x; iy++) {
      line += padToTwo(c) + " "
      c++
    }
    console.log(line)
  }
}

// create the table by columns
function  byColumns(x, y) {
  // ------------------------------------------------------ by columns
  console.log("--- BY COLUMNS ---")
  c=1 // counter reset
  a=[]; // array reset
  for (ix=1; ix<=x; ix++) {
    for (iy=1; iy<=y; iy++) {
      if (Array.isArray(a[iy]) === false) a[iy]=[];
      a[iy][ix] = c //padToTwo(c);
      c++
    }
  }
  a.forEach(function(r){
    line=''
    r.forEach(function(cell){
      line += padToTwo(cell) + " "
    })
    console.log(line)
  })
}
