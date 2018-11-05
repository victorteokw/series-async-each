const eachAsync = async (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    await func(arr[i], i, arr);
  }
};

module.exports = eachAsync;
