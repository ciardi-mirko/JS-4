function divisori(){
    
    let divisori = [];
    
    let ris = document.getElementById("risultato");
    
    let numero;
    numero = document.getElementById("input").value;
    numero = parseInt(numero);

    
    const elemento = document.getElementById("spinner");
    elemento.classList.add("loading");

    if(numero == 0){
        ris = "il numero 0 non ha divisori"
        risultato.innerHTML = ris; 
    } else {

      divisori.push(1);

        for(let i = 2; i <= numero/2; i++){

            if(numero % i == 0){
                divisori.push(i);
        
            }   
        }
        divisori.push(numero);

    

    }

    if(divisori.length == 2){
        ris = "i divisori sono "+ divisori.length +"\n il numero e primo"
    
        risultato.classList.add("primo");
    } else {
        ris = "i divisori sono "+ divisori.length +"\n"+ divisori.join(" - ");
        risultato.classList.add("noPrimo")
    }


    risultato.innerHTML = ris; 

}

    

    
    


