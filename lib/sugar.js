var Sugar = require('sugar');
// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  // return Object.keys(object).length
 return Sugar.Object.size(object);
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  // const values = Object.values(object);
  // let smallest = values[0];
  // values.forEach(function(n){
  //   if(n < smallest){
  //     smallest = n;
  //   }
  // });
  // return smallest;
  let n = Sugar.Object.min(object);
  return object[n];
}
/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  // const values = Object.values(object);
  // let highest = values[0];
  // values.forEach(function(n){
  //   if(n > highest){
  //     highest = n;
  //   }
  // });
  // return highest;
  let n = Sugar.Object.max(object);
  return object[n];
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  //return Object.assign({},object);
  return Sugar.Object.clone(object);
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  //return object[key];
  return Sugar.Object.get(object, key);
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  // const value =  Object.prototype.hasOwnProperty.call(object, key);
  // return value;
  return Sugar.Object.has(object, key);
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let total = 0;
  for(let key in object){
    const value = object[key];
    if(typeof value === 'number'){
    total+=object[key];
    }
  }
  return total;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  // const inv = {};
  // Object.keys(object).forEach(function(key){
  //   inv[object[key]] = key;
  // });
  // return inv;
  return Sugar.Object.invert(object);
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newArr = {};
  arr.forEach(function (item) {
    newArr = Object.assign(newArr, item);
  });
  return newArr;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. 
  It receives an object and a matcher function. It should test each value in the object 
  against the matcher function and if a matching value is found, the value should be returned. 
  Otherwise, return null.
*/
function find(obj, matcherFunc) {
  // for(let key in obj){
  //  if(matcherFunc(obj[key])){
  //    return obj[key];
  //  }
  // }
  // return null;
  let f = Sugar.Object.find(obj, matcherFunc);
  return (f === undefined) ? null : obj[f];
}
/*
  This function allows you to test whether every value in an object matches a certain criteria. 
  For example, is every value greater than 100? The function receives an object and a tester 
  function. If all values in the object pass the tester function, true is returned. Otherwise, 
  return false.
*/
function every(obj, func) {
  // let resultN = 0;
  // for(let key in obj){
  //   if(!func(obj[key])){
  //     resultN++
  //   }
  // }
  // if(resultN === 0){
  //   return true;
  // }
  // return false;
  return Sugar.Object.every(obj, func);
}
/*
  This function allows you to test whether some values in an object match a certain criteria. 
  For example, are at least some of the values greater than 100? The function receives an object
  and a tester function. If at least 1 of the values in the object pass the tester function, 
  true is returned. Otherwise, return false.
*/
function some(obj, func) {
  // let resultP = 0;
  // for(let key in obj){
  //   if(func(obj[key])){
  //     resultP++
  //   }
  // }
  // if(resultP > 0){
  //   return true;
  // }
  // return false;
  return Sugar.Object.some(obj, func);
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
