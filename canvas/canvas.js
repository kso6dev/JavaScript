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

//dessiner un smileu
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


console.log("fin canevas");
