function decimalToBinary(dec) {
    if (dec === 0) return "0";
    let binary = "";

    while (dec > 0) {
        binary = (dec % 2) + binary;
        dec = Math.floor(dec / 2);
    }
    return binary;
}

function binaryToDecimal(bin) {
    let decimal = 0;
    let j = 0;
    
    for (let i = bin.length - 1; i >= 0; i--) {
        decimal += parseInt(bin[i]) * Math.pow(2, j);
        j++;
    }
    
    return decimal;
}

function reverse(bin) {
    var str = bin.split("").reverse().join("");
    return str.replace(/^0+/, ""); 
}

function decToRevDec(dec) {
    let bin = decimalToBinary(dec);
    let revBin = reverse(bin);
    let decRev = binaryToDecimal(revBin);
    return decRev;
}

var ans = decToRevDec(100);
console.log(ans); 
