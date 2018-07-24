/*
here we will write JavaScript
for information, type attribute is not 
necessary but it was before HTML5
*/
alert('Hello World in a file!!'); //it is my first JS function

var myAge;
myAge = 31;

//alert(myAge);

var myHeight = 175, myWeight = 67;

var feet, hands;
feet = hands = 2;

var leg = "jambe";

var truth = true;

//alert(typeof truth); //result = boolean
//alert(typeof leg); //result = string
//alert(typeof feet); //result = number
//alert(typeof rien); //result = undefined

var negation = "je n'ai plus de ";
var sentence = negation + leg; // sentence = je n'ai plus de jambe
negation += leg; // negation = je n'ai plus de jambe

var userName = prompt("Entrez votre prénom : ");
alert("Bonjour " + userName);
//var yourAge = prompt("quel age as-tu? ");
//var intAge = parseInt(yourAge);
//intAge += 2;
//alert("tu as déjà " + yourAge + " ans! Dans 2 ans tu auras " + intAge + " ans.");

var nb1 = 1, nb2 = 2;
var nb3 = nb1 + nb2; // = 3
var txt = nb1 + '' + nb2; // = 12

if (confirm("afficher une autre popup?")){
    alert("c'est toi qui l'a demandé!");
}
else
{
    alert("bah si quand même..");
}

var userAge = prompt("Tu as quel âge? ");
userAge = parseInt(userAge);
switch (true){
    case (userAge < 10):
        alert("tu es très jeune");
        break;
    case (userAge > 9 && userAge < 21):
        alert("tu es un ado");
        break;
    case (userAge > 20):
        alert("fini la jeunesse!");
        break;
    default:
        alert("tu n'as pas renseigné ton age banane");
}

var startmsg = "Votre catégorie: ", endmsg;
var adult = confirm("Etes vous majeur? ");
endmsg = adult ? "18+" : "-18";
alert(startmsg + endmsg);

var number = 0;
var output = number++; // on incrémente après assignation
//alert(number); // Affiche : « 1 »
//alert(output); // Affiche : « 0 »
number = 0;
output = ++number; // on incrémente avant assignation
//alert(number); // Affiche : « 1 »
//alert(output); // Affiche : « 1 »

var nb = 0;
while (nb < 10){
    nb++;
}

do{
    nb--;
} while (nb > 0)

for (nb = 0; nb < 3; nb++){
    alert(nb);
}

for (var i = 0, str = ""; i < 10; i++){
    str += i;
}
alert(str);


function sumnb(a, b, c){
    var sumres = parseInt(a) + parseInt(b);
    return (sumres);
}

var ab = sumnb(1, 3); // a = 1, b = 3, c = false

//fonction anonyme:
var sayHi = function(){
    alert("Hi!");
};// ne pas oublier le point virgule!!!

sayHi();

//isoler son code
(function(){
    //code isolé
    var localVar = 0;
})();


// les objets
var myStr = "ceci est une chaine de caract";
var strlen = myStr.length;
myStr = myStr.toUpperCase();

//nous avons déjà vu les string, number et boolean
// voici maintenant les array
var myArray = ["Ben", "Soso", "Toto", "Kaka", "Kiki"];
var myArray2 = ["Benji", 31, "Soso", 30, 12, 14, false];

myArray.push("Nono");//ajoute Nono en fin de tableau
myArray.push("Axel", "Aimy");//ajoute les 2 en fin
myArray.unshift("Francis");//ajoute au début du tableau


myArray.pop();//retire le dernier donc Kiki
myArray.shift();//retire le premier donc Francis

var strArr = myStr.split(" ");//split un string par rapport à un séparateur et met valeurs dans un tableau

myStr = strArr.join(" ");//transformer array en string

//ATTENTION: c'est pas beau de demander length à chaque tour de boucle
//for (var i = 0; i < myArray.length; i++){
//c'est mieux de définir une var qui contient length
for (var i = 0, len = myArray.length; i < len; i++){
    alert(myArray[i]);
}

var family = {
    me: "Ben",
    gf: "Sonia",
    sis: "Stephanie",
    mum: "Annick",
    dad: "Francis"
};

alert(family.sis);
var id = "gf";
//alert(family[id]);
console.log(family[id]);
family["cousin"] = "Bruno";
//alert(family.cousin);
console.log(family.cousin);

for (var id in family){
    //alert(family[id]);
    console.log(family[id]);
}

// erreur qu'on pourra voir dans la console du
// kit de dev du navigateur web (F12)
//var t = u;

for (var i = 0; i < 10; i++){
    //on affiche les valeurs de i dans la console
    console.log("valeur de i = " + i);
}

var helloObj = {
    english: "Hello",
    french: "Bonjour",
    spanish: "Hola"
};

console.log(helloObj);

console.warn("warning msg");
console.error("error msg");

console.group("testgroup");

console.groupEnd();


function fcta(value){
    console.log(value);
}

function fctb(value){
    fcta(value + 1);
}

function fctc(value){
    fctb(value + 1);
}

for (var i = 0; i < 10; i++){
    fctc(i);
}

(function(){
    console.log("anonymous");
})();

(function anonymousFunction(){
    console.log("not so anonymous");
})();

alert("fin");