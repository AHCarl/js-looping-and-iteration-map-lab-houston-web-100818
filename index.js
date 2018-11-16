// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( d => d.toLowerCase())
}

function nameToAttributes(drivers) {
  let split = drivers.map(function(d) {
    let splat = d.split(" ");
    return Object.assign({}, {firstName: splat[0]}, {lastName: splat[1]})
  } )
  return split;
}

function attributesToPhrase(drivers) {
  let phrase = drivers.map(function(d) {
    return `${d.name} is from ${d.hometown}`
  });
  return phrase;
}