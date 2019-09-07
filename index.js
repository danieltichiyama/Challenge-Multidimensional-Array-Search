function locate(array, target) {
  isLocated = false;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      locate(array[i], target);
    } else if (array[i] === target) {
      isLocated = true;
    }
  }

  return isLocated;
}

module.exports = locate;
