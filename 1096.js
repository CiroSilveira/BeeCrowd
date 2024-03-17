console.clear();

let i = 1;
let j = 7;

for (let count = i; i <= 9; j--) {
    if (j >= 5) {
    console.log(`I=${i} J=${j}`);
    } else {
        j = 8;
        i += 2;
    }
}