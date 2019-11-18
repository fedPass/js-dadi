// alert('prova');
// Generare un numero casuale tra 1 e 6.
var numeroBanco = Math.floor(Math.random() * 6) + 1;
console.log('Numero banco: ' + numeroBanco);
// Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
var numeroUtente = parseInt(prompt ('Digita un numero tra 1 e 6'));
if(isNan(numeroUtente)) {
    console.log('Non hai inserito un numero');
} else if (numeroUtente < 1 || numeroUtente > 6) {
    console.log('Non hai inserito un numero tra 1 e 6');
} else {
    console.log('Numero utente: ' + numeroUtente);
    if (numeroBanco < numeroUtente) {
        console.log('Ha vinto!!!');
    } else if (numeroBanco > numeroUtente) {
        console.log('Ha perso!!!');
    } else {
        console.log('Parità!!!');
    }
}
// Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).
