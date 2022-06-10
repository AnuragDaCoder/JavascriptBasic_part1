// import _ from "./loadash";
/*  
!1==>*****************  1. Javascript is a dynamic Language*********************************** 
*/

// var a = "anurag";
// a = 123;
// a = true;
//  console.log(`%c ${a}`, "color:red;font-size:20px");
// console.log("%c test", "color:red;font-size:20px");

/*
! ==>***************** 2. Function is first class citizens *********************************** 
*/

//(1) function can be treated as variable
const calculator = () => 4 * 3;
let x = calculator();

//(2) function can be passed as arguments
// const printCallback = (callback) => {
//   console.log(callback());
// };
// printCallback(calculator);

//(3) function can return functions
// function name() {
//   return function (a) {
//     console.log("Hello" + a);
//   };
// }

// // name();
// console.log(name()(34));

// const c = name();
// c();

/*  
! ==>***************** 3. Question related to Hoisting *********************************** 
*/

// console.log(a);
// var a;

//!!hoisting- redeclare/updatable
//var -- redeclare // updatable
//let -- updatable
//const -- neither redeclare nor updatable

// var test = "test";
// var test = "test changed";
// console.log(test);

// let test = "test";
// test = "test changed";
// console.log(test);

//!!
// console.log(a);
// var a;

///!!
// var temp = 86;
// tempCalculate();
// console.log(temp); //?

// function tempCalculate() {
//   console.log(temp); // ? undefined
//   var temp = 50;
//   temp = ((temp - 32) / 9) * 5;
//   console.log(temp);//10
// }

// function foo() {
//   let y;
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }
// console.log(foo());
// console.log(typeof x);
// console.log(typeof y);

/*
!!Explanation
function foo() {
   y = 0;    //no const let var ... it is a window object can be access anywhere
   let x =y //let keyword is there ..it is specific to that function
   x++;
   y++;
  return x;
}
console.log(foo());    //1   
console.log(typeof x); //undefined
console.log(typeof y); //number

*/

/*  
!4    ==>***************** Deep cloning  *********************************** 
*/
////////? what should be the output of below question ??///////////////

var cricketer = {
  name: "Virat",
  team: "India",
  age: 32,
  colleagues: {
    name: "Rohit",
  },
  performance: function (type) {
    return `${this.name} is ${type} player`;
  },
};

// var copyCricketer = cricketer;
// copyCricketer.age = 42;
// console.log(copyCricketer);
// console.log(cricketer);

/*
!!Explanation
If you change the age of copyCricketer1, original cricketer gets affected  
*/

//Attempt 1 using JSON.stringify
// var copyCricketer1 = JSON.parse(JSON.stringify(cricketer));
// copyCricketer1.age = 45;
// console.log(copyCricketer1);
// console.log(cricketer);

/*
!!Explanation
Everything gets copied except the function ... so there is a side effect to it
*/

//Attempt 2 using Object.Assign
// var copyCricketer2 = Object.assign({}, cricketer);
// copyCricketer2.colleagues.name = "Rahane";
// console.log(copyCricketer2);
// console.log(cricketer);

// let arr = [1, 2, 3, 4, 5];
// arr.unshift(7);
// console.log(`%c ${arr}`, "color:red;font-size:20px");

// let updatedarray = [6, ...arr];
// console.log(`%c ${updatedarray}`, "color:red;font-size:20px");

// let spreadCricketerCopy = { ...cricketer };
// spreadCricketerCopy.colleagues.name = "Rahane";
// console.log(spreadCricketerCopy);
// console.log(cricketer);

/*
!!Explanation
nested objects changes as well ... so there is a side effect to it
*/
// let finalDeepCopy = _.cloneDeep(cricketer);
// finalDeepCopy.colleagues.name = "Rahane";
// console.log(finalDeepCopy);
// console.log(cricketer);
/*
!!Explanation
 Use loadash cloneDeep to overcome this side effects of deep cloning.....
*/

/*  
!6**********************************Currying in Javascript *************************************** 
*/

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => (c) => a * b * c;

// console.log(`%c ${multiply(4)}`, "color:red;font-size:20px");
// console.log(`%c ${curriedMultiply(4)(7)(4)}`, "color:red;font-size:20px");

const infinitmul = (a) => {
  return (b) => {
    if (b) return infinitmul(`${a} ${b}`);
    else {
      return a;
    }
  };
};

console.log(`%c ${infinitmul("a")("n")()}`, "color:red;font-size:20px");
