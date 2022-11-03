function averageThreeNumbers(a, b, c) {
    let sum = a + b + c
    let average = sum / 3
    return average
}

function createSentence(num, noun) {
    return "On average, a Berkeley student has " + num + " " + noun +"s"
}

function getRandomNum(max) {
    return Math.round(Math.random() * max)
}

let x = getRandomNum(20)
let y = getRandomNum(10)
let z = getRandomNum(13)
let avg = averageThreeNumbers(10, 20, 30)
let sentence = createSentence(1, "Franky")
console.log(sentence);