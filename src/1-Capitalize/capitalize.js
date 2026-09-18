export default function capitalize(string){
    const lower = string.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1, lower.length);
}


