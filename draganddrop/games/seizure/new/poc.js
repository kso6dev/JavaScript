
/*(function(){

    var dndHandler = {
        draggedElement: null,
        score : 0,
        min: 1,
        max: 16,
        numberToPlay: 0,
        nextnumberToPlay:0,
        opt: 1,
        cost: 0,
        rerollCost: 0,
    
        applyDragEvents: function(element){
            element.draggable = true;
            var dndHandler = this;

            element.addEventListener("dragstart", function(e){
                dndHandler.draggedElement = e.target;
                e.dataTransfer.setData("text/plain", "");
                dndHandler.nextnumberToPlay = Math.floor(Math.random() * 16) + dndHandler.min;
                //console.log("dragstart");
            });
        },

        applyDropEvents: function(dropper){
            dropper.addEventListener("dragover", function(e){
                e.preventDefault();
                if (this.className == "dropper")
                {
                    this.className = "dropper drop_hover";
                    updateCostInfo(parseInt(this.innerHTML),dndHandler.numberToPlay);
                }
                else
                if (this.className == "dropper hidden")
                {
                    this.className = "hidden drop_hover";
                    updateCostInfo(0,dndHandler.numberToPlay);
                }
                else
                if (this.className == "red_dropper")
                {
                    this.className = "red_dropper drop_hover";
                    updateCostInfo(parseInt(this.innerHTML),dndHandler.numberToPlay);
                }
                //console.log("dragover: " + this.innerHTML + " " + this.className);
            });

            dropper.addEventListener("dragleave", function(){
                if (this.className == "dropper drop_hover")
                {
                    this.className = "dropper";
                }
                else
                if (this.className == "hidden drop_hover")
                {
                    this.className = "dropper hidden";
                }
                else
                if (this.className == "red_dropper drop_hover")
                {
                    this.className = "red_dropper";
                }
                updateCostInfo(-1,dndHandler.numberToPlay);
                //console.log("dragleave: " + this.innerHTML + " " + this.className);
            });

            dropper.addEventListener("drop", function(e){
                var target = e.target;
                var draggedElement = dndHandler.draggedElement;
                var draggedNumber = parseInt(draggedElement.innerHTML);
                
                if (draggedNumber < 11)
                {
                    dndHandler.cost = 0;
                }
                else
                {
                    dndHandler.cost = draggedNumber - 10;
                }
                
                //drop on empty space
                if (target.className.indexOf("hidden") != -1)
                {
                    target.innerHTML = draggedElement.innerHTML;
                    target.className = "dropper";
                    dndHandler.score -= dndHandler.cost;
                }
                else
                {
                    var targetNumber = parseInt(target.innerHTML);
                    var newtargetNumber;
                    //drop on the same number
                    if (draggedNumber == targetNumber)
                    {
                        //check if other drop with the same number
                        for (var i = 0; i < dropperslen; i++)
                        {
                            newtargetNumber = parseInt(droppers[i].innerHTML);
                            if (newtargetNumber == draggedNumber)
                            {
                                droppers[i].className = "dropper hidden";
                                droppers[i].innerHTML = "";
                                dndHandler.min++;
                                dndHandler.max++;
                                dndHandler.score += draggedNumber;
                            }
                        }
                    }
                    else
                    {
                        //drop on another number
                        target.innerHTML = draggedElement.innerHTML;
                        target.className = "dropper";
                        dndHandler.score -= dndHandler.cost;
                        dndHandler.score -= targetNumber;
                        dndHandler.min++;
                        dndHandler.max++;
                    }
                    dndHandler.costforfree--;
                }
                
                document.getElementById("score").innerHTML = dndHandler.score;
                document.getElementById("range").innerHTML = dndHandler.min + " - " + dndHandler.max;
                dndHandler.numberToPlay = Math.floor(Math.random() * 16) + dndHandler.min;
                draggedElement.innerHTML = dndHandler.numberToPlay;
                
                updateDroppersColor();
                updateCostInfo(-1,dndHandler.numberToPlay);

                //console.log("drop: " + target.innerHTML + " " + target.className);

            });

            dropper.addEventListener("click", function(e){
                var target = e.target;
                if (target.innerHTML != "")
                {
                    var targetNumber = parseInt(target.innerHTML);
                    if (targetNumber < dndHandler.min)
                    {
                        target.innerHTML = Math.floor(Math.random() * 16) + dndHandler.min;
                        dndHandler.rerollCost++;
                        dndHandler.cost = dndHandler.rerollCost;
                        dndHandler.score -= dndHandler.cost;
                        document.getElementById("score").innerHTML = dndHandler.score;

                        updateDroppersColor();
                    }
                }
            });
        }
    };


    var playzone = document.getElementById("playzone");
    var sidemenu = document.getElementById("sidemenu");
    var cost = document.getElementById("cost");
    
    var elements = document.querySelectorAll(".draggable");
    var elementsLen = elements.length;
    dndHandler.numberToPlay = Math.floor(Math.random() * 16) + 1;// returns a random integer from 1 to 16
    for (var i = 0; i < elementsLen; i++)
    {
        elements[i].innerHTML = dndHandler.numberToPlay;  
        dndHandler.applyDragEvents(elements[i]);
    }

    var droppers = document.querySelectorAll(".dropper");
    var dropperslen = droppers.length;
        
    for (var i = 0; i < dropperslen; i++)
    {
        dndHandler.applyDropEvents(droppers[i]);
        updateColor(droppers[i]);
    }
    
    function updateDroppersColor(){
        for (var i = 0; i < dropperslen; i++)
        {
            updateColor(droppers[i]);
        }
    }

    updateDroppersColor();

    updateCostInfo(-1,dndHandler.numberToPlay);

    function updateColor(dropper){
        if (dropper.innerHTML != "")
        {
            var nb = parseInt(dropper.innerHTML);
            if (nb == dndHandler.numberToPlay)
            {
                dropper.style.backgroundColor = "green";
            }
            else if (nb < dndHandler.min)
            {
                dropper.style.backgroundColor = "red";
            }
            else
            {
                dropper.style.backgroundColor = "#822520";
            }
        }
        else
        {
            dropper.style.backgroundColor = "#555";
        }
    }

    function updateCostInfo(dropperNumber, numberToPlay){
        var costValue = 0;
        //no dropper hovered, cost is not calculated yet
        if (dropperNumber == -1)
        {
            cost.innerHTML = costValue;
            cost.style.color = "white";
        }
        else
        {
            if (numberToPlay < 11)
            {
                costValue = 0;
            }
            else
            {
                costValue = numberToPlay - 10;
            }
    
            if (dropperNumber != numberToPlay)
            {
                costValue += dropperNumber;
                cost.innerHTML = -costValue;
                cost.style.color = "red";
            }
            else
            {
                costValue = dropperNumber;
                cost.innerHTML = costValue;
                cost.style.color = "green";
            }
        }
    }

})();

*/
console.log("fin poc");