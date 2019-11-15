// alert('prova');
// Generare un numero casuale tra 1 e 6.
var numeroBanco = Math.floor(Math.random() * 6) + 1;
console.log(numeroBanco);
// Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
var numeroUtente = prompt ('Digita un numero');
console.log(numeroUtente);
// Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).
if (numeroBanco < numeroUtente) {
    console.log('Ha vinto!!!');
} else if (numeroBanco > numeroUtente) {
    console.log('Ha perso!!!');
} else {
    console.log('Parità!!!');
}
