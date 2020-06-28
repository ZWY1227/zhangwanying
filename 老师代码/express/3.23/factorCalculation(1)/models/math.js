function factorComputed(number){
    let result = [];
    for(var i=1; i<=number; i++){
        // number % i == 0 && result.push(i)
        if(number%i == 0){
            result.push(i)
        }
    }
    // console.log(result)
    return result;
}
// factorComputed(10);
exports.factorComputed = factorComputed;




