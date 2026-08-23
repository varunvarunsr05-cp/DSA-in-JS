
      // let nums=[11,22,660,1,3,4,1000]

      // function findMax(){
      //   let max=nums[0];
      //   for (let i = 0; i < nums.length; i++) {
      //       //   console.log(nums[i])     
      //         if (nums[i]>max) {
      //           max=nums[i];
      //         }     
      //       }
      //       console.log(max)    
      // }

      // findMax();

      
      // function findMax(arr){
      //   let max=arr[0];
      //   // console.log(max)
      //   for (let num of arr) {
      //     if (num>max) {
      //         max=num;
      //     }
      //   }
      //   console.log(max)
      // }
      // findMax(arr);
      
      let arr=[1,4,50,2,300,9,99];

      function findMax(arr){
        let max=arr[0];
        console.log(max)

        for (const num of arr) {
            if(num>max){
              max=num;
            }
        }
        return max;
      }

      console.log(findMax(arr))