console.clear();

let i = 1;
let j = 7;

for (let count = i; count <= 9; count += 2) {
    for (let counter = 0; counter < 3; counter++) {
        console.log(`I=${count} J=${j}`);
        j--;
    }
    j += 5;
}
