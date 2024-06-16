// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.







// seleziono il bottone Genera-griglia
const bt = document.getElementById("genera-griglia");
// seleziono il container che conterra le celle
const container = document.querySelector(".container");
// seleziono il punteggio del gioco
const score = document.getElementById("score");


document.getElementById('genera-griglia').addEventListener('click', () => {

    container.innerHTML = "";
    score.textContent = "0";

    const bombe = generaNumeriCasuali(16, 1, 100);
    console.log("Bombe: ", bombe);

    // generare 100 celle e aggiungerle al container
    for (let i = 1; i <= 100; i++){
        // creo elemento (div)
        const cella = document.createElement("div");
        // aggiungo al elemento (div) la classe (cella)
        cella.classList.add("cella");
        container.append(cella);
        cella.textContent = [i];

         // Evento al click della cella
        cella.addEventListener('click', () => {
            if (bombe.includes(i)) {
                cella.classList.add('bomba');
                alert('Hai calpestato una bomba! Fine del gioco.');
                // Rende tutte le celle non cliccabili
                const tutteLeCelle = document.querySelectorAll('.cella');
                tutteLeCelle.forEach(c => c.style.pointerEvents = 'none');
            } else {
                cella.classList.add('sicura');
                // Incrementa il punteggio
                let currentScore = parseInt(score.textContent);
                score.textContent = currentScore + 1;
            }
            console.log(`Hai cliccato sulla cella numero ${i}`)
    });
}
});
