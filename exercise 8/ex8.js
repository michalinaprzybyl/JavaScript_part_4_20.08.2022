// Ćwiczenie 8: Zaimplementuj asynchroniczne potęgowanie dwóch wartości i skonsumuj wynik.

const myPromise = new Promise((resolve, reject) => {
    resolve(5 ** 10);
});

myPromise.then((res) => { //konsumowanie promisa, czyli tego, co zosatnie u góry zwrócone
    console.log(res);
});