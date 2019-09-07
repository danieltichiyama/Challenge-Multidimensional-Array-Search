console.time("timer");

function locate(array, target) {
  // let string = array.join(" ");
  // return string.includes(target); //console.time()...0.020ms

  isLocated = false;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      locate(array[i], target);
    } else if (array[i] === target) {
      isLocated = true;
    }
  }

  return isLocated; //console.time()...0.161ms
}

console.timeEnd("timer");
module.exports = locate;
