let myMap = new Map();
myMap.set('name', 'Nastya')
myMap.set('age', 31)
myMap.set('height', '172')

for (let keysValues of myMap.keys()){
    console.log(`${keysValues} - ${myMap.get(keysValues)}`);
}