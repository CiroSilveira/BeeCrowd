console.clear();

let i = 0;
let j = 1;

for (let count = i; count <= 2; count += 0.2) {
    for (let counter = 1; counter <= 3; counter++) {
        if (count.toFixed(1).endsWith("0")){
            console.log(`I=${count.toFixed()} J=${j.toFixed()}`);
        } else {
            console.log(`I=${count.toFixed(1)} J=${j.toFixed(1)}`);
        }
        j++;
    }
    j -= 3;
    j += 0.2;
}