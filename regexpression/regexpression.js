var myRegex = /contenu_a_rechercher/;
var myRegexslash = /contenu\/contenu/;
if (myRegex.test("chaine de caract dans laquelle effectuer recherche")){
    console.log("retourne true si test réussi");
} else{
    console.log("retourne false si test échoué");//echoué
}

if (/chercher/.test("on va chercher")){
    console.log("trouvé");//trouvé
} else{
    console.log("pas trouvé");
}

console.log(/raclette/.test("raclette"));//true
//c'est sensible à la casse
console.log(/raclette/.test("Raclette"));//false
//param i pour pas sensible à la casse
console.log(/raclette/i.test("Raclette"));//true
//pipe | pour chercher un mot OU un autre
console.log(/raclette|TarTiflette/i.test("une tartiflette"));//true
console.log(/mais|ou|et|donc/i.test("je suis et tu es"));//true
//^ et $ représentent début et fin de chaine
console.log(/^raclette savoyarde$/i.test("Raclette savoyarde"));//true
console.log(/^raclette/i.test("une raclette"));//false
console.log(/savoyarde$/i.test("une raclette savoyarde"));//true
console.log(/raclette savoyarde$/i.test("raclette savoyarde!"));//false

//les caractères et leurs classes
//une classe de caractères s'écrit entre crochets
//l'un ou l'autre
console.log(/gr[ao]s/i.test("gras"));//true
console.log(/gr[ao]s/i.test("gros"));//true
console.log(/gr[ao]s/i.test("gris"));//false
console.log(/gr[ao]s/i.test("graos"))//;false
//intervalle
console.log(/gr[a-o]s/i.test("gris"));//true
console.log(/gr[a-z]s/i.test("gras"));//true
console.log(/gr[a-z]s/i.test("gres"));//true
console.log(/gr[a-z]s/i.test("gros"));//true
console.log(/gr[a-z]s/i.test("grus"));//true
//intervalle ou intervalle
console.log(/gr[a-el-o]/i.test("gras"));//true
console.log(/gr[a-el-o]/i.test("gres"));//true
console.log(/gr[a-el-o]/i.test("grbs"));//true
console.log(/gr[a-el-o]/i.test("gris"));//false
console.log(/gr[a-el-o]/i.test("grns"));//true
console.log(/gr[a-el-o]/i.test("gros"));//true
console.log(/gr[aei1-3]/i.test("gris"));//true
console.log(/gr[aei1-3]/i.test("gr1s"));//true
console.log(/gr[aei1-3]/i.test("gr2s"));//true
//exclure une classe
console.log(/gr[^ae]s/i.test("gras"));//false
console.log(/gr[^ae]s/i.test("gres"));//false
console.log(/gr[^ae]s/i.test("gris"));//true
//exclure un intervalle
console.log(/gr[^a-i]s/i.test("gras"));//false
console.log(/gr[^a-i]s/i.test("gres"));//false
console.log(/gr[^a-i]s/i.test("gris"));//false
console.log(/gr[^a-i]s/i.test("gros"));//true
//trouver un caractère quelconque
console.log(/gr.s/i.test("gras"));//true
console.log(/gr.s/i.test("gres"));//true
console.log(/gr.s/i.test("gris"));//true
console.log(/gr.s/i.test("gros"));//true

//les quantificateurs permettent de dire cb de fois
//un caractère doit être recherché
//? indique que le caractère qui précède peut apparaitre 0 ou 1 fois
console.log(/raclett?e/i.test("raclette"));//true
console.log(/raclett?e/i.test("raclete"));//true

//+ indique que le caract qui précède peut apparaitre 1 ou plusieurs fois
console.log(/raclet+e/i.test("raclette"));//true
console.log(/raclet+e/i.test("raclete"));//true
console.log(/raclet+e/i.test("racletttttte"));//true

//* indique que le caract qui précède peut apparaitre 0, 1 ou plusieurs fois
console.log(/raclet*e/i.test("raclette"));//true
console.log(/raclet*e/i.test("raclete"));//true
console.log(/raclet*e/i.test("racletttttte"));//true
console.log(/raclet*e/i.test("raclee"));//true

//les accolades permettent de définir explicitement
//combien de fois un caractère peut être répété
//{n} pour n fois
console.log(/raclet{2}e/i.test("raclette"));//true
console.log(/raclet{2}e/i.test("raclete"));//false
//{n,m} pour n à m fois
console.log(/raclet{1,2}e/i.test("raclette"));//true
console.log(/raclet{1,2}e/i.test("raclettte"));//false
//{n,} pour n à infini
console.log(/raclet{1,}e/i.test("raclete"));//true
console.log(/raclet{1,}e/i.test("raclette"));//true

//on peut combiner les quantificateurs et les classes
console.log(/racle[tf]+e/i.test("raclette"));//true
console.log(/racle[tf]+e/i.test("racleffe"));//true
console.log(/Le [1-9][a-z]{2,3} septembre/i.test("Le 1er septembre"));//true
console.log(/Le [1-9][a-z]{3} septembre/i.test("Le 1er septembre"));//false
console.log(/Les [1-9][a-z]{3} septembres/i.test("Les 1ers septembres"));//true

