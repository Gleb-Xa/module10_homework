const x = +prompt('Введите число')
if (isNaN(x)) {
    console.log('Упс, кажется, вы ошиблись')
    } else if (x === 0) {
    console.log(`${x} - нужно ввести число отличное от ноля`)
    } else if (x % 2 === 0) {
    console.log(`${x} - четное число`)
    } else {
    console.log(`${x} - нечетное число`)
}