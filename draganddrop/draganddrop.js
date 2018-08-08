var div = document.getElementById("dragme");
div.draggable = true;
div.style.height = '20px';
div.style.width = '100px';
div.style.backgroundColor = "red";

var img = new Image();
img.src = "../images/1_min.jpg";

div.addEventListener('dragstart', function(e){
    e.dataTransfer.setData('text/plain', "ce texte sera transmis à l'élément HTML de réception");
    //e.dataTransfer.setDragImage(img, 40, 40);
    console.log("drag");
});

var dropzone = document.getElementById("dropper");
dropzone.style.height = "100px";
dropzone.style.width = "600px";
dropzone.style.backgroundColor = "grey";
dropzone.style.border = "1px solid black";

dropzone.addEventListener('dragover', function(e){
    e.preventDefault();//annule l'interdiction de drop!
    console.log("dragover");
});

dropzone.addEventListener("drop", function(e){
    e.preventDefault();//toujours nécessaire pour éviter éventuelle redirection inattendue
    console.log("yes you dropped it!");
    dropzone.style.borderStyle = "solid";
    e.target.innerHTML = e.dataTransfer.getData('text/plain');//on récupère le txt passé en setData
    //si on voulait récupérer un fichier contenu dans drag
    //e.dataTransfer.files[0].name; etc
});

dropzone.addEventListener("dragenter", function(){
    console.log("dragenter");
    dropzone.style.borderStyle = "dashed";
});

dropzone.addEventListener("dragleave", function(){
    console.log("dragleave");
    dropzone.style.borderStyle = "solid";
});

dropzone.addEventListener("dragend", function(){
    console.log("dragend but success or not we dont know");
});





console.log("fin Drag & Drop");