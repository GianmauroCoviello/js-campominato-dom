
// FUNZIONE CHE CREA IL QUADRATINO ALL'INTERNO DEL DOM
function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
            
    return square
}



function randomBombs(min, max) {

    return Math.floor(Math.random()*(max - min +1)+min)
    
}

function punteggioSquare(x, y) {

    let somma = x - y
    return somma
    
}

   


// VARIABILE CHE INSERISCA LA GRIGLIA ALL' INTERNO DEL DOM
let button = document.getElementById('riproduci')

// EVENTLISTENER AL BUTTON PER RIPRODURRE AL SUO CLICK LA GRIGLIA CON I QUADRATINI
button.addEventListener('click', function() {
    
    let grid = document.getElementById('grid')
    // VARIABILE CHE DEFINISCA IL NUMERO DI QUADRATINI(SOSTITUIAMO NEL CICLO LA LENGTH CON QUESTO VALORE COSI CHE POSSIAMO SUDDIVIDERLO IN BASE AL NUMERO DI QUADRATINI RICHIESTI DALLE OPTION)
    let numberSquare = 0


    let punteggio = 0

    numberSquare = parseInt(document.getElementById('level-difficulty').value);
    // SWITCH PER SUDDIVIDERE IL NUMERO DI QUADRATINI IN BASE ALLE OPTION DELLA SELECT CHE RICHIEDE UN NUMERO SPECIFICO
    switch (numberSquare) {
        case 1:
            numberSquare= 100
            break;
        case 2:
            numberSquare= 81
            break;
        case 3:
            numberSquare= 49
            break;
        default:
            break;
    }
    console.log(randomBombs(1, numberSquare))

    let bombs = [];

    for (i = 0; i < 16 ; i++) {
        let numberBombs = randomBombs(1, numberSquare)
        bombs.push(numberBombs)

        
        
        
    }
    console.log(bombs)
    

    
    // CICLO FOR INSERITO PER CICLARE I QUADRATINI
    for (i =0; i < numberSquare ; i++) {
        // VARIABILE CHE RIPRENDE LA FUNZIONE 
        let square = createSquare(bombs)

        
   

        // VARIABILE CON UNA PROPRIETA CHE DEFINISCE LA RADICE QUADRATA DEL NUMERO DI RIFERIMENTO
        let radiceSquare = Math.sqrt(numberSquare)


        square.style.width =  `calc(100% / ${radiceSquare}) `
        square.style.height = `calc(100% / ${radiceSquare}) `
        // VARIABILE CHE INNIETTA GLI INDICI NUMERICI DEL CICLO ALL'INTERNO DEI QUADRATINI
        square.innerText = i + 1

        let result = (punteggioSquare(numberSquare, 16))
        console.log(result)

        // ADDEVENTLISTENER ALLA CLASSE SQUARE PER FAR CAMBIARE E RIMUOVERE IL COLORE AI QUADRATINI
        square.addEventListener('click', function(){
            // FUNZIONI CHE AGGIUNGONO E TOLGONO LA CLASSE PER IL COLORE AI QUADRATINI('SQUARE') 
    
            // console.log per riuscire a dare il numero esatto del quadratino in cui ci troviamo
            // console.log(this.innerText)
            if (!bombs.includes(parseInt(this.innerText))) {
                this.classList.add('click-color')
                punteggio++

            }else if (punteggio === result) {
                // alert( `HAI VINTO, HAI TOTALIZZATO UN PUNTEGGIO PARI A: ${punteggio} `)
                alert('HAI VINTO')
                console.log(result)
            } else{
                this.classList.add('click-bombs')
                alert( `OPSS.... HAI PERSO, HAI TOTALIZZATO UN PUNTEGGIO PARI A: ${punteggio} `)
    
            }
            console.log(punteggio) 

                
                
                   
            // } else{
            //     this.classList.add('click-bombs')
            //     alert( `OPSS.... HAI PERSO, HAI TOTALIZZATO UN PUNTEGGIO PARI A: ${punteggio} `)

            // }
            // console.log(punteggio) 
            
        })

        
            
        // APPEND ALLA GRIGLIA PER INSERIRE AL SUO INTERNO LA CLASSE SQUARE CHE SAREBBERO I QUADRATINI
        grid.append(square)

        button.addEventListener('click', function(){
            square.classList.add('none')


        })

        

      
}
       
})


