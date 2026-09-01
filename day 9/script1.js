// const str1="abc";
// const str2="123";

// let res="";

// for(let i=0;i<str1.length;i++){
//     res+=str1[i]+str2[i];
// }
// console.log(res)

let arr=[15,11,11,8,10];

function indexOf(arr,target){

    for (let i = 0; i < arr.length; i++) {
        let sum=0;
        for (let j = i+1; j < arr.length; j++) {
            if((sum=arr[i]+arr[j])===target){
                console.log("arr of target",i,"and",j)
            }
            
            // console.log(sum);
        }
    }
}
indexOf(arr,25)

