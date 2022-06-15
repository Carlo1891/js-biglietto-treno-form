/**
 * Scrivere un programma che chieda all’utente:
 * Il numero di chilometri da percorrere
 * Età del passeggero
 * Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 * il prezzo del biglietto è definito in base ai km (0.26 € al km)
 * va applicato uno sconto del 15% per i minorenni
 * va applicato uno sconto del 35% per gli over 65.
 * MILESTONE 1:
 * Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
 * MILESTONE 2:
 * Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */

 const distance = parseInt (prompt ('Inserire km totali viaggio (tariffa base 0.26€/km)'));
 const age = parseInt (prompt ('Inserire l\'età passeggero'));
 
 let message;
 
 let price = distance * 0.21;
 
 // console.log (priceTicket) per visualizzare prezzo
 
 
 
 if (age < 18) {
     price = price - ((price * 15)/ 100);
     message = 'Essendo minorenne hai diritto al 20% di sconto, quindi ';
 } 
 else if (age >= 64) {
     price = price - ((price * 35)/ 100);
     message = 'Hai diritto al 40% di sconto, quindi ';
 } else {
     message = "Il costo è ";
 }
 
 message = message + price.toFixed(2) + "€";
 
//  document.getElementById('ticket-final-price').innerHTML += `<br>${message}`;
 
 console.log (message);

