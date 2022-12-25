let writeNumber = +prompt('Четное или нечетное?', 'Введите значение')

if (typeof writeNumber == 'number' && false == Number.isNaN(writeNumber) && writeNumber !== 0) {
    writeNumber = writeNumber % 2 === 0
    const result = writeNumber ? alert('Четное') : alert('Нечетное')
} else {
   alert('Упс, кажется, вы ошиблись')
}