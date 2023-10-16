


/*Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli 
elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array*/

// Chiediamo all'utente quanti elementi dovrà contenere l'array
/* let numElementi = parseInt(document.getElementById('num').value);

// Verifichiamo se l'input dell'utente è un numero valido
if (isNaN(numElementi) || numElementi <= 0) {
  alert("Inserisci un numero valido superiore a 0.");
} else {
  // Creiamo l'array con numeri casuali da 1 a 100
  const array = [];
  for (let i = 0; i < numElementi; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  // Stampiamo gli ultimi 5 elementi dell'array
  const ultimi5Elementi = array.slice(-5);
  console.log("Gli ultimi 5 elementi dell'array sono:", ultimi5Elementi);

  // Chiediamo all'utente quanti di questi elementi vuole stampare
  const numElementidaStampare = parseInt(document.getElementById('num').value);

  if (!isNaN(numElementiDaStampare) && numElementiDaStampare >= 1 && numElementiDaStampare <= 5) {
    const elementiDaStampare = ultimi5Elementi.slice(0, numElementiDaStampare);
    console.log("Gli ultimi", numElementiDaStampare, "elementi dell'array sono:", elementiDaStampare);
  } else {
    console.log("Inserisci un numero valido tra 1 e 5.");
  }
}
 */
let generaArray = document.getElementById('GeneraArray');
let stampaNumeri = document.getElementById('stampaNumeri');
let arrayGenerato = [];

generaArray.addEventListener('click', function () {
    const numElementi = parseInt(document.getElementById('numElementi').value);

    if (isNaN(numElementi)) {
        alert("Inserisci un numero valido.");
    }

    arrayGenerato = [];
    for (let i = 0; i < numElementi; i++) {
        arrayGenerato.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById('risultato').innerHTML = "Array generato: " + arrayGenerato;
})

stampaNumeri.addEventListener('click', function () {
    const numStampa = parseInt(document.getElementById('numStampa').value);

    if (isNaN(numStampa) || numStampa <= 0) {
        alert("Inserisci un numero valido e maggiore di 0.");
}

    const ultimiNumeri = arrayGenerato.slice(-numStampa);
    document.getElementById('risultato').innerHTML = "Ultimi " + numStampa + " elementi dell'array: " + ultimiNumeri;
})


