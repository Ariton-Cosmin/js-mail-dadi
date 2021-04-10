// creare un array di email
var emails = ["cosmin@gmail.com", "iris@gmail.com", "angelo@gmail.com"];
var email_utente = prompt("Inserisci email");
var email_trovata = false;

// cerco nella lista se l'email esiste
for (i = 0; i < emails.length; i++) {
    var this_email = emails[i];
    if (this_email === email_utente) {
        email_trovata = true;
    }
}

// in base al risultato genero un output
if (email_trovata) {
    console.log("Puoi accedere");
} else {
    console.log("Non puoi accedere");
}