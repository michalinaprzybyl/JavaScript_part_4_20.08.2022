// Ćwiczenie 7: Utwórz object constructor Queue, czyli zaimplementuj strukturę danych kolejki.
// - Enqueue - dodaje na koniec kolejki
// - Dequque - usuwa element z początku kolejki i go zwraca

class Queue {
    constructor() {
        this.tab = [];
    }
    enqueue(item) {
        this.tab.push(item);
    }
    dequeue() {
        return this.tab.shift();
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue()); // teraz w tab zostaje tylko 3 i 4, a w konsoli wyświetla się 1 i 2, bo dequeue ma za zadanie zwrócić to, co usunięte z taba