//liste complète des métacaractères
//! ^ $ () [] {} ? + * . / \ |
//pour chercher un caractère qui est un métacaractère
//il suffit de l'échapper avec un antislash
console.log(/accolades \{comme ceci\}./i.test("accolades {comme ceci}."));//true
//au sein d'une classe [] on a besoin d'échapper
//uniquement les [] le tiret - et l'antislash
console.log(/au[\-][dr]*/i.test("au-dessous"));//true
console.log(/au[\-][dr]*/i.test("au-revoir"));//true
console.log(/au[\-][dr]*/i.test("aurevoir"));//false

//les types génériques
//\d trouve un caractère décimal
console.log(/numéro \d+/i.test("numéro 2"));//true
console.log(/numéro \d+/i.test("numéro deux"));//false
//\D trouve un caractère non décimal
console.log(/numéro \D+/i.test("numéro 2"));//false
console.log(/numéro \D+/i.test("numéro deux"));//true
//\s trouve un caractère blanc
console.log(/numéro\s\d/i.test("numéro 2"));//true
console.log(/numéro\s\d/i.test("numéro2"));//false
//\S trouve un caractère non blanc
console.log(/numéro\S2/i.test("numéro 2"));//false
console.log(/numéro\S2/i.test("numéro22"));//true
//\w trouve un caractère "de mot"(lettre accent underscore)
console.log(/kaiser\w/i.test("kaiser_"));//true
//\W trouve un caractère qui n'est pas "de mot"
console.log(/kaiser\W/i.test("kaiser_"));//true
//\n trouve un retour ligne et \t trouve un tab


//les assertions
//\b trouve une limite de mot
console.log(/bonjour\b ça\b va/i.test("bonjour ça va"));
//\B ne trouve pas de limite de mot


//APPLICATIONS DES REGEX

//VERIF ADRESSE EMAIL
var verifMailregex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
var mailadd = "";
do{
    mailadd = prompt("saisis une adresse mail valide", "boulben68@hotmail.fr");
} while(!verifMailregex.test(mailadd));

//ON PEUT DECLARER UNE VAR REGEX VIA OBJ OU TYPE PRIMITIF
var myRegex1 = /^raclette$/i;
var myRegex2 = new RegExp("^raclette$","i");

//a part test() il y a méthode exec() qui retourne
//un tableau dont premier élément est chaine trouvée
//si rien trouvé, tableau null
var sentence = "si ton tonton";
var result = /\bton\b/.exec(sentence);//on cherche le mot ton
if (result){ //if not null
    console.log("result");
}

//9 propriétés: $1 à $9 qui peuvent contenir les 
//chaines capturées via parenthèses capturantes
var birth = "Je suis né en novembre";
/^Je suis né en (\S+)$/.exec(birth);
console.log(RegExp.$1);//affiche novembre
//ici on constate que la var globale RegExp a été maj
//on peut donc récupérer plusieurs valeurs:
var email = prompt("saisis un mail","boulben68@hotmail.fr");
if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)){
    console.log("partie locale: " + RegExp.$1 + "\nDomaine: " + RegExp.$2 + "\nExtension: " + RegExp.$3);
}

//?: permet de rendre une parenthèse non capturante:
myRegex1 = /(?:https|http|ftp|steam):\/\//;

//les recherches non-greedy
var html = '<a href="www.mon-adresse.be">Mon site</a>';
/<a href="(.+)">/.exec(html);
console.log(RegExp.$1);//www.mon-adresse.be
html = '<a href="www.mon-adresse.be"><strong class="web"><Mon site</a>';
/<a href="(.+)">/.exec(html);
console.log(RegExp.$1);//www.mon-adresse.be"><strong class="web
//le ? non-greedy permet de chercher une fois et
//non pas le max du .+
/<a href="(.+?)">/.exec(html);
console.log(RegExp.$1);//www.mon-adresse.be

//Rechercher et remplacer
sentence = "je m'appelle sebastien";
console.log(sentence);
sentence = sentence.replace(/sebastien/, "benjamin");
console.log(sentence);
//option g pour rechercher toutes les occurences
sentence = "je m'appelle Sebastien et mon bof Sebastien";
console.log(sentence);
sentence = sentence.replace(/Sebastien/, "Benjamin");
console.log(sentence);
sentence = sentence.replace(/Sebastien/g, "Benjamin");
console.log(sentence);
//rechercher et capturer pour remplacer
var date = "05/26/2011";
console.log(date);
date = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, "date fr = le $2/$1/$3");
console.log(date);
//pour placer un signe $ il faut le doubler avec $
var total = "j'ai 25 dollars en liquide";
console.log(total);
total = total.replace(/dollars?/, "$$");
console.log(total);

//conversion BBCode vers HTML
var textBBCode = 'bla bla [b]un peu de texte[/b] bla [b]bla bla en gras[/b] bla bla';
console.log(textBBCode);
var textHTML = textBBCode.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>');
console.log(textHTML);

//search() fonctionne comme indexOf() mais avec une regex
sentence = "salut les loosers";
console.log(sentence.search(/\bloosers\b/));//10
console.log(sentence.search(/\bwinners\b/));//-1
//match() fonctionne comme search() sauf que retourne tableau
sentence += " vous etes des loosers bande de loosers";
console.log(sentence);
result = sentence.match(/\bloosers\b/g);
console.log("il y a  " + result.length + " loosers: " + result);
//split() peut s'utiliser avec un regex
//pratique pour découper selon plusieurs séparateurs
var family = 'Guillaume,Pauline;Clarisse:Arnaud;Benoît;Maxime';
console.log(family);
var result = family.split(/[,:;]/);
console.log(result);

console.log("fin");