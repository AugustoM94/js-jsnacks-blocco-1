/* Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!" */

   const frigo = [
      'banana',
      'mela',
      'pera',
      'ciliegia',
      'arancia',
      'mandarino',
      'cocomero',
      'limone',
      'fragola',
  
     ]
  
     frigo.push('pesca');
     document.getElementById("Frigo").innerHTML = frigo;
     console.log(frigo)
     let trovato = false
     let = msg;
  
     if (i = 0; i < frigo.length; i++) {
       let cocomero = frigo.length[i];
        trovato = true;
        msg = "Trovato! Devo solo preparare il cocktail."
     } else  {
          msg = "Oh no, devo uscire a comprare il cocomero!"
     }

 