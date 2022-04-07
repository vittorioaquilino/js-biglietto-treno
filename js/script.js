// Chiedere all'utente i km da percorrere
const travelKm = parseInt(prompt("Quanti chilometri vuoi percorrere"));
console.log(travelKm);

// Chiedere all'utente l'età
const userAge = parseInt(prompt("Quanti anni hai"));
console.log(userAge);

// Calcolare il prezzo totale del viaggio
    // -prezzo del biglietto 0.21€ al km
const priceTiket = travelKm * 0.21;
console.log(priceTiket);

// Calcolare lo sconto in base al passeggero
let discount;

if (userAge < 18) {
    discount = (priceTiket * 20 / 100);  
} else if (userAge > 65) {
    discount = (priceTiket * 45 / 100);
} else {
    discount = "Non c'è nessuno sconto da applicare"
}
console.log(discount);

// Sottrarre lo sconto dal prezzo intero
let discountedPrice; 

if (userAge < 18) {
    discountedPrice = priceTiket - discount;
} else if (userAge > 65) {
    discountedPrice = priceTiket - discount;
}
console.log(discountedPrice);

const message = `il prezzo del biglietto è di : $(discountedPrice)`;
// Stampare il prezzo finale in html
document.getElementById('price').innerHTML = message;



