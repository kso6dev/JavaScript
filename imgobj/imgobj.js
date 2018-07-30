var img = new Image();
//quelques propriétés
img.widt = 300;
img.height = 300;
//img.src = "../images/dessin.png";

//un seul event: load
img.addEventListener("load", function(){
    console.log("image chargée");
});

//attention il vaut mieux spécifier l'adresse de l'img
//après l'évent load
img.src = "../images/dessin.png";

document.getElementById("main_wraper").appendChild(img);

//mini projet lightbox
//on récupère les liens de notre page
var links = document.getElementsByTagName("a");
var linkslen = links.length;
//on boucle sur les liens pour ajouter l'event onclick
for (var i = 0; i < linkslen; i++){
    links[i].addEventListener("click",function(e){
        //on bloque la redirection des liens onclick
        e.preventDefault();
        //on appelle notre fonction pour afficher les images
        //currentTarget est utilisé pour cibler le lien et non l'image
        displayImg(e.currentTarget);
    });
}

//fonction qui gère l'affichage de l'image dans l'overlay
function displayImg(link){
    var img = new Image();
    var overlay = document.getElementById("overlay");
    //quand l'image est chargée
    img.addEventListener("load",function(){
        //affichage de l'image dans overlay
        overlay.innerHtml = "";
        overlay.appendChild(img);
    });
    //on précise bien la source de l'image
    //qui est le href du lien
    img.src = link.href;
    //on affiche l'overlay en mode block
    overlay.style.display = "block";
    //et on y met un chargement en cours
    //qui s'affichera tant que onload pas déclenché
    overlay.innerHTML = "<span>Chargement en cours..</span>";
}

//pour quitter l'image (sortir de l'overlay)
//on gère l'évennement onclick de l'overlay
document.getElementById("overlay").addEventListener("click", function(e){
    //pour le faire disparaitre!
    e.currentTarget.style.display = "none";
});

console.log("fin");

