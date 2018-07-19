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