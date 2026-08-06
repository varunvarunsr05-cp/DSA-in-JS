
        // console.log("j")
        
        // function findPal(){
            //     let rev="";
            //     for (let i = name.length-1; i >= 0; i--) {
                //         console.log(name[i])
                //         rev+=name[i]
                //     }
                //     console.log("palindrom is",rev===name)
                // }
                // findPal()
        let name="ram"

        function palindrome(name){
            let reverse="";

            for (let i = name.length-1; i >=0 ; i--) {
                // console.log(name[i]);
                reverse+=name[i];
            }
            if (reverse===name) {
                console.log("pal is",reverse===name)
            }
            else{
                console.log("pal is",reverse===name)

            }
            console.log(reverse)
        }
        palindrome(name)
                
