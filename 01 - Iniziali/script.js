/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(array) {
    // Utilizzo map per creare un nuovo array contenente le iniziali
    return array.map(name => name[0].toUpperCase());
}

// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]