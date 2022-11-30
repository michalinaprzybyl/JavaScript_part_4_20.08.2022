// Ćwiczenie 2: Pobierz tekst od użytkownika, a następnie wyświetl część tekstu, która występuje po pierwszej literze “a”.

let text = prompt("Enter any text");
let idx = text.indexOf("a");
console.log(text.substring(idx + 1));