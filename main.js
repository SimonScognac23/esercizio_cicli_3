




let scelta; // Variabile per salvare la scelta dell'utente

while (true) { // Ciclo infinito finché non viene inserita una scelta valida

    scelta = Number(prompt("Inserisci un numero per selezionare una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra"));


    if (scelta == 1) {
        console.log("È stata selezionata l’acqua");
        break;

    } else if (scelta == 2) {
        console.log("È stata selezionata la Coca Cola");
        break;

    } else if (scelta == 3) {
        console.log("È stata selezionata la birra");
        break;  // break interrompe il ciclo

    } else {
        // promemoria.  alert In caso di scelta non valida, rimostra il prompt 
        alert(" scelta non valida, riprova");
    }
}







