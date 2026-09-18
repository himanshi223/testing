import ceaserCipher from "./ceaserCipher.js";

test("shifting a string a given number of times", ()=>{
    expect(ceaserCipher("abc", 1)).toBe("bcd");
});

test("wrapping of last alphabet to first", ()=>{
    expect(ceaserCipher("xyz", 3)).toBe("abc");
});

test("case preservation", ()=>{
    expect(ceaserCipher("heLLo", 1)).toBe("ifMMp");
});

test("punctuation", ()=>{
    expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})