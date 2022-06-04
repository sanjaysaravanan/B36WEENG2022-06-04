
// Rest means combining a spread entity into single array/object
// function SumOfNNumbers(...restArgs) {
//   console.log(restArgs); // [3,4,5,6] or 3,4,5,6
//   let sum = 0;

//   restArgs.forEach(ele => sum = sum + ele);
//   /**
//    * 1 ----->  ele=1 => sum += 1; ---> sum = sum + 1;
//    * 2 ----->  ele=2 => sum += 2; ---> sum = sum + 2;
//    * ...
//    */

//   return sum;
// }

// const arr = [1,2,3,4,5,6];

// console.log(...arr); // console.log(1,2,3,4,5,6);

// Spread the iterable entity as new reference
// const result = SumOfAll(...arr); // SumOfTwo(1,2,3,4,5,6);

// console.log(result);


// Array Destructing


// const arr2 = [10, 9, 8, 7, 6, 5];

// const [a , , , , , ,  , , ,  , b] = arr2;

// console.log(a,b);
 
// Take and store first two elements of arr2 in separate variables

// var a = arr2[0];
// var b = arr2[1];

// var [ a, b, ...restOfArr2 ] = arr2; // Array destructuring it is based out of index 


// console.log(a, b);
// console.log(restOfArr2); // [8, 7, 6, 5]

// restOfArr2[0] = 100;
// console.log("arr2", arr2);
// console.log("restOfArr2", restOfArr2);

// Nested Arr
// const nestedArr = [1, [4,5,6], 2, [7,8,9], 3, [10, 11, 12]];

// const [a,[b], x, ] = nestedArr;


// console.log(a,b, x);




// Types of Functions


// Function keyword named 
// function SumOf2(a,b) {
//   return a + b;
// }

// Arrow Function - named
// const ArrowSum = (a,b) => {
//   return a + b;
// }


// // IIFE ---> Immediately invoked function
// (function IIFE () {
//   console.log("IIFE");
// })();


// // Closure Functions ----> functions which uses the vars of the outer scope
// // it does not explicitly create var on its own

// var a = 10, b =100;

// function ClosureOne() {
//   console.log(a, b);
// }

// function ClosureTwo(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// let poemData = `Johny Johny Yes Papa,     
// Eating sugar?  No, papa!
// Telling lies? No, papa!
// Open your mouth Ah, ah, ah!`

// console.log(poemData);

// Object Destructuring

// const obj = { "empName": "Sam", role: 'developer', Bio: { DOB: "dd-mm-yyyy", YOP: 'yyyy' } }

// var {empName: customName, role, Bio } = obj; // Destructing based on keys of the Obj

// Bio.DOB = "yyyy-mm-dd";

// console.log(obj)
// console.log(customName, role, Bio);

// function getLaptop(make, model, year) {
//   return {
//      make,
//      model,
//      year
//   }
// } // return {make: make, model: model, year: year}

// console.log(getLaptop("Apple", "MacBook", "2015"));



// var obj = {name : "RajiniKanth", age : 33, hasPets : false};

// For in approach
// function printAllValues(obj) {
//   var values = [];
//   for (const key in obj) {
//     values.push(obj[key]);
//   }
//   return values;
// }

// Object approach
// function printAllValues(obj) {
//   return Object.values(obj);
// }


// console.log(printAllValues(obj));

// function printAllKeys(obj) {
//   return Object.keys(obj);
//  }



// var obj = {name: "ISRO", age: 35, role: "Scientist"};
// function convertListToObject(obj) {
//   // your code here
//   var result = [];
//   for (const key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(convertListToObject(obj));


// var expected = {foo: 5, bar: 6, };
// var actual = {foo: 5, bar: 6};
// function assertObjectsEqual(actual, expected, testName){
//   console.log(testName);
//   // '{"foo": 5, "bar": 6}' === '{"foo": 5, "bar": 6}'
//   if(JSON.stringify(actual) === JSON.stringify(expected)) {
//     return "Passed";
//   }
  

//   return 'Failed'; // Passed | Failed
// }


// console.log(assertObjectsEqual(expected, actual, "Test Case 1"));

// console.log("==");
// console.log(100 == "100");

// console.log("===");
// console.log(100 === "100");


// If is teaked like below the case will fail
var expected = { foo: 5, bar: 6 };
var actual = { bar: 6, foo: 5};
function assertObjectsEqual(actual, expected, testName){
  console.log(testName);
  // '{"foo": 5, "bar": 6}' === '{"bar": 6, "foo": 5}'
  if(JSON.stringify(actual) === JSON.stringify(expected)) {
    return "Passed";
  }
  
  return 'Failed'; // Passed | Failed
}


console.log(assertObjectsEqual(expected, actual, "Test Case 1"));