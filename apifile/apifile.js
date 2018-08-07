//on utilise un input de type file pour 
//pouvoir charger des fichiers
var input = document.getElementById("file");
//on lui ajoute l'event onchange pour accéder aux
//fichiers quand ils sont chargés
//on va récupérer une collection d'objets via la propriété files
//il faut pour ça avoir défini l'attribut multiple sur la balise input
console.log(input);
input.addEventListener("change", function(){
    var filesCollection = this.files;
    console.log("event");
    console.log("file name = " + filesCollection[0].name);

    //on déclare un reader
    var reader = new FileReader();
    //on déclare une file = premier élémt de la collection
    var file = filesCollection[0];
    //et on choisit de lire en text format utf-8
    reader.readAsText(file, 'UTF-8');
    //Attention, la lecture est asynchrone!
    //il faut donc utiliser des events
    reader.addEventListener("progress", function(e){
        switch (reader.readyState)
        {
            case reader.EMPTY:
                console.log("aucune donnée encore chargée");
                break;
            case reader.LOADING:
                console.log("données en cours de chargement");
                break;
            case reader.DONE:
                console.log("données chargées");
                break;
            default:
                console.log("unknown status");
        }
        console.log(e.loaded + " / " + e.total);
    });
    reader.addEventListener("load", function(){
        console.log("lecture terminée, contenu fichier:");
        //contenu du fichier:
        console.log(reader.result);
    });
    reader.addEventListener("error", function(e){
        console.log("error");
    });
});

//mise en pratique avec un outil de prévisualisation
(function(){
    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'];
    var fileInput = document.getElementById("fileprev");
    var prevDiv = document.getElementById("prev");

    fileInput.addEventListener("change", function(e){previewFiles(e);});

    function previewFiles(e){
        var files = e.target.files;
        var filesLen = files.length;
        var imgType;
        for (var i = 0; i < filesLen; i++)
        {
            imgType = files[i].name.split('.');//on split en tableau
            //si 3 points dans le nom, le tableau aura une
            //longueur de 4, et nous on veut la dernière occurence
            //car elle contient l'extension donc occur 3
            //donc tableau.length - 1
            imgType = imgType[imgType.length - 1].toLowerCase();
            
            if (allowedTypes.indexOf(imgType) != -1)
            {
                //l'extension est supportée, on affiche
                createThumbnail(files[i]);
            }
        }
    }

    function createThumbnail(file){
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            //affichage de l'image
            var imgElement = document.createElement("img");
            imgElement.style.maxWidth = '150px';
            imgElement.style.maxHeight = '150px';
            imgElement.src = this.result;//result de readAsDataUrl!
            console.log(this.result);
            prevDiv.appendChild(imgElement);
        });
        //on lit le fichier sous forme d'url en base 64
        reader.readAsDataURL(file);
    }
})();

//Upload de fichiers avec l'objet XMLHttpRequest
(function(){
    var fileInput = document.getElementById("fileupload");
    var progress = document.getElementById("progress");
    
    fileInput.addEventListener("change", function(){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'apifile.php');//on utilise POST car on va utiliser un objet FormData

        xhr.addEventListener("load", function(){
            console.log("upload fichier terminé");
        });
        
        xhr.upload.addEventListener("progress", function(e){
            progress.value = e.loaded;
            progress.max = e.total;
            console.log(e.loaded + " / " + e.total);
        });

        //on créé un form dans lequel on ajoute le fichier
        var form = new FormData();
        form.append('file', fileInput.files[0]);
        //on envoie le form..
        xhr.send(form);

    });
})();


console.log("fin API File");