function fizzbuzz(n){
    let fizzTomb=[];
    for (let index = 1; index <= n; index++) {
        if(index%15==0){
            fizzTomb.push("fizzbuzz");
        }else if(index%5==0){
            fizzTomb.push("buzz");
        }else if (index%3==0){
            fizzTomb.push("fizz");
        }else{
            fizzTomb.push(index);
        }   
    }
    return fizzTomb.toString();
}