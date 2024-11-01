/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

//output = tariffa;
//output = prezzoFinale;
"use strict"

const prezzoKm = 0.21;
const scontoJunior = 20;
const scontoSenior = 40;
const juniorAge = 17;
const seniorAge = 65;
let sconto;

const km = parseInt(prompt("Quanti km vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni ha il passeggero?"));
let tariffa = km * prezzoKm;
console.log(tariffa.toFixed(2));

if(age <= juniorAge){
    sconto = tariffa * 20 / 100;
}
else if(age >= seniorAge){
    sconto = tariffa * 40 / 100;
}
else {
    sconto = 0;
}

const prezzoFinale = tariffa - sconto;
console.log(prezzoFinale.toFixed(2));
console.log("Il prezzo finale del tuo biglietto è: " + prezzoFinale.toFixed(2));