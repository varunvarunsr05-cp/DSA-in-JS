
        // function uniChar(str){
        //     count={};
        //     for (let char of str) {
        //         count[char]=(count[char]||0)+1;
        //     }
        //     for (const char of str) {
        //         if (count[char]==1) {
        //             return char;
        //         }
        //     }
        //     return null
        // }

        // console.log(uniChar("aabccmmdd"))

        
        // function nonRepeat(str){
            //     // let reverse="";
            //     let count={};
            //     for (const char of str) {
        //         // console.log(char)
        //        count[char]=(count[char] || 0)+1
        //     }
        //     console.log(count)
        //     for(let char in count){
        //         if (count[char]===1) {
        //             let nr=char
        //             console.log(nr)
        //         }
        //     }
        // }
        // nonRepeat(str)
        
        let str="gaddageaf";

        function nonRepeat(str){
            count={}
            let nR=[];

            for(let char of str){
                // console.log(char)
                count[char]=(count[char]|| 0)+1
            }
            for(let char in count){
                if(count[char]==1){
                    nR.push(char)
                    // return char;
                }
            }
            return nR;
            // return count;
        }

        console.log(nonRepeat(str))