// Ćwiczenie 4: Napisz program “Książka telefoniczna”. Program umożliwia wyszukiwanie osób po pierwszej literze ich nazwiska. Minimum 5 osób. Jeżeli w książce nie istnieje osoba o nazwisku na daną literę to wyświetl odpowiedni komunikat.

class Person {
    constructor(name, surname, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
}

class PhoneBook {
    constructor(people) {
        this.people = people;
    }
    search(firstLetter) {
        let temp = false;
        for (let i = 0; i < this.people.length; i++) {
            if (firstLetter === this.people[i].surname[0]) {
                temp = true;
                console.log(this.people[i].surname + " " + this.people[i].phoneNumber);
            }
        }
        if (temp === false) {
            console.log("Error");
        }
    }
}

const tab = [ // tablica obiektów, czyli tab z obiektami w środku, tj. z danymi osób
    new Person("Anna", "Komorowska", "+48123456789"),
    new Person("Katarzyna", "Komorowska", "+48124456789"),
    new Person("Zbigniew", "Lewandowski", "+43123456789"),
    new Person("Łukasz", "Ciasteczko", "+48123456788"),
    new Person("Michalina", "Krupińska", "+38123466789")
];

const book = new PhoneBook(tab); // odwołuję się do obiektu w zmiennej book, wywołuję construktora i podstawiam pod people 'tab'
// console.log(book);

let question = prompt("Which person do you want to find - enter the first letter of his surname");

book.search(question);