var pokemon1 = {
    nombre: "wasi",
    velocidad: 55,
    ataque: 100,
    ataques: ["Arañazo", 
              "Lanzallamas", 
              "FalsoTortazo",
              "LanzaRocas"],
    vida: 500
}
var pokemon2 = {
    nombre: "juanillo",
    velocidad: 35,
    ataque: 120,
    ataques: ["MeteoroDraco", 
              "RocaAfilada", 
              "Triturar",
              "PulsoOrigen"],
    vida: 550,
}


///inicio del codigo de ejecucion
document.querySelector('#boton2').addEventListener('click', traerDatos);

function traerDatos(){


do{

    ///Apartado de los ataques aleatorios

 ///Wasi
var randomWasi = Math.floor(Math.random()*pokemon1.ataques.length);
var vari = pokemon1.ataques[randomWasi];

 ///Juanillo
var randomJuan = Math.floor(Math.random()*pokemon2.ataques.length);
var vari2 = pokemon2.ataques[randomJuan];

///Generar nivel de ataque

//Wasi 
let x = Math.floor((Math.random() * 200) + 1);
//Juanito
let z = Math.floor((Math.random() * 200) + 1);

///Generar turno
var num = Math.floor((Math.random() * 2) + 0); 
console.log("turno",num);

     if (num == 0 ) {
        //Golpe de Wasi
        pokemon2.vida = pokemon2.vida - x;
         console.log(
        "El ataque del wasi fue: ",
         vari,
         "Y el daño del ataque fue de: "
         + x,
        "la vida del juanillo es: ",
        pokemon2.vida
    )
    }else if(num == 1){
        //Golpe de Juanillo
        pokemon1.vida = pokemon1.vida - z;
       console.log(
        "El ataque de juanillo fue: ",
        vari2,
        "Y el daño del ataque fue de: "
         + z,
        "la vida de Wasi es de: ",
        pokemon1.vida
    )
    }

    ///HTML
    let DigimonBattle = '';
    DigimonBattle += `
                    <h2>El ataque de wasi fue: ${vari}</h2>
                    <h2>y el daño del ataque fue de:${x} </h2>
                    <h2>y la vida de juanillo es de: ${pokemon2.vida}</h2>

                    <h2>El ataque de juanillo fue: ${vari2}</h2>
                    <h2>y el daño del ataque fue de:${z} </h2>
                    <h2>y la vida de wasi es de: ${pokemon1.vida}</h2>
                    `
                     document.getElementById("container").innerHTML = DigimonBattle;
 
}while(pokemon1.vida >= 0 || pokemon2.vida >= 0)
if (pokemon1.vida <= 0 && pokemon2.vida <= 0) {
    alert("La batalla ha terminado. ¡ Dejalos en paz >:( !");
}
  }
  document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){


do{

    ///Apartado de los ataques aleatorios

 ///Wasi
var randomWasi = Math.floor(Math.random()*pokemon1.ataques.length);
var vari = pokemon1.ataques[randomWasi];

 ///Juanillo
var randomJuan = Math.floor(Math.random()*pokemon2.ataques.length);
var vari2 = pokemon2.ataques[randomJuan];

///Generar nivel de ataque

//Wasi 
let x = Math.floor((Math.random() * 200) + 1);
//Juanito
let z = Math.floor((Math.random() * 200) + 1);

///Generar turno
var num = Math.floor((Math.random() * 2) + 0); 
console.log("turno",num);

     if (num == 0 ) {
        //Golpe de Wasi
        pokemon2.vida = pokemon2.vida - x;
         console.log(
        "El ataque del wasi fue: ",
         vari,
         "Y el daño del ataque fue de: "
         + x,
        "la vida del juanillo es: ",
        pokemon2.vida
    )
    }else if(num == 1){
        //Golpe de Juanillo
        pokemon1.vida = pokemon1.vida - z;
       console.log(
        "El ataque de juanillo fue: ",
        vari2,
        "Y el daño del ataque fue de: "
         + z,
        "la vida de Wasi es de: ",
        pokemon1.vida
    )
    }

    ///HTML
    let DigimonBattle = '';
    DigimonBattle += `
                    <h2>El ataque de wasi fue: ${vari}</h2>
                    <h2>y el daño del ataque fue de:${x} </h2>
                    <h2>y la vida de juanillo es de: ${pokemon2.vida}</h2>

                    <h2>El ataque de juanillo fue: ${vari2}</h2>
                    <h2>y el daño del ataque fue de:${z} </h2>
                    <h2>y la vida de wasi es de: ${pokemon1.vida}</h2>
                    `
                     document.getElementById("container").innerHTML = DigimonBattle;
 
}while(pokemon1.vida >= 0 || pokemon2.vida >= 0)
if (pokemon1.vida <= 0 && pokemon2.vida <= 0) {
    alert("La batalla ha terminado. ¡ Dejalos en paz >:( !");
}
  }
  