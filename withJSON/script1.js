//converting objects into json.

// const { use } = require("react")

let user={
    name:"varun",
    age:22,
    city:"delhi"
}
// console.log(user);

// let jsonString=JSON.stringify(user);
// console.log(jsonString);

//storing JSON in local storage.
// localStorage.setItem("user",JSON.stringify(user));

//JSON string back to objects.
// const obj=JSON.parse(jsonString);
// console.log("obj = ",obj);

//Retieve json from localStorage
// let storedUser=localStorage.getItem("user");
// console.log("storedUser",storedUser);

//format JSON output.
const prettyJson=JSON.stringify(user, null,2)
console.log(prettyJson);
        //null-to filter properties
        //2- adds indentation for readability.

//real world use
fetch("https://jsonplaceholder.com")
    .then(res=> res.json())//parse json string into js object.
    .then(data=>console.log(data))
    .catch(err=>console.log("Error",err));
    
    //here server sends data as JSON string
    //.json() internally calls JSON.parse() to convert it into js object.