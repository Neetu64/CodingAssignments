
function solution(text){
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}

console.log(solution("neetuSingh"));