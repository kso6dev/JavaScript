var canvas = document.getElementById("canvasrect");
var context = canvas.getContext("2d");
var context3 = canvas.getContext("3d");
console.log(context3);//null car 3d n'existe pas à l'heure actuelle, prévu ptet un jour
console.log(context);

context.fillStyle = "yellow";//on prépare la couleur
context.fillRect(0, 0, 50, 80);//on dessine un rectangle, origine 0, 50 de large, 80 de haut

context.fillStyle = "red";
var r = rectangle(50, 80);
context.fillRect(canvas.width/2 - r.width/2, canvas.height/2 - r.height/2, r.width, r.height);
context.fillStyle = "rgba(23,145,167,0.5)";
r = rectangle(120,50);
context.fillRect(30,40,r.width,r.height);

context.strokeStyle = "green";//contour du rectangle vide
context.strokeRect(120,80,90,30);//rectangle vide

context.lineWidth = "5";//épaisseur du contour
context.strokeStyle = "grey";//contour du rectangle vide
context.strokeRect(200,100,20,40);//rectangle vide

context.fillStyle = "black";
context.fillRect(250, 120, 30, 10);
context.clearRect(250, 120, 20, 5);//on efface un rect


canvas = document.getElementById("canvaspath");
context = canvas.getContext("2d");

context.strokeStyle = "green";//défini une couleur de contour
context.beginPath();//initie le chemin
context.moveTo(20, 20);//premier point
context.lineTo(130,20);//2è point
context.lineTo(130,50);//2è point
context.lineTo(75,130);//4è point
context.lineTo(20,50);//5è point
context.closePath();//on relie le 5è point au premier
context.stroke();//on dessine

context.beginPath();
context.fillStyle = "blue";
context.arc(20, 20, 20, 0, 2*Math.PI);
context.fill();

context.beginPath();
context.fillStyle = "red";
context.arc(60, 20, 20, 0, Math.PI);
context.fill();


context.beginPath();
context.fillStyle = "purple";
context.arc(255, 70, 11, 0, 2*Math.PI);
context.fill();
context.beginPath();
context.fillStyle = "purple";
context.arc(275, 70, 11, 0, 2*Math.PI);
context.fill();
context.beginPath();
context.fillStyle = "blue";
context.fillRect(250, 70, 30, 20);
context.fillStyle = "yellow";
context.arc(250, 100, 20, 0, 2*Math.PI);
context.fill();
context.beginPath();
context.fillStyle = "yellow";
context.arc(280, 100, 20, 0, 2*Math.PI);
context.fill();

