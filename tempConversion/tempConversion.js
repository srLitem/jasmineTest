const ftoc = function(fUnit) {
  let celsius = ((fUnit - 32) * (5/9) * 10);
  return (Math.round(celsius) / 10);
}

const ctof = function(cUnit) {
  let fahrenheit = (((9/5 * cUnit) + 32) * 10);
  return (Math.round(fahrenheit) / 10);
}

module.exports = {
  ftoc,
  ctof
}
