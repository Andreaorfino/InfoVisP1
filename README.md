# InfoVisP1
progetto numero uno del corso di Visualizzazioni delle informazioni su web

## Specifiche
Disegna 10 piccole farfalline (è sufficiente la silhouette) posizionate sullo schermo in posizioni casuali. Quando con la tastiera si compone la lettera "c" le farfalle si muovono sullo schermo andando a posizionarsi in maniera tale che l'utente legga in successione le lettere "c", "i", "a" e "o". La descrizione delle posizioni delle farfalline per ogni lettera dell'alfabeto (delle quattro previste) è codificata in un file json. Fai in modo che le trasformazioni siano fluide e continue e non a salti.

## Struttura del progetto
```
│   index.html
├───css
│       style.css
├───data
│       position.json
└───script
        d3-farfalle.js
```

* All'interno di `/script/d3-farfalle.js` è presente il codice che sfrutta D3.js per soddisfare le specifiche
* Dentro `/data/position.json` sono presenti le coordinate della posizioni che devono assumere le farfalle per comporre le lettere

## Funzionamento
Appena caricata la pagina mostrerà le dieci farfalle disposte casualmente sullo schermo, la forma delle farfalle è stata ottenuta con un path svg. Alla pressione della lettera 'c' sulla tastiera si attiverà un event listener che chiamerà la funzione `drawCiao(data)`, funzione che andrà a leggere il file json con la sequenza di posizioni che devono assumere le farfalle per comporre la parola "ciao".