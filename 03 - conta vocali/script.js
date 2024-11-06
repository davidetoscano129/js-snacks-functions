/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
    // Definisco questo array per indicare le vocali di riferimento
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Array per raccogliere le vocali trovate
    const foundVowels = [];

    // Ciclo per verificare ogni carattere nella stringa
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    // Restituisce il numero di vocali e le vocali trovate
    return {
        count: foundVowels.length,
        vowels: foundVowels
    };
}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(`Numero di vocali: ${result.count} (${result.vowels.join(', ')})`);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)