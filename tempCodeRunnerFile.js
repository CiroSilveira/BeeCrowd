// BUBBLE SORTALGORITHM

let unsortedArray = [55, 32, 1, 13, 85, 58, 123, 321, 456, 654, 74, 47, 12, 21, 2, 3];
const n = unsortedArray.length;

for(let i= 0; i < n - 1; i++) {
    let swapped = false;
    for(let j = 0; j < n - i - 1; j++) {
        if(unsortedArray[j] > unsortedArray[j + 1]) {
            let temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j + 1];
            unsortedArray[j + 1] = temp;
            swapped = true;
        }
    }
    if(!swapped) {
        break;
    }
}

console.log(`${unsortedArray}`);