//dessiner un smiley
context.fillStyle = "yellow";
context.strokeStyle = "black";
context.beginPath(); // Le cercle extérieur
context.arc(175, 75, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
context.fill();
context.fillStyle = "black";
context.beginPath(); // La bouche, un arc de cercle
context.arc(175, 75, 40, 0, Math.PI); // Ici aussi
context.fill();
context.beginPath(); // L'œil gauche
context.arc(155, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context.stroke();
context.beginPath(); // L'œil droit
context.arc(195, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context.stroke();

canvas = document.getElementById("canvasbezier");
context = canvas.getContext("2d");
context.beginPath();
context.moveTo(131, 119);
context.bezierCurveTo(131, 126, 126, 131, 119, 131);
context.lineTo(30, 131);
context.bezierCurveTo(23, 131, 18, 126, 18, 119);
context.lineTo(18, 30);
context.bezierCurveTo(18, 23, 23, 18, 30, 18);
context.lineTo(119, 18);
context.bezierCurveTo(126, 18, 131, 23, 131, 30);
context.lineTo(131, 119);
context.closePath();
context.fillStyle = "rgb(23, 145, 167)";
context.fill();

context.font = "68px Calibri,Geneva,Arial";
context.fillStyle = "white";
//context.strokeStyle = "black";
context.fillText("js", 84, 115);
//context.strokeText("js", 84, 115);

(function(){
    var canvas = document.getElementById("canvasimg");
    var context = canvas.getContext("2d");
    var img = new Image();
    img.src = "../images/dessin.png";
    //context.drawImage(img, 100, 20);
    img.addEventListener("load", function(){
        //context.drawImage(img, 50, 20);
        //context.drawImage(img, 150, 20, 120, 120);
        context.drawImage(img, 30, 30, 220, 220, 150, 20, 120, 120);
    });
})();


(function(){
    var canvas = document.getElementById("canvaspattern");
    var context = canvas.getContext("2d");
    var img = new Image();
    img.src = "../images/3_min.jpg";
    img.addEventListener('load', function(){
        var pattern = context.createPattern(img, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(0,0, 300, 250);
    });
})();

(function(){
    var canvas = document.getElementById("canvastxt");
    var context = canvas.getContext("2d");

    context.font = "38px Calibri,Geneva,Arial";
    context.fillStyle = "black";
    context.fillText("hello world", 10, 30);
    context.fillText("hello world", 10, 70, 80);
    context.font = "44px Calibri";
    context.strokeStyle = "red";
    context.strokeText("hello world", 10, 110);
    context.strokeText("hello world", 10, 150, 60);
})();


function rectangle(width, height){
    this.width = 0;
    this.height = 0;
    if (width != null)
    {
        this.width = width;
    }
    if (height != null)
    {
        this.height = height;
    }
    return this;
}

//lignes et dégradés
//les extrémités
(function(){
    var canvas = document.getElementById("canvascap");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(2,10);
    context.lineTo(58, 10);
    context.stroke();
    context.beginPath();
    context.moveTo(2,100);
    context.lineTo(58, 100);
    context.stroke();
    
    context.beginPath();
    context.lineCap = 'butt';//default
    context.lineWidth = '5';
    context.moveTo(10, 10);
    context.lineTo(10, 100);
    context.stroke();

    context.beginPath();
    context.lineCap = 'round';
    context.moveTo(30, 10);
    context.lineTo(30, 100);
    context.stroke();

    context.beginPath();
    context.lineCap = 'square';
    context.moveTo(50, 10);
    context.lineTo(50, 100);
    context.stroke();
})();
//les intersections
(function(){
    var canvas = document.getElementById("canvasintersect");
    var context = canvas.getContext("2d");
    var x = y = 10;
    context.beginPath();
    context.lineWidth = '6';
    context.lineJoin = 'miter';//default
    context.moveTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    context.stroke();
    x = 10; y+= 50;
    context.beginPath();
    context.lineJoin = 'round';
    context.moveTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    context.stroke();
    x = 10; y+= 50;
    context.beginPath();
    context.lineJoin = 'bevel';
    context.moveTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    x+=20; y+=20;
    context.lineTo(x,y);
    x+=20; y-=20;
    context.lineTo(x,y);
    context.stroke();
})();
//les dégradés
//linéaire createLinearGradient(debutx, debuty, finx, finy)
(function(){
    var canvas = document.getElementById("canvaslineargradient");
    var context = canvas.getContext("2d");
    var linear = context.createLinearGradient(10, 10, 50, 50);
    linear.addColorStop(0, "white");
    linear.addColorStop(1, "#1791a7");
    context.fillStyle = linear;
    context.fillRect(10, 10, 50, 50);

    linear = context.createLinearGradient(10, 50, 50, 50);
    linear.addColorStop(0, "white");
    linear.addColorStop(1, "#1791a7");
    context.fillStyle = linear;
    context.fillRect(10, 70, 50, 50);

    linear = context.createLinearGradient(50, 10, 50, 50);
    linear.addColorStop(0, "white");
    linear.addColorStop(1, "#1791a7");
    context.fillStyle = linear;
    context.fillRect(70, 10, 50, 50);

    linear = context.createLinearGradient(120, 70, 70, 70);
    linear.addColorStop(0, "white");
    linear.addColorStop(0.5, "#1791a7");
    linear.addColorStop(0.5, "red");
    linear.addColorStop(1, "white");
    context.fillStyle = linear;
    context.fillRect(70, 70, 50, 50);
})();
//radial createRadialGradient(centrex, centrey, centrerayon, finx, finy, finrayon)
(function(){
    var canvas = document.getElementById("canvasradialgradient");
    var context = canvas.getContext("2d");
    var radial = context.createRadialGradient(215, 75, 0, 215, 75, 70);  
    radial.addColorStop(0, "#1791a7");
    radial.addColorStop(0.5, "yellow");
    radial.addColorStop(0.5, "yellow");
    radial.addColorStop(1, "#1791a7");
    context.fillStyle = radial;
    context.fillRect(150, 10, 130, 130);
    
    var radial1 = context.createRadialGradient(0, 0, 10, 100, 20, 150); // fond
    radial1.addColorStop(0, '#ddf5f9');
    radial1.addColorStop(1, '#ffffff');

    var radial2 = context.createRadialGradient(75, 75, 10, 82, 70, 30); // bulle orange
    radial2.addColorStop(0, '#ffc55c');
    radial2.addColorStop(0.9, '#ffa500');
    radial2.addColorStop(1, 'rgba(245,160,6,0)');

    var radial3 = context.createRadialGradient(105, 105, 20, 112, 120, 50); // bulle turquoise
    radial3.addColorStop(0, '#86cad2');
    radial3.addColorStop(0.9, '#61aeb6');
    radial3.addColorStop(1, 'rgba(159,209,216,0)');	  

    context.fillStyle = radial1;
    context.fillRect(10, 10, 130, 130);
    context.fillStyle = radial2;
    context.fillRect(10, 10, 130, 130);
    context.fillStyle = radial3;
    context.fillRect(10, 10, 130, 130);
})();

//operations: 
/* la méthode save() a pour fonction de sauvegarder
l'état graphique du canvas, c'est a dire les info
concernant les styles appliqués au canvas
donc fillStyle, strokeStyle, lineWidth, lineCap,
lineJoin, translate() et rotate() qu'on va voir plus bas
a chaque appel de la méthode save(), l'état graphique
est sauvegardé dans une pile. Pour restaurer
l'état précédent il faut utiliser restore()
*/
//les translations
/* la translation permet de déplacer le repaire
d'axes du canvas pour placer son point (0,0) à l'endroit
où on le souhaite. Donc on dessine d'abord et on place
ensuite, ce qui est assez pratique!
*/
(function(){
    var canvas = document.getElementById("canvastranslate");
    var context = canvas.getContext("2d");
    context.save();//on sauvegarde pos initiale (0,0)
    context.translate(40,40);//on se déplace en (40,40)
    context.fillStyle = "blue";
    context.fillRect(0,0,50,50);//on dessine
    context.restore();//on restore donc retour à pos précédente = (0,0)
    context.fillStyle = "orange";
    context.fillRect(0,0,50,50);//on dessine
})();
//les rotations
/* les rotations permettent d'appliquer une rotation
aux axes du canvas. le canvas tourne autour de son point
d'origine. La méthode rotate() reçoit un seul param = l'angle
de rotation spécifié en radians. on peut combiner
rotation et translation
*/
(function(){
    var canvas = document.getElementById("canvastranslate");
    var context = canvas.getContext("2d");
    context.translate(180,50);
    context.rotate(45 * Math.PI/180);
    context.fillStyle = "teal";
    context.fillRect(0, 0, 30, 30);
    context.rotate(90 * Math.PI/180);
    context.fillStyle = "gold";
    context.fillRect(0, 0, 30, 30);
    context.rotate(90 * Math.PI/180);
    context.fillStyle = "red";
    context.fillRect(0, 0, 30, 30);
    context.rotate(90 * Math.PI/180);
    context.fillStyle = "purple";
    context.fillRect(0, 0, 30, 30);
})();

//animations
/*canvas ne propose rien nativement. pour faire une animation
il faut dessiner, effacer dessiner légèrement modifié, 
effacer, dessiner légèrement modifié etc etc
il faut donc appeler une fonction qui redessine
le canvas toutes les x secondes
60fps est un standard pour animation fluide pour oeil humain
setTimeout() et setInterval() peuvent créer des 
pblm de perf et donc baisse de framerate
HEUREUSEMENT IL Y A requestAnimationFrame() qui 
détermine à chacune de ses exécutions à quel moment
elle doit se redéclencher pour garder 60fps!
*/
//VOIR FRAMEWORK KineticJS pour simplifier le dessin
//et même ajouter des events aux formes!
(function(){
    window.addEventListener("load", function(){
        var canvas = document.getElementById("canvasanim");
        var context = canvas.getContext("2d");
        draw(0);
        
        function draw(angle){
            context.save();
            context.clearRect(0,0,150,150);
            context.translate(75,75);
            
            context.fillStyle = "teal";
            context.rotate((Math.PI/180) * (45 + angle));
            context.fillRect(0,0,50,50);

            context.fillStyle = "gold";
            context.rotate((Math.PI/180) * 90);
            context.fillRect(0,0,50,50);

            context.fillStyle = "teal";
            context.rotate((Math.PI/180) * 90);
            context.fillRect(0,0,50,50);

            context.fillStyle = "gold";
            context.rotate((Math.PI/180) * 90);
            context.fillRect(0,0,50,50);

            context.restore();
            angle+=2;

            if (angle >= 360)
            {
                angle = 0;
            }

            window.requestAnimationFrame(function() {draw(angle)});
        }
    });
})();

console.log("fin canevas");
