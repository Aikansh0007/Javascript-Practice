async function Multiply(a,b){
    const mathModule=await import('./q8Parent.js');
    console.log(mathModule.multiply(a,b));
}
Multiply(4,5);
