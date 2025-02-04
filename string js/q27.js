function asciiToHex(str){
    return str.split('').map(char=>char.charCodeAt(0),toString(16)).join(' ');
}

console.log(asciiToHex("Hello"));