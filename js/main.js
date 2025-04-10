/*

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
*/

//FORM
const generateTicket = document.getElementById("generate-ticket");
//KM
const kmUserElement = document.getElementById("km-user");
//AGE
const ageUserElement = document.getElementById("age-user");

//INFO

//Km
const kmInfoElement = document.getElementById("km-info");
//Age
const ageInfoElement = document.getElementById("age-info");
//Price
const priceInfoElement = document.getElementById("price-info");
//Sconto
const scontoInfoElement = document.getElementById("sconto-info");

console.log(kmInfoElement);
console.log(ageInfoElement);
console.log(priceInfoElement);

generateTicket.addEventListener("submit", function (e) {
  e.preventDefault();

  //INFO DI DEFAULT
  const ticketPriceKm = 0.21;
  const discountUnder = 20;
  const discountOver = 40;

  // INPUT
  const kmUser = parseFloat(kmUserElement.value);
  const ageUser = parseInt(ageUserElement.value);
  let ticketPrice = ticketPriceKm * kmUser;

  let discount = 0;

  if (ageUser < 18) {
    discount = (ticketPrice * discountUnder) / 100;
  } else if (ageUser >= 65) {
    discount = (ticketPrice * discountOver) / 100;
  }

  ticketPrice -= discount;
  console.log(ticketPrice);

  const ticketPriceFormatted = ticketPrice.toFixed(2);
  console.log(`Il prezzo del biglietto è ${ticketPriceFormatted}€`);

  //OUTPUT
  kmInfoElement.innerHTML = kmUser;
  ageInfoElement.innerHTML = ageUser;
  priceInfoElement.innerHTML = ticketPriceFormatted;
  scontoInfoElement.innerHTML = "Sconto applicato: ${discount}";
});
