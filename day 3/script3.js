// <!-- Tough qn- write a function to check whether two strings are anagrams or not -->

        // console.log("hi")
        let str1="evil";
        let str2="vil";

        let conts=str2.includes("")
        let ord1="";
        // console.log(ord1)
        
        function isAnagrams(str1,str2){
            let ord2=str2.split("").sort().join("");
            let ord1=str1.split("").sort().join("");
            // console.log(ord1)

            for (const char of ord1) {
                if (!(ord2.includes(char))) {
                    console.log("not contains",char)
                }
            }
            
        }
        isAnagrams(str1,str2);

        // function iscontains(){
        //     let nstr="";
        //     for (const char of str1) {
        //         console.log(`"${char}"`);
        //         let ifContain=str2.includes(char)
        //         console.log(ifContain)
        //         if (ifContain) {
        //             nstr+=char;
        //         }
        //     }
        //     if (nstr.length===str2.length) {
        //         console.log(`🫡"${nstr}" contains all chars of "${str2}"  with a equal no. of ${nstr.length} letters`);
        //         // console.log(nstr)
        //     }
        //     else{
        //         console.log(`❌"${nstr}" are the only matching chars of "${str2}" `);
        //     }
        // }
        // iscontains()
        // console.log(conts)
        // console.log(str1==str2)
