function factorComputed(number){
    let result=[]
    for(var i=1;i<=number;i++){
        if(number%i==0){
            result.push(i)
        }
    }
    return result;
}
exports.factorComputed=factorComputed