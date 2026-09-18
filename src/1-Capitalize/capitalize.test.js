import capitalize from "./capitalize.js";

test("capitalize a lowercase string",() =>{
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalze a uppercase sttring", ()=>{
    expect(capitalize("HELLO")).toBe("Hello");
});

