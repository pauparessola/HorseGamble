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
    const img = document.getElementById("imgResultat");
    img.src = ruta;
    img.style.display = "block";
}

// ---------------------------------------------------------------

console.log('Happy horse gambling!!!!!!!!!! ✨');

const caballoCount = [0,0,0,0,0];

// Inicialitzem els diners
let dinersPropis = 100;
mostrarDiners(dinersPropis);

// Declarem el Button i els RadioButtons
const botonApostar = document.getElementById('botonApostar');
const radios = document.querySelectorAll('input[name="opcio"]');
const texto = document.getElementById('textBox');

// Afegir listeners a cada opció dels RadioButtons
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        let apostaActual = parseFloat(radio.value);

        if (apostaActual <= dinersPropis && apostaActual > 0) {
            // Un cop s'ha fet una selecció, si hi ha un número vàlid es pot activar
            botonApostar.disabled = false;
        }
    });
});


// EventListener per la textbox per fer robust si el número introduit es vàlid
texto.addEventListener('change', () => {
    let apostaActual = parseFloat(radio.value);

    if (apostaActual <= dinersPropis && apostaActual > 0 && document.querySelector('input[name="opcio"]:checked') != null){
        // Si s'introdueix un número vàlid i s'ha fet una selecció es pot activar
        botonApostar.disabled = false;
    } else {
        botonApostar.disabled = true;
    }
})

// Apostar
botonApostar.addEventListener("click", () => {
    const checked = document.querySelector('input[name="opcio"]:checked'); //obtenir opció triada
    if (!checked) return;
    const cavallTriat = Number(checked.value); // Obtenir caval triat

    let status = document.getElementById("statusText"); // Pren el <p> de status
    let aposta = parseInt(document.getElementById("textBox").value); // Obtenim el valor de l'aposta

    console.log(cavallTriat);
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