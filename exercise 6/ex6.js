// Ćwiczenie 6: Utwórzymy hierarchię klas
// a) zwierzę - nazwa, wielkość;
// b) latające, pływające, chodzące --> poruszSie metoda
// c) ptak, ryba, koń, krowa --> dajGlos
// d) utwórz  2 obiekty 

class Animal {
    constructor(nazwa, wielkość) {
        this.nazwa = nazwa;
        this.wielkość = wielkość;
    }
}

class flyingAnimal extends Animal {
    constructor(nazwa, wielkość) {
        super(nazwa, wielkość);
    }
    poruszSie() {
        console.log("I'm flying");
    }
}

class swimmingAnimal extends Animal {
    constructor(nazwa, wielkość) {
        super(nazwa, wielkość);
    }
    poruszSie() {
        console.log("I'm swimming");
    }
}

class walkingAnimal extends Animal {
    constructor(nazwa, wielkość) {
        super(nazwa, wielkość);
    }
    poruszSie() {
        console.log("I'm walking");
    }
}

class Bird extends flyingAnimal {
    constructor(nazwa, wielkość, speed) {
        super(nazwa, wielkość);
        this.speed = speed;
    }
    dajGlos() {
        console.log("Piu-piu");
    }
}

class Cow extends walkingAnimal {
    constructor(nazwa, wielkość, weight) {
        super(nazwa, wielkość);
        this.weight = weight;
    }
    dajGlos() {
        console.log("Muuuuuuuuuu!");
    }
}

const myAnimal1 = new Bird("Koliber", "small", "100km/h");
myAnimal1.dajGlos();
console.log(myAnimal1.speed);

const myAnimal2 = new Cow("Łaciata", "big", "10km/h");
myAnimal2.dajGlos();
console.log(myAnimal2.nazwa);