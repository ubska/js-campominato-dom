// // // funzione che genera numeri(interi) random
//  function getRandomNumber(min, max) {
//      return Math.floor(Math.random() * (max - min + 1)) + min;
//  }


// // funzione che genera un array con numeri random
// function genSequenzaNumRandomRange(min, max) {
//     const arrToGen = [];

//     while (arrToGen.length < 100) {
//         let newRandomNum = getRandomNumber(1, 100);

//         if (!arrToGen.includes(newRandomNum)) {
//             arrToGen.push(newRandomNum);
//         }
//     }
//   return arrToGen
// }

// Funzione per generare numeri casuali
function generaNumeriCasuali(numero, min, max) {
    const numeriCasuali = [];
    while (numeriCasuali.length < numero) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numeriCasuali.includes(random)) {
            numeriCasuali.push(random);
        }
    }
    return numeriCasuali;
}