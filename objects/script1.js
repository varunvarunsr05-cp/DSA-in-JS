let person={
    name:"harry",
    age:22,
    isStudent:true
};
//ACESS
// console.log(person.name);//dot . notation.
// console.log(person["age"]);//" " bracket notation.

// let key="isStudent";//dynamic property
// console.log(person[key]);

//MODIFY
person.age=23;
// console.log(person);

// //ADD NEW
// person.city="delhi";
// console.log(person);

// //DELETE
// delete person.isStudent;
// console.log(person);

// //NESTED ONJS
// let user={
//     name:"riya",
//     address:{
//         city:"mumbai",
//         zip:7889,
//     }
// }
// console.log(user.address.city);

// let calculatot={
//     add:function(a,b){
//         return a+b;
//     },
//     substrsct(a,b){
//         return a-b;//shorthand
//     }
// }
// console.log(calculatot.substrsct(6,5))


//LOOPING TROUGH OBJ BY For in loop.
// for(let key in person){
//     console.log(key,":",person[key]);
// }

//METHODS OF OBJ
console.log(Object.keys(person));//returns a array ok keys.
console.log(Object.values(person));//returns a array ok values.
console.log(Object.entries(person));//returns a array ok key-value pairs.