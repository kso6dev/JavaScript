var dynamicLink = document.getElementById("dynamiclink");
dynamicLink.setAttribute("href", "http://resizeimage.net/");
dynamicLink.href = "https://www.google.com";
dynamicLink.innerHTML += "...nan en fait c'est google";

var menudiv = document.getElementById("menu");
menudiv.innerHTML += "<h1>et on ajoute un titre</h1>";

// créer noeuds <p></p>, <a> etc
var newPar = document.createElement("p");
newPar.id = "parJS";
newPar.className = "JSclass";
var newLink = document.createElement("a");
newLink.id = "linkJS";
newLink.href = "https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1918600-manipuler-le-code-html-partie-2-2";
newLink.title = "tuto js openclassroom";
//newLink.text = "lien vers tuto";
var newTxtNode = document.createTextNode("text créé avec createTextNode");
newLink.appendChild(newTxtNode);
document.getElementById("parline").appendChild(newPar);
newPar.appendChild(newLink);

var newPar2 = newPar.cloneNode(false);
var newPar3 = newPar.cloneNode(true);
var newPar4 = newPar.cloneNode(true);
document.getElementById("parline").appendChild(newPar2);
document.getElementById("parline").appendChild(newPar3);
document.getElementById("parline").appendChild(newPar4);

newPar4.replaceChild(newTxtNode,newPar4.firstChild);

if (document.getElementById("parline").hasChildNodes())
{
    document.getElementById("parline").removeChild(newPar2);
}

//il existe node.insertBefore mais pas insertAfter
//on peut facilement le coder:
function insertAfterNode(newnode, afternode)
{
    //on récupère le parent
    var parent = newnode.parentNode;
    //si le lastChild est le noeud après lequel on veut insérer
    //bah on insère
    if (parent.lastChild === afternode)
    {
        parent.appendChild(newnode);
    }
    else
    {
        //sinon, on se déplace vers le noeud d'après
        //et on insère avant
        parent.insertBefore(newnode,afternode.nextSibling);
    }
}

//TP 1
var tpheader = document.getElementById("main_wraper");
var tpdiv = document.createElement("div");
tpdiv.id = "divTP1";
var tpstrong = [
    document.createElement("strong"),
    document.createElement("strong")
];
var tptxt = [
    document.createTextNode("Le "),
    document.createTextNode("World Wide Web Consortium"),
    document.createTextNode(", abrégé par le sigle "),
    document.createTextNode("W3C"),
    document.createTextNode(", est un "),
    document.createTextNode("organisme de standardisation"),
    document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du "),
    document.createTextNode("World Wide Web"),
    document.createTextNode(".")
];
tpstrong[0].appendChild(tptxt[1]);
tpstrong[1].appendChild(tptxt[3]);

var tpa = [
    document.createElement("a"),
    document.createElement("a")
];
tpa[0].href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
tpa[0].title = "Organisme de normalisation";
tpa[0].appendChild(tptxt[5]);

tpa[1].href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
tpa[1].title = "World Wide Web";
tpa[1].appendChild(tptxt[7]);

tpdiv.appendChild(tptxt[0]);
tpdiv.appendChild(tpstrong[0]);
tpdiv.appendChild(tptxt[2]);
tpdiv.appendChild(tpstrong[1]);
tpdiv.appendChild(tptxt[4]);
tpdiv.appendChild(tpa[0]);
tpdiv.appendChild(tptxt[6]);
tpdiv.appendChild(tpa[1]);
tpdiv.appendChild(tptxt[8]);

tpheader.appendChild(tpdiv);

//TP 2
var tp2div = document.createElement("div");
tp2div.id = "divTP2";
var tp2p = document.createElement("p");
var tp2ul = document.createElement("ul");
var tp2li = [];
var tp2txt = [
    document.createTextNode("Langages basés sur ECMAScript :"),
    document.createTextNode("JavaScript"),
    document.createTextNode("Jscript"),
    document.createTextNode("ActionScript"),
    document.createTextNode("EX4")
];
tp2p.appendChild(tp2txt[0]);
for (var i = 1, len = tp2txt.length; i < len; i++)
{
    console.log("avant push: i = " + i + ", array len = " + tp2li.length + " array[i -1] = " + tp2li[i - 1]);
    //on part de i = 1 car on veut pas le premier txt qui est le titre
    tp2li.push(document.createElement("li"));
    console.log("après push: i = " + i + ", array len = " + tp2li.length + " array[i -1] = " + tp2li[i - 1]);

    tp2li[i - 1].appendChild(tp2txt[i]);
    tp2ul.appendChild(tp2li[i - 1]);
}
tp2div.appendChild(tp2p);
tp2div.appendChild(tp2ul);
tpheader.appendChild(tp2div);

tp2div.setAttribute("onclick","alert('voici le contenu de cet element : ' + this.innerHTML);");

var p = document.createElement("p");
var ablocked = document.createElement("a");
ablocked.href = "https://www.google.com";
ablocked.title = "google";
ablocked.text = "Google";
ablocked.setAttribute("onclick","alert('bloqué');return false;");
p.appendChild(ablocked);
tpheader.appendChild(p);

