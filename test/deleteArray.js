/*数组删除指定元素效率对比*/
var array = [];
let count = 100;
for(let i=0; i<count;i++){
  if(i%7===0){
    array.push('test'+7);
  }else {
    array.push('test'+i);
  }
}
var special = 'test7';

console.log('count:',count);

/*for i-- splice实现*/
console.log('for i ++');
var deleteArray = function (sourse, target) {
  for(let i = sourse.length-1 ;i>=0 ; i--){
    if (sourse[i]===target){
      sourse.splice(i,1);
      i++;
    }
  }
  // console.log(sourse);
  return sourse;
}
console.time('time1');
deleteArray(array,special);
console.timeEnd('time1');


/*数组转字符串实现*/
console.log('string');
var deleteArrayString = function (source, target) {
  var myString = source.join(',') + ',';
  let reg = `/${target},/g`;
  let newstr = myString.replace(eval(reg),'');
  var resultArray = newstr.split(',').slice(0,-1);
  // console.log(resultArray);
  return resultArray;
}
console.time('time2');
deleteArrayString(array,special);
console.timeEnd('time2');

/*filter 实现*/
console.log('filter');
console.time('time3');
/*console.log(array.filter(function (value) {
  return value !== special;
}));*/
array.filter(function (value) {
  return value !== special;
});
console.timeEnd('time3');



/*for 新数组实现*/
console.log('for new array');
var deleteArrayNew = function (sourse, target) {
  var newArray = [];
  for(let i in sourse){
    if (sourse[i]!==target){
      newArray.push(sourse[i]);
    }
  }
  // console.log(newArray);
  return newArray;
}
console.time('time4');
deleteArray(array,special);
console.timeEnd('time4');


