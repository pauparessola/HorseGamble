"use strict";

function calculVelocitats(){
    let clauCaball = Math.floor(Math.random() * (10 ** 16));
    const velocitatsCaball = [];
    console.log(clauCaball);
    for (let i = 0; i < 5; i++) {
        velocitatsCaball[i] = Math.floor((clauCaball % (1000 ** (i + 1))) / (1000 ** (i)));
    }
    return velocitatsCaball;
}

function calculGuanyador(){
    let velocitats = calculVelocitats();
    let caballMax = 0;
    let velocidadMax = 0;

    for (let i = 0; i < 5; i++) {
        if (velocidadMax < velocitats[i]){
            velocidadMax = velocitats[i];
            caballMax = i;
        }
    }
    return caballMax;
}

function resultatsJoc(cavallTriat){
    let cavallGuanyador = calculGuanyador();
    caballoCount[cavallGuanyador] += 0;
    if (cavallGuanyador === cavallTriat){
        return true;
    }else{
        return false;
    }
}

function mostrarDiners(diners){
    const textMoneys = document.getElementById("moneys");
    textMoneys.textContent = diners+"💰";
}

function mostrarImatge(ruta) {
    img.src = ruta;
    img.style.display = "block";
}

// ----------------------------------------------------

console.log('Happy horse gambling!!!!!!!!!! ✨');

const caballoCount = [0,0,0,0,0];


let dinersPropis = 100;
mostrarDiners(dinersPropis);

const botonApostar = document.getElementById('botonApostar');
const radios = document.querySelectorAll('input[name="opcio"]');

// Afegir listeners a cada opció del radio
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        botonApostar.disabled = false;
    });
});

// Apostar
botonApostar.addEventListener("click", () => {
    const checked = document.querySelector('input[name="opcio"]:checked'); //obtenir opció triada
    if (!checked) return;
    const cavallTriat = Number(checked.value); // Obtenir caval triat

    let status = document.getElementById("statusText"); // Pren el <p> de status]
    let history = document.getElementById("statusHistory");
    const img = document.getElementById("imgResultat");

    let aposta = parseInt(document.getElementById("textBox").value);

    console.log(cavallTriat);

    //history.innerHTML += `\n Ha guanyat `

    console.log(`${dinersPropis} dinersPropis`);
    if (resultatsJoc(cavallTriat)) {
        dinersPropis = dinersPropis + aposta;
        status.textContent = `Siii has guanyat ${aposta} aposta mes!!!`;
        mostrarImatge('/frontend/images/celebration.jpeg');
    } else{
        dinersPropis = dinersPropis - aposta;
        status.textContent = `Nooo has perdut ${aposta} aposta mes!!!`;
        mostrarImatge('/frontend/images/disappointment.png');
    }
    console.log(`${dinersPropis} dinersPropis`);
    mostrarDiners(dinersPropis);
});