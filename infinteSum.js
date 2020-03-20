function sum(x){
    let Addition = x;
    function resultFn(y){
        Addition += y;
        return resultFn;
    }
    resultFn.toValue = function(){
            return Addition;
        };
    return resultFn;
}

console.log(sum(3)(4)(5)(6)(10).toValue());