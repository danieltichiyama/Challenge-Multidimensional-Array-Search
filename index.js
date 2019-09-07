function locate(array, target) {
  let string = array.join(" ");
  return string.includes(target);
}

module.exports = locate;
