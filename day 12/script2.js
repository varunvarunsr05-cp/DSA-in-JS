//1. promise-represents future result or "tells data will come later"
const promise = fetch("/users")

// 2. do something when it finishes "means:when data comes do this"
fetch("/users")
    .then(res => console.log(res));


// 3. async-marks a function as asynchronous "await- wait until the result comes"
async function getUser() {
    const res = await fetch("/users");
    console.log(res)
}

//4. try...catch -handles the error "try this, if it fails,handle error at the catch";
 async function loadIt() {
    try {
        const res=await fetch("/users")
        let data=res.json();
        console.log(data)
    } catch (error) {
        console.log("something went wrong");
    }
 }


