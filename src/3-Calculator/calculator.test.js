import calculator from "./calculator.js";

test("adding two numbers", ()=>{
    expect(calculator.add(3,4)).toBe(7);
});

test("subtracting a number from another", ()=>{
    expect(calculator.subtract(3,1)).toBe(2);
});

test("multiply two numbers", ()=>{
    expect(calculator.multiply(3,2)).toBe(6);
});

test("divide one number with another",()=>{
    expect(calculator.divide(2,2)).toBe(1);
})