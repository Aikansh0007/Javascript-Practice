function calculateLCM(num1,num2){
    var gcd=calculateGCD(num1,num2);
    return (num1*num2)/gcd;
}
function calculateGCD(num1,num2){
    while(num2){
        var temp=num2;
        num2=num1%num2;
        num1=temp;
    }
    return num1;
}
console.log(calculateLCM(3,15));