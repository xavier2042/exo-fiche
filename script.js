// var calcul= 10;
// alert(calcul); // 10
//
// calcul= calcul /2;
// alert(calcul); // 5
//
// calcul= calcul*3;
// alert(calcul); // 15

// alert("La fonction compteur est bien là !!! ");


// function compteur(){
//
// var toto = document.getElementById("pCpt");
// var nombre = parseInt(toto.innerHTML);
//
// toto.innerHTML= nombre + 1;
//
// }

function afficherPhoto(obj){
  console.log("Fonction afficher photo appelée");

  if (obj.className == "zoom"){ //Si l'image est grossie
    obj.className ="";
  }
  else{                         // Sinon l'image est Normale
    obj.className = "zoom";
  }
}
