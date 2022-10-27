class Helper{
    static isEven(n){
        if(n%2==0){ 
            return true;
        } else {
            return false;
        }
    }
    static isPositive(n){
        if(n>=0){
            return true;
        } else {
            return false;
        }
    }
    static isNegative(n){
        if(n<0){
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Helper