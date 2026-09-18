export default function ceaserCipher(string, num){
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetsArray = alphabets.split("");
    const inputArr = string.split("");

    const result = inputArr.map(char => {
        let charIndex = alphabets.indexOf(char);
        if(charIndex !== -1)
            return alphabets[(charIndex+num)%26];
        charIndex = capitalAlphabets.indexOf(char);
        if(charIndex !== -1)
            return capitalAlphabets[(charIndex+num)%26];
        return char;
    });

    return result.join("");
}

