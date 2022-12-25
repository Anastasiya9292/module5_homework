const randomArray = [29, 40, 60, 80,70]

console.log(randomArray.length)

let result = randomArray.map(function(item, index, array) {
    console.log(item)
})