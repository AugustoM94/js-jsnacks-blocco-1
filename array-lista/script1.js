

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
     document.getElementById("Frigo").innerHTML = frigo.join(', ');
     console.log(frigo);
     
     let trovato = false;
     let msg;
     
     for (let i = 0; i < frigo.length; i++) {
       if (frigo[i] === 'cocomero') {
         trovato = true;
         msg = "Trovato! Devo solo preparare il cocktail.";
       } else {
         msg = "Oh no, devo uscire a comprare il cocomero!";
       }
     }
