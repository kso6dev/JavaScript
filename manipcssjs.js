var divs = document.getElementsByTagName("div");
for (var i = 0, len = divs.length; i < len; i++){
    divs[i].style.color = "white";
    divs[i].style.width = "520px";
    //divs[i].style.backgroundColor = "blue";
}

console.log(divs[0].style.backgroundColor);
//fonctionne si la propriété style est éditée mais pas
// si le style est dans une feuille de style:

//il faut alors utiliser :
console.log(getComputedStyle(divs[0]).backgroundColor);
console.log(getComputedStyle(divs[0]).width);

//tailles des éléments
console.log(divs[0].offsetWidth);

//offsetTop et offsetLeft donnent la distance par
//rapport au parent (distance à gauche et en haut)
//offsetParent donne l'élément parent
//utiles pour des éléments en positions relatives
var divpos = document.querySelectorAll("#parent, #child")
console.log("div parent, offsetTop = " + divpos[0].offsetTop + ", offsetLeft = " + divpos[0].offsetLeft);
console.log("div child, offsetTop = " + divpos[1].offsetTop + ", offsetLeft = " + divpos[1].offsetLeft);

function getRealOffset(element){
    var top = 0, left = 0;
    do {
        top += element.offsetTop;
        left += element.offsetLeft;
    } while(element = element.offsetParent);
    //tant que element reçoit un offsetParent valide

    return {
        top: top,
        left: left
    };
}

console.log("div parent, real offsetTop = " + getRealOffset(divpos[0]).top + ", offsetLeft = " + getRealOffset(divpos[0]).left);
console.log("div child, real offsetTop = " + getRealOffset(divpos[1]).top + ", offsetLeft = " + getRealOffset(divpos[1]).left);


//simple drag & drop
var dragdiv = document.getElementById("dragdiv");
dragdiv.addEventListener("mousedown", initdrag);
document.addEventListener("mousemove", drag);
dragdiv.addEventListener("mouseup", enddrag);

var helpermouse = document.getElementById("helper").firstElementChild;
var helperbutton = document.getElementById("helper").lastElementChild;
var dragobj = {};
function initdrag(e){
    dragobj = {
        offsetX: e.clientX - e.target.offsetLeft,
        offsetY: e.clientY - e.target.offsetTop,
        target: e.target,
        oldindex: e.target.style.zIndex
    };
};

function drag(e){
    if (dragobj.target){
        dragdiv.style.left = e.clientX - dragobj.offsetX + "px";
        dragdiv.style.top = e.clientY - dragobj.offsetY + "px";     
        dragdiv.style.zIndex = 1;    
    }
    helpermouse.innerHTML = "coordonnées souris: " + e.clientX + ", " + e.clientY;
    helperbutton.innerHTML = "coordonnée bouton: " + dragdiv.offsetLeft + ", " + dragdiv.offsetTop;

    console.log("mouseisdown = " + dragobj.target);
};

function enddrag(e){
    dragdiv.style.zIndex = dragobj.oldindex;
    dragobj = {};
};

//LA CORRECTION AVEC IIFE DOU VAR LOCALES ETC
/*
(function() { // On utilise une IIFE pour ne pas polluer l'espace global
    var storage = {}; // Contient l'objet de la div en cours de déplacement
    function init(){ // La fonction d'initialisation
        var elements = document.querySelectorAll('.draggableBox'),
        elementsLength = elements.length;

        for (var i = 0; i < elementsLength; i++) {
            elements[i].addEventListener('mousedown', function(e){ // Initialise le drag & drop
                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });
            elements[i].addEventListener('mouseup', function(){ // Termine le drag & drop

                storage = {};

            });
        }
        document.addEventListener('mousemove', function(e){ // Permet le suivi du drag & drop
            var target = storage.target;
            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }
    init(); // On initialise le code avec notre fonction toute prête.
})();
*/


//pour tester debug
var dynlist = document.getElementById("dynlist");
var li, litxt;
for (var i = 0; i < 5; i++){
    li = document.createElement("li");
    litxt = document.createTextNode("element n° " + (i + 1));
    li.appendChild(litxt);
    dynlist.appendChild(li);
};

alert("fin");