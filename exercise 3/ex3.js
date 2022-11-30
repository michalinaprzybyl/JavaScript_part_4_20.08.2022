// Ćwiczenie 3: Napisz program, który pobierze 10 liczb od użytkownika, a następnie wyświetli ile razy dana liczba wystąpiła.

// 1st method
const arr1 = [];  // nazwy właściwości

for (let i = 0; i < 10; i++) {
    let number = parseFloat(prompt("Enter any number"));
    arr1.push(number);
}

const counts = {}; //object literal
arr1.forEach((x) => counts[x] = (counts[x] || 0) + 1); // jeśli odwołuję się do właściwości poczatkowej (tj. 2), to w konsoli pojawi się undefined, bo za pierwszym razem jeszcze ta 2 się nie pojawiła. Ona dopiero się doda.
console.log(counts);

// 2nd method
const arr2 = [];
const tmp = [];

for (let i = 0; i < 10; i++) {
    let number = parseFloat(prompt("Enter any number"));
    arr2.push(number);
}

for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    let el = arr2[i];

    if (tmp.includes(el) === true) {
        continue;
    }

    for (let j = 0; j < arr2.length; j++) { // aby policzyć elementy
        if (arr2[j] === el) {
            count++;
        }
    }

    tmp.push(el);
    console.log("Element: " + el + " występuje " + count + " razy.");
}

