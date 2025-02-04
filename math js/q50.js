function addComp(num1,num2){
    return {
        real: num1.real+num2.real,
        imaginary:num1.imaginary+num2.imaginary
    };
}

const comp1={real:3,imaginary:4};
const comp2={real:4,imaginary:5};

const res=addComp(comp1,comp2);
console.log(`${res.real}+${res.imaginary}i`);