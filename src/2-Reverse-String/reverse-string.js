export default function reverseString(string){  
    const arr = string.split("");
    const reversedArray = [];

    for(let i=arr.length-1; i>-1; i--){
        reversedArray.push(arr[i]);
    }


    return reversedArray.join("");
}