/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10
let b = 3

if(a > b){
  console.log("Il numero più grande è " + a)
}else{
  console.log("Il numero più grande è " + b)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  const theNumber = 5
  let numeroFornito = 10

  if(theNumber === numeroFornito){
    console.log("equal")
  }else{
    console.log("not equal")
  }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if((numeroFornito % theNumber) == 0){
  console.log("divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 8
let d = 16

  if(c === 8 || d === 8){
    console.log("Uno dei valori è uguale a 8")
  }else if((c - d) === 8 || (d - c) === 8){
    console.log("Uno dei valori sottratto all'altro è uguale a 8")
  }else if((c + d) === 8 || (d + c) === 8){
    console.log("Uno dei valori sommato all'altro è uguale a 8")
  }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50
console.log(`Il totale del tuo carrello è ${totalShoppingCart}`)

if (totalShoppingCart > 50){
  console.log("SPEDIZIONE GRATIS")
}else{
  totalShoppingCart += 10
  console.log("SPEDIZIONE A PAGAMENTO FISSO")
}
console.log(totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart *= 0.8
console.log(`Il totale del tuo carrello è ${totalShoppingCart}, abbiamo applicato uno sconto!`)

if (totalShoppingCart > 50){
  console.log("SPEDIZIONE GRATIS")
}else{
  totalShoppingCart += 10
  console.log("SPEDIZIONE A PAGAMENTO FISSO")
}
console.log(totalShoppingCart)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let a = 10
let b = 20
let c = 30

console.log(a, b, c)

        if (a > b && a > c){if (b>c){
            console.log(a, b, c);
        }else{
            console.log(a, c, b);
        }}else if (b > a && b > c){
            if (a>c)
        {
             console.log(b + a + c);
        }
        else
        {
             console.log(b, c, a);
        }}else if (c > a && c > b){
        if (a>b){
            console.log(c, a, b);
        }else{
            console.log(c, b, a);
        }}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 55
console.log(typeof n)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 8 
if (number % 2 === 0){
  console.log("PARI")
}else{
  console.log("DISPARI")

}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val > 5) {
    console.log("Maggiore di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me)


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let theArrey = []
theArrey.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(theArrey)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
theArrey[9] = 100
console.log(theArrey)
