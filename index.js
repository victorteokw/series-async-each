const eachAsync = async (arr, func) => {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      await func(arr[i], i, arr);
    }
  } else {
    for (let key in arr) {
      await func(arr[key], key, arr);
    }
  }
};

module.exports = eachAsync;
