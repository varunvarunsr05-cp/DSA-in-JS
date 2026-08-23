// <!--moderate qn-write a function to reverse each word in a sentance without changing the word order -->

        // let nums=[1,2,3,4]
        
        // console.log(sentance.split(" "));
        let sentc="hello world";
        // let words=sentc.split(" ")
        // console.log("words",words)

        function reverseWord(sentc){
            let words=sentc.split(" ")
            console.log(words)
            let reverse=""

            for (const word of words) {
                for (let i = word.length-1; i >=0; i--) {
                    reverse+=word[i];
                }
                reverse+=" ";
            }
            console.log(reverse)
        }
        reverseWord(sentc)
        // let splited=sentance.split(" ");
        // console.log(splited);

        // function reverseWord(){
        //     let reverse="";
        //     let word="";

        //     for (let i = 0; i < splited.length; i++) {
        //         word=splited[i];
        //         for (let i = word.length-1; i>=0 ; i--) {
        //             // console.log(word[i])
        //             reverse+=word[i];  
        //         }
        //         reverse+=" ";
        //         // console.log("word is,",word)
        //     }
        //     console.log(`Each word reverse of "${sentance}" is "${reverse}"`);
        // }

