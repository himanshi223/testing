export default function analyzeArray(arr){
    const average = arr.reduce((sum, curr)=>sum+=curr)/arr.length;
    const min = arr.reduce((min, curr)=>min = min<curr ? min:curr);
    const max = arr.reduce((max, curr)=>max = max>curr ? max:curr);
    const length = arr.length;

    return {average, min, max, length};
}