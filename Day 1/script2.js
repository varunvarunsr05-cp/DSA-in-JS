
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

        let str="gaddeaga";

        function nonRepeat(str){
            let reverse="";
            let count={};
            for (const char of str) {
                console.log(char)
               count[char]=(count[char] || 0)+1
            }
            console.log(count)
            for(let char in count){
                if (count[char]===1) {
                    let nr=char
                    console.log(nr)
                }
            }
        }
        nonRepeat(str)
