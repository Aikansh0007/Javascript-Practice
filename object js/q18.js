function isDOMElement(value){
    return value instanceof Element || value instanceof HTMLElement;
}
const element=document.createElement("div");
const non="Not";

console.log(isDOMElement(element));
console.log(isDOMElement(non));
