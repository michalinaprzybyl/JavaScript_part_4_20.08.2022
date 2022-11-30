// Promise
// 1st example
const myPromise1 = new Promise((resolve, reject) => {
    for (let i = 0; i < 100000; i++) {
        console.log(i);
    }
    resolve("Wynik zadania");
});

myPromise1.then((res) => { // res to wartość, którą przekazujemy w momencie wywołania resolve
    console.log("Zakończyłam");
})

console.log("KONIEC");

// // 2nd example
const myPromise2 = new Promise((resolve, reject) => {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    reject("Wynik zadania");
});

myPromise2.then((res) => { // res to wartość, którą przekazujemy w momencie wywołania resolve
    console.log("SUKCES");
}, () => {
    console.log("Error");
})

console.log("KONIEC");

// // 3rd example
const myPromise3 = new Promise((resolve, reject) => {
    resolve("0");
});

myPromise3
    .then((res) => res + "1")
    .then((res1) => res1 + "2")
    .then((res2) => res2 + "3")
    .then((res3) => console.log(res3))
    .catch(() => console.log("ERROR"));
