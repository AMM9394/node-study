console.log('script start');

setImmediate(function A() {
  console.log(1);
  setImmediate(function B() {console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);

console.log('script end');
