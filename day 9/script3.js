//function curry

function curry(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);
            }
        }
    }

}

curry(3)(5)(8)(4);