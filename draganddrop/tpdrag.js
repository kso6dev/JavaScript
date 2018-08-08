(function(){
    
    var dndHandler = {
        //obj namespace contenant méthodes de notre syst drag & drop

        //obj dans lequel on stockera l'élément dragged
        draggedElement: null,

        //méthode permettant de rendre 1 objet draggable
        applyDragEvents: function(element){
            element.draggable = true;

            var dndHandler = this;//nécessaire pour que l'event dragstart accède facilement au namespace dndhandler

            element.addEventListener("dragstart", function(e){
                dndHandler.draggedElement = e.target;//on sauvegarde l'élément en cours de déplacement
                e.dataTransfer.setData("text/plain", '');//nécessaire pour Firefox
            });

            //ATTENTION: il ne faut pas que l'event soit propagé à ses enfants
            //element.addEventListener("drop",function(e){
                //on empeche donc la propagation de l'event drop
                //pour qu'il ne soit pas propagé du dropper (parent)
                //vers l'élément draggable (enfant)
                
                //e.stopPropagation();
                
                //MAIS C'EST CONTRAIGNANT CAR ON NE PEUT
                //DONC PLUS DROP SUR UN ELEMENT DE LA ZONE DE DROP..
                //LE MIEUX EST DONC DE REMONTER LES ELEMENTS PARENTS
                //JUSQU'A TOMBER SUR UNE ZONE DE DROP

                //VOIR EVENT DROP DU DROPPER

            //});
        },

        //méthode permettant de gérer les event des 2 zones de drop
        applyDropEvents: function(dropper){
            //gestion du dragover
            dropper.addEventListener("dragover", function(e){
                e.preventDefault();//on autorise le drop
                this.className = "dropper drop_hover";//on applique le style hover en plus du style initial dropper
            });

            //gestion du dragleave
            dropper.addEventListener("dragleave", function(){
                this.className = "dropper";//on remet le style de base quand on quitte la zone de drop
            });

            //gestion du drop en clonant l'élément déplacé puis ses events (car pas clonés avec cloneNode()) puis en supprimant l'original
            dropper.addEventListener("drop", function(e){
                //var definitions
                var target = e.target;
                var draggedElement = dndHandler.draggedElement;//on récupère l'élément concerné
                var clonedElement = draggedElement.cloneNode(true);//on créé direct le clone de l'élément
                
                //comme l'event se propage aux enfants, il se peut
                //qu'on soit sur un élément draggable
                //il faut donc remonter jusqu'à la zone de drop parent pour ne pas tout casser
                while (target.className.indexOf("dropper") == -1)
                {   
                    target = target.parentNode;
                }

                //on applique le style par défaut à la zone de drop
                target.className = "dropper";
                //on insère l'élément cloné et on le récupère bien par ref
                clonedElement = target.appendChild(clonedElement);
                //on lui remet ses events perdus lors du cloneNode()
                dndHandler.applyDragEvents(clonedElement);
                //on supprime l'élément d'origine
                draggedElement.parentNode.removeChild(draggedElement);
            });
        }
    };

    //code pour appliquer nos events aux drop zones
    var droppers = document.querySelectorAll(".dropper");
    var droppersLen = droppers.length;
    for (var i = 0; i < droppersLen; i++)
    {
        dndHandler.applyDropEvents(droppers[i]);
    }

    //code pour appliquer nos events aux elements draggable
    var elements = document.querySelectorAll(".draggable");
    var elementsLen = elements.length;
    for (var i = 0; i < elementsLen; i++)
    {
        dndHandler.applyDragEvents(elements[i]);
    }

})();

console.log("fin tpdrag");