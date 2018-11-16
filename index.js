// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( d => d.toLowerCase())
}

function nameToAttributes(drivers) {
  split = drivers.map (function(d) {
    d.split(" ");
    return Object.assign({}, d[0], d[1])
  } )
  return split;
}