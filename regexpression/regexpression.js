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

//test d'une adresse mail fr
console.log(/[a-z1-9]+@[a-z]+.fr/i.test("boulben@hotmail.fr"));//true
console.log(/[a-z1-9]+@[a-z]+.fr/i.test("boulben68@hotmail.fr"));//true
console.log(/[a-z1-9]+@[a-z]+.fr/i.test("boulben68@hotmail.com"));//false
console.log(/[a-z1-9]+@[a-z]+.fr/i.test("boulben68.hotmail.fr"));//false

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

console.log("fin");