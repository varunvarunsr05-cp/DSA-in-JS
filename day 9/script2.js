const mix=[1,'d','e',2,5,'u','y',3];


function divide(arr){
    let str=[];
    let nums=[];

    arr.forEach(e=>{
        if (typeof(e)==="string") {
            // console.log((e))
           return str.push(e);
        }else{
           return nums.push(e);
        }
    })
    console.log(str,'',nums)
}

divide(mix)