p = document.createElement("p");
var emptyaclick = document.createElement("a");
emptyaclick.href = "#";
emptyaclick.title = "empty";
emptyaclick.text = "click on me";
emptyaclick.setAttribute("onclick","alert('lien juste pour cliquer');return false;");
p.appendChild(emptyaclick);
tpheader.appendChild(p);

// définir event js via DOM-0 (vieille méthode)
p = document.createElement("p");
var clickme = document.createElement("a");
clickme.href = "#";
clickme.title = "empty";
clickme.text = "click me to";
clickme.onclick = function(){
    alert("yes you did, DOM-0");
};
p.appendChild(clickme);
tpheader.appendChild(p);

//définir event js via DOM-2 (bonne méthode actuelle)
p = document.createElement("p");
clickme = document.createElement("a");
clickme.href = "#";
clickme.title = "empty";
clickme.text = "click me to DOM-2";
clickme.addEventListener("click", function(){
    alert("DOM-2 addEventListener");
    return false;
});
//OU
function myfunction(){
    alert("DOM-2 addEventListener in function");
    return false;
};
clickme.addEventListener("click", myfunction);
p.appendChild(clickme);
tpheader.appendChild(p);

p = document.createElement("p");
var clickme2 = document.createElement("a");
clickme2.href = "#";
clickme2.title = "empty";
clickme2.text = "click me to remove event for previous link";
clickme2.addEventListener("click", function(){
    clickme.removeEventListener("click", myfunction);
});
p.appendChild(clickme2);
tpheader.appendChild(p);

//capture and bubbling
//bubbling is default (false)
var capt1 = document.getElementById('capt1'),
capt2 = document.getElementById('capt2'),
boul1 = document.getElementById('boul1'),
boul2 = document.getElementById('boul2');

capt1.addEventListener('click', function() {
    alert("L'événement du div vient de se déclencher.");
}, true);

capt2.addEventListener('click', function() {
    alert("L'événement du span vient de se déclencher.");
}, true);

boul1.addEventListener('click', function() {
    alert("L'événement du div vient de se déclencher.");
}, false);

boul2.addEventListener('click', function() {
    alert("L'événement du span vient de se déclencher.");
}, false);

var obe = document.getElementById("spanobjevent");
obe.addEventListener("click", functionTestObEv);
function functionTestObEv(e){
    alert("type d'event: " + e.type);
    e.target.innerHTML = "modifié via e.target.innerHTML";
};


var parent1 = document.getElementById('parent1'),
result = document.getElementById('result');

parent1.addEventListener("mouseover", function(e){
    result.innerHTML = "L'élément déclencheur de l'événement \"mouseover\" possède l'ID : " + e.target.id;
    result.innerHTML += "\ tandis que l'élément sur lequel on a ajouté l'event est : " + e.currentTarget.id;
});

var itmcoord = document.getElementById("parcol");
document.addEventListener("mousemove",function(e){
    itmcoord.innerHTML = e.clientX + " " + e.clientY;
});
var pmouseover = document.getElementById("mouseover");
document.addEventListener("mouseover", function(e){
    pmouseover.innerHTML = "mouseover elmt: " + e.relatedTarget.id;
});
var pmouseout = document.getElementById("mouseout");

document.addEventListener("mouseout", function(e){
    pmouseout.innerHTML = "mouseout elmt: " + e.relatedTarget.id;
});

var pkeydown = document.getElementById("keydown");
document.addEventListener("keydown", function(e){
    pkeydown.innerHTML = "keydown: " + String.fromCharCode(e.keyCode);
});

var pkeyup = document.getElementById("keyup");
document.addEventListener("keyup", function(e){
    pkeyup.innerHTML = "keyup: " + String.fromCharCode(e.keyCode);
});

var pkeypress = document.getElementById("keypress");
document.addEventListener("keypress", function(e){
    pkeypress.innerHTML = "keypress: " + String.fromCharCode(e.keyCode);
});

var myDiv = document.getElementById('myDiv'),
results = document.getElementById('results');

myDiv.addEventListener('mouseover', function(e) {
    var relatedTarget = e.relatedTarget;
    //on remonte jusqu'au parent pour voir si on arrive
    //à myDiv ou à body ou carrément hors du body, sur document
    while (relatedTarget != myDiv && relatedTarget.nodeName != "BODY" && relatedTarget != document)
    {
        relatedTarget = relatedTarget.parentNode;
    }
    //si on arrive à myDiv, alors on est sur un enfant de myDiv
    //donc on ne veut pas que l'event se déclenche
    if (relatedTarget != myDiv)
    {
        results.innerHTML += "Le curseur vient d'entrer.<br />";
    }
});

myDiv.addEventListener('mouseout', function(e) {
    var relatedTarget = e.relatedTarget;
    while (relatedTarget != myDiv && relatedTarget.nodeName != "BODY" && relatedTarget != document)
    {
        relatedTarget = relatedTarget.parentNode;
    }
    if (relatedTarget != myDiv)
    {
        results.innerHTML += "Le curseur vient de sortir.<br />";
    }
});

alert("fin");