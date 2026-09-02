
//setTimeout runs once after the delay
let timeOut= ()=>{
   setTimeout(() => {
        console.log("hello daddy");
    }, [2000]);
   
}
timeOut();

//setInterval runs repeatedly
let interval=()=>{
    setInterval(()=>{
        console.log("welcome my son");
    },[3000])
}
    
interval();