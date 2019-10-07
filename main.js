/* ESERCIZIO: Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero consentito. */


// Dichiarazione variabili globali
var numUtente;

var arrayVietato = [];



// Generazione di 16 numeri casuali da 1 a 100
function NumVietati(max, min) {
  var risultato = Math.floor(Math.random() * (max - min + 1) + min);
  return risultato;
}

// Ciclo while che genera 16 numeri casuali inseriti in un array
i = 0;
while (i < 16) {
  var numRandom = NumVietati(100, 1);
  var array16 = arrayVietato.indexOf(numRandom);
  if (array16 < 0) {
    arrayVietato.push(numRandom);
    i++;
  }
}
console.log(arrayVietato);


var messaggio = "hai perso!"

// Chiedere all'utente di inserire un numero da 1 a 100 alla volta

for (var i = 0; i < 84; i++) {
  numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log("num inserito: " + numUtente);

  switch (numUtente === arrayVietato[i]) {
    case 1:
      messaggio
      break;
  }
}



var dadosvoz = "testandohacktobest"




// se numero utente === numero casuale generato --> fine partita altrimenti continua



// Comunicare il punteggio all'utente
