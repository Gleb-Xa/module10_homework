let x = undefined
if (typeof x === 'number') {
    console.log('x - это число')
} else if (typeof x === 'string') {
    console.log('x - это строка')
} else if (typeof x === 'boolean') {
    console.log('x - логический тип')
} else console.log('x - не определен')