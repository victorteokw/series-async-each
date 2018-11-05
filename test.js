const eachAsync = require('./index');

const sleep = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
}

eachAsync(['a', 'b', 'c', 'd', 'e'], async (a, i, arr) => {
  await sleep(2);
  console.log(a, i, arr);
});
