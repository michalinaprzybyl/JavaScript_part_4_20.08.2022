// Ćwiczenie 1. Napisz program, który odczytuje wprowadzony przez użytkownika tekst, a nastepnie dzieli go na poszczególne słowa. Następnie zlicza ilość wystąpień słów niezależnie od wielkości liter i wypisuje je w konsoli w kolejności alfabetycznej.

let text = prompt("Enter any text");
text = text.replaceAll(",", "");
let splittedString = text.split(" ");

console.log(splittedString);

let result = [];

for (let i = 0; i < splittedString.length; i++) {
    let isCounted = false;
    for (let j = 0; j < result.length; j++) {
        if (result[j].word === splittedString[i]) {
            result[j].howMuch++;
            isCounted = true;
            break;
        }
    }

    if (isCounted === false) {
        result.push(
            {
                word: splittedString[i],
                howMuch: 1
            })
    }
}

console.log(result);