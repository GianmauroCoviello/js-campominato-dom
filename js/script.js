
// FUNZIONE CHE CREA IL QUADRATINO ALL'INTERNO DEL DOM
function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
            
    return square
}



// function randomBombs(min, max) {

//     return Math.floor(Math.random()*(max - min +1)+min)
    
// }

// console.log(randomBombs(1,16))


console.log(createSquare())
// VARIABILE CHE INSERISCA LA GRIGLIA ALL' INTERNO DEL DOM
let button = document.getElementById('riproduci')

// EVENTLISTENER AL BUTTON PER RIPRODURRE AL SUO CLICK LA GRIGLIA CON I QUADRATINI
button.addEventListener('click', function() {
    
    let grid = document.getElementById('grid')
    // VARIABILE CHE DEFINISCA IL NUMERO DI QUADRATINI(SOSTITUIAMO NEL CICLO LA LENGTH CON QUESTO VALORE COSI CHE POSSIAMO SUDDIVIDERLO IN BASE AL NUMERO DI QUADRATINI RICHIESTI DALLE OPTION)
    let numberSquare = 0

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
    
   
    // CICLO FOR INSERITO PER CICLARE I QUADRATINI
    for (i =0; i < numberSquare ; i++) {
        // VARIABILE CHE RIPRENDE LA FUNZIONE 
        let square = createSquare()

        // VARIABILE CON UNA PROPRIETA CHE DEFINISCE LA RADICE QUADRATA DEL NUMERO DI RIFERIMENTO
        let radiceSquare = Math.sqrt(numberSquare)

        square.style.width =  `calc(100% / ${radiceSquare}) `
        square.style.height = `calc(100% / ${radiceSquare}) `
        // VARIABILE CHE INNIETTA GLI INDICI NUMERICI DEL CICLO ALL'INTERNO DEI QUADRATINI
        square.innerText = i + 1

        // ADDEVENTLISTENER ALLA CLASSE SQUARE PER FAR CAMBIARE E RIMUOVERE IL COLORE AI QUADRATINI
        square.addEventListener('click', function(){
            // FUNZIONI CHE AGGIUNGONO E TOLGONO LA CLASSE PER IL COLORE AI QUADRATINI('SQUARE') 
            this.classList.toggle('click-color')
            // console.log per riuscire a dare il numero esatto del quadratino in cui ci troviamo
            console.log(this.innerText)
                
            
        })

        
            
        // APPEND ALLA GRIGLIA PER INSERIRE AL SUO INTERNO LA CLASSE SQUARE CHE SAREBBERO I QUADRATINI
        grid.append(square)

        button.addEventListener('click', function(){
            square.classList.add('none')


        })

        





            

        

        

        
}
       
})


