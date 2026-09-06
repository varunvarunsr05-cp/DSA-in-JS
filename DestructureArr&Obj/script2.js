//OBJECT DESTRUCTAURING.

let person={
    name:"tom",
    age:44,
    city:"delhi",
}

// const{name,age,city}=person;
// console.log(name,age,city);

//ASSIGNING TO NEW VARIABLE.
// const{name:name1,age:age1,city:city1}=person;
// console.log(name1,age1,city1);

//DEFAULT VALUES in destru
// const{name,age,city,gender="male"}=person;
// console.log(name,age,city,gender);


//NESTED DESTRUCT IN OBJ
// const user={
//     name:"abhinav",
//     address:{
//         city:"delhi",
//         zip:9999
//     }
// }
// let {name,address:{city,zip}}=user
// console.log(name,city,zip)

//NESTED ARRAY's
let numbers=[1,[2,3]]
// let [a,[b,c]]=numbers;
// console.log(a,b,c)

//COMBINING ARRAYS AND OBJS
const users=[
    {name:"dam",age:77},
    {name:"ham",age:56}
]

// let [first,sec]=users;
// console.log(first,sec);

// let [{name:name1},{name:name2}]=users;
// console.log(name1,name2);

//function parameter destructauring
// function displayUser({name,age}){
//     console.log(`name:${name},age:${age}`);
// }
// const user={name:"riy",age:23};
// displayUser(user);

//default value in a function
// function greet({name="guest"}){
//     console.log("hello",name);
// }

// greet({name:""});

//DESTRUCTAURING WITH REST OPERATOR.
// const[first,...rest]=numbers
// console.log(first,rest);

// with obj
const {name,...rest}=person;
console.log(name,rest);

let str=[1,2,3,4,5]
console.log(str.find(e=>e>2));