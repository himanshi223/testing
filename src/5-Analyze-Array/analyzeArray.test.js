import analyzeArray from "./analyzeArray.js";

test("analyze an array with numbers", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4, 
        min: 1,
        max: 8,
        length: 6,
    })
});

test("analyze an array with negative and positive numbers", ()=>{
    expect(analyzeArray([-1,0,1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3,
    })
});