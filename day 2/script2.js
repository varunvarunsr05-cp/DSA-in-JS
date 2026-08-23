        // console.log("hi");
        
        // function remDupl(str){
            
        //     // console.log(str)
        //     let final="";
        
        //     for (let char of str) {
            //             // console.log(char)
            //             if (!final.includes(char)) {
            //                 final+=char;
            //                 // console.log(!final.includes(char));
            //             }

            //         }
            //         console.log(final);
            //     }
            let str="rraammaa";

            function remDupl(str){
                let final=""

                for (const char of str) {
                    if (!(final.includes(char))) {
                        final+=char;
                    }
                }
                return final;
            }

            
            console.log(`removed duplicates "${remDupl(str)}"`);


         //the way I tried to solve this problem   

        // function removeDuplicates(str){
        //     let word="";
        //     let common="";

        //     for (let i = 0; i < str.length; i++) {
        //             // console.log(str[i]);
        //             for (let j = i+1; j < str.length; j++) {
        //                     if (str[i]===str[j]) {
        //                         common+=str[i]
        //                         console.log(common)
        //                     }                        
        //                     word+=str[i];
        //                 }
        //     }
           
        //     console.log(word)
        // }

        // removeDuplicates(str)
