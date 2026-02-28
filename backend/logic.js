function ola(){
    console.log("ola");
}

function botonApostarEnable(botonApostar){

    console.log("Boton ApostarEnable");
    botonApostar.disabled = false;
}

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
    let caballMax;
    let velocidadMax = 0;

    for (let i = 0; i < 5; i++) {
        if (velocidadMax < velocitats[i]){
            velocidadMax = velocidats[i];
            caballMax = i;
        }
    }
    return caballMax;
}

function resultatsJoc(cavallTriat){
    let cavallGuanyador = calculGuanyador();
    if (cavallGuanyador == cavallTriat){

    }else{

    }
}
