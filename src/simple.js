// Créez un objet avec une propriété de votre choix
// Ajoutez dans un second temps une propriété de type booléen
// Retournez l'objet
function createObject() {
	var unObjet = new Object();
	unObjet.chiffre = 2;
	unObjet.booleen = true;
	return unObjet;
}

console.log(createObject());

// Retournez un objet avec trois propriétés :
// - val1: la valeur du paramètre v1
// - absVal2: la valeur absolue du paramètre v2
// - somme de v1 et v2
function additionObject(v1, v2) {
	let val1 = v1;
	let absVal2 = Math.abs(v2);
	let somme = val1 + absVal2
	return somme;
}

console.log(additionObject(2, 6));
console.log(additionObject(-5, -10));

// Retournez un tableau avec uniquement des nombres impairs supérieurs à 0
// Si le tab passé en paramètre est null, retournez un tableau vide
function removeEvenNumbers(tab) {
	if(tab != null){ 
		for (var i = 0; i < tab.length; i++) { 
			if (tab[i] % 2 === 0 && tab[i] > 0) { 
				return tab;
			} 
		}
	} else {
		tab = [];
		return tab;
	}
}

console.log(removeEvenNumbers([]));
console.log(removeEvenNumbers(null));
console.log(removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]));

// Complétez la fonction testNumNeg qui retourne vrai si au
// moins un élément du tableau en entrée est un nombre et
// qu'il a une valeur négative
function testNumNeg(tab) {
	for (var i = 0; i < tab.length; i++) {
		// console.log(tab[i])
		if(!isNaN(tab[i]) && tab[i] < 0){
			return true;
		}
	}
}

console.log(testNumNeg([1, "kiwi", true, -2]));
console.log(testNumNeg([0, "orange", false])); //renvoie undefined
console.log(testNumNeg([0, 4, 8])); //renvoie undefined

// Complétez la fonction ci-dessous pour retourner un
// tableau contenant la table de multiplication (jusqu'à 10 inclus)
// du nombre passé en paramètre, par exemple :
// n = 5 : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function multTable(n) {
	tab = [];

	for (var i = 0; i <= 10; i++) {
		resultat = n*i;
		tab.push(resultat);
	}
	return tab;
}

console.log("Table de multiplication de 1", multTable(1));
console.log("Table de multiplication de 5", multTable(5));

// En utilisant une boucle et la fonction précédente,
// retournez un tableau contenant toutes les tables de multiplication
// (jusqu'à 10 inclus) pour les nombres allant de 0 à la valeur d'un
// paramètre max (inclus)
function multTables(max) {
	tab = [];
	for (var i = 0; i <= max; i++) {
		console.log(max);
		for (var j = 0; j <= 10; j++) {
			resultat = i*j;
			tab.push(resultat);
		}
	}
	return tab;
}

console.log(multTables(5));

const products = [
	{
		model: "Xiaomi Mi 9",
		size: "74.7 mm X 157.5 mm X 7.6 mm",
		weight: "173"
	},
	{
		model: "Samsung Galaxy A21",
		size: "75.3 mm X 163.7 mm X 9.0 mm",
		weight: "192"



	}
];

// Modifiez la fonction pour qu'elle compte le nombre de caractères
// de chaque string contenu dans l'objet passé en paramètre (excluez les espaces)
// Remplacez chaque chaîne par sa taille uniquement dans le contexte de la fonction
// Le console.log suivant l'appel à la fonction howLongIsIt fonction doit toujours
// afficher l'objet de base
// Vous ne devez pas créer d'objet à l'intérieur de la fonction,
// ni utiliser de variable globale
function howLongIsIt(obj) {

	// console.log(obj.model.length);
	var ObjModel = obj.model.toString();
	var objm = ObjModel.split(' ').join('');
	console.log("le nombre de caractère du modèle est : " + objm.length);

	var ObjSize = obj.size.toString();
	var objs = ObjSize.split(' ').join('');
	console.log("le nombre de caractère de la taille est : " + objs.length);

	var ObjWeight = obj.weight.toString();
	var objw = ObjWeight.split(' ').join('');
	console.log("le nombre de caractère du poids est : " + objw.length);
}


// Vous devriez avoir à modifier cette ligne...
let newProduct0 = howLongIsIt(products[0]);
console.log(products[0]);
/* doit afficher :
{
	model: "Xiaomi Mi 9",
	size: "74.7 mm X 157.5 mm X 7.6 mm",
	weight: "173"	
}
*/
console.log(newProduct0);
/* doit afficher :
{
	model: 11,
	size: 27,
	weight: 3
}
*/
// PAS COMPRIS


// Complétez votre code avec une fonction transformant tous les objets
// compris dans le tableau passé en paramètre de la même manière que précédemment
function howLongIsItTab(tab) {
		for (var i = 0; i < tab.length; i++) {
		var prod = tab[i].model.toString();
		var prodModel = prod.split(' ').join('');

		var prodS = tab[i].size.toString();
		var prodSize = prodS.split(' ').join('');

		var prodW = tab[i].weight.toString();
		var prodWeight = prodW.split(' ').join('');

		console.log("nombre de caractère model : " + prodModel.length);
		console.log("nombre de caractère size : " + prodSize.length);
		console.log("nombre de caractère weight : " + prodWeight.length);
	}
}

// Vous devriez avoir à modifier cette ligne...
let newProducts = howLongIsItTab(products);
console.log(products);
console.log(newProducts);



