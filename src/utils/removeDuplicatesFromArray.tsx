
export default function removeDuplicatesFromArray(arr: string[]) {

    
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
    
}