// generazione di numeri random
var num_utente = Math.ceil(Math.random() * 6);
console.log("giocatore1 : " + num_utente);

var num_computer = Math.ceil(Math.random() * 6);
console.log("giocatore2 : " + num_computer);

// condizioni per la vincita o il pareggio
if (num_utente > num_computer) {
    console.log("hai vinto!")
} else if (num_utente < num_computer) {
    console.log("hai perso!")
} else {
    console.log("pareggio!")
}