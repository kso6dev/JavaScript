var txt = "var globale";

(function() {
    var txt = "var locale";
    alert(txt); // affichera forcément la var locale

    alert(window.txt); // affichiera la var globale!!
})();

var div = document.getElementById("main_wraper");
alert(div);

var articles = document.getElementsByTagName("article");
for (var i = 0, len = articles.length; i < len; i++)
{
    alert('article n° ' + (i + 1) + articles[i]);
}

var query = document.querySelector("#menu .item span");
var queryAll = document.querySelectorAll("#menu .item span");
alert(query.innerHTML); 
for (var i = 0, len = queryAll.length; i < len; i++)
{
    alert(queryAll[i].innerHTML);
}

var dynamicLink = document.getElementById("dynamiclink");
dynamicLink.setAttribute("href", "http://resizeimage.net/");
dynamicLink.href = "https://www.google.com";
dynamicLink.innerHTML += "...nan en fait c'est google";

var menudiv = document.getElementById("menu");
menudiv.innerHTML += "<h1>et on ajoute un titre</h1>";

alert("innerHTML renvoie " + menudiv.innerHTML + " alors que innerText renvoie " + menudiv.innerText);

//textContent ne fonctionne pas sur les vieux IE
//on peut tester si textContent renvoie vrai alors il est géré
//sinon si innerText renvoie vrai alors lui est géré
var txtct = "";
if (menudiv.textContent)
{
    txtct = menudiv.textContent;
}
else if (menudiv.innerText)
{
    txtct = menudiv.innerText;
}
//MEME CODE EN PLUS COURT
txt = div.textContent || div.innerText || "";


//naviguer entre les éléments
var childdiv = document.getElementById("menu");
var headerparent = childdiv.parentNode;
var headerfirstchild, headerlastchild, nextchild;
headerfirstchild = headerparent.firstChild;
nextchild = headerfirstchild.nextSibling;
headerlastchild = headerparent.lastChild;
var prevchild = headerlastchild.previousSibling;
var value = headerfirstchild.nodeValue;

var parcol = document.getElementById("parcol");
var childs = parcol.childNodes;
for (var i = 0, len = childs.length; i < len; i++)
{
    if (childs[i].nodeType === Node.ELEMENT_NODE)
    {
        alert(childs[i].firstChild.nodeValue);
    }
    else
    {
        alert(childs[i].nodeValue);
    }
}

headerlastchild = document.getElementById("parline");
var child = headerlastchild.firstChild;
while (child)
{
    if (child.nodeType === Node.ELEMENT_NODE)
    {
        alert(child.firstChild.nodeValue);
    }
    else
    {
        alert(child.nodeValue);
    }
    child = child.nextSibling;
}

// pour éviter les noeuds vides (espaces et retours lignes html)
// utiliser ElementChild et ElementSibling
child = headerlastchild.firstElementChild;
while (child)
{
    if (child.nodeType === Node.ELEMENT_NODE)
    {
        alert(child.firstChild.nodeValue);
    }
    else
    {
        alert(child.nodeValue);
    }
    child = child.nextElementSibling;
}

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
tp2div.setAttribute("onclick","alert('voici le contenu de cet element : ' + this.innerHTML)");


//récupérer leurs propriétés
var headertype = headerparent.nodeType; 
var headername = headerparent.nodeName.toLocaleLowerCase;

alert("fin");