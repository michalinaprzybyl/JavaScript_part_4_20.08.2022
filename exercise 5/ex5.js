// Ćwiczenie 5: Napisz program “Sklep internetowy”. Program powinien umożliwiać wyświetlenie listy produktów wraz z ich ceną, dodanie produktu do koszyka, a następnie zakup produktów. Wszystkie akcje wykonujemy za pomocą odpowiednich komunikatów na konsoli. Minimum 5 produktów w sklepie. 

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    text() {
        return "Nazwa: " + this.name + ", Cena: " + this.price + " zł";
    }
}

class Shop {   // to jest tablica klasy PRODUCT
    constructor(products) {
        this.products = products;
        this.cart = []; // tworzę koszyk, który na początku jest pusty
    }
    listOfProducts() { // metoda odpowiada za wyświetlenie wszystkich produktów w sklepie
        for (let i = 0; i < this.products.length; i++) { // szukam gdzie są moje produkty, bo po nich się będę iterować,
            console.log(this.products[i].text());
        }
    }
    addToCart(productToAdd) { // metoda odpowiada za dodanie produktów do koszyka
        this.cart.push(productToAdd);
        console.log("Dodano do koszyka " + productToAdd.text());
    }
    buy() {  //zakupy mają zerować koszyk i wyświetlać "kupiono" + to, co było w koszyku
        for (let i = 0; i < this.cart.length; i++) {
            console.log("Zakupiono " + this.cart[i].text());
        }
        this.cart = [];  // koszyk robi się pusty
    }
}

const tab = [
    new Product("piłka", "5"),
    new Product("skarpetki", "10"),
    new Product("hulajnoga", "665"),
    new Product("lalka", "29"),
    new Product("gra planszowa", "89")
]

const shop = new Shop(tab);  //tu shop jest obiektem klasy Shop

shop.listOfProducts();
shop.addToCart(tab[2]);
shop.addToCart(tab[0]);
shop.addToCart(tab[4]);
shop.buy();