function fizzbuzz() {
    for(let n=1; n<=100; n++){
        let text='';
        if(n%3==0){
            text+='Fizz';
            } 
        if(n%5==0){
            text+='Buzz';
            }
        console.log(text || n);
      }
    
}

module.exports = fizzbuzz