let arr = [29, 40, 60, 80, 70, 30, 75, 83, 103, 'r', null, 'a'];
let numberEven = 0;
let numberOdd = 0;
let numberOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        numberOther++;
    } else {
        if (arr[i] % 2 === 0) {
            numberEven++;
        } else {
            numberOdd++;
        }
    }
}

console.log("Even is " + numberEven);
console.log("Odd is " + numberOdd);
console.log("Other is " + numberOther);