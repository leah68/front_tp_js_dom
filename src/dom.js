// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
document.bgColor = "#992323";

// Changez la couleur du texte du body en #fff
document.body.style.color = "#fff";

// Supprimez la ligne suivante
// var workspace = null;
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
var workspace = document.getElementById("workspace");

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
console.log(workspace.childElementCount);

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
// var p = null;
// Affectez le résultat à la variable p
var p = workspace.firstElementChild;
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
var h3 = document.createElement("h3");
h3.innerHTML = "Hello JS World!";
workspace.insertBefore(h3, p);

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
var div = document.createElement("div");
div.id = "counter";
workspace.insertBefore(div, p);

var cpt = 10;
var x ;
function runChrono(/* votre code */) {
  if(cpt>=1){
    document.getElementById("counter").innerHTML = cpt + " secondes";
    cpt--; // décrémente le compteur
    x = setTimeout("runChrono()",1000) ;
  } else {
    clearTimeout(x) ;
  }
}

console.log(runChrono(/* votre code */));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
var button = document.createElement("button")
button.innerHTML = "Start countdown";
workspace.insertBefore(button, counter);

button.addEventListener("click", function(){
  runChrono(cpt=10);
